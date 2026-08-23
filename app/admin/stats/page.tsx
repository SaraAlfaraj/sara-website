import type { Metadata } from "next";
import { articles } from "@/content/knowledge";
import { downloads } from "@/content/downloads";
import { getArticleViews, getDownloadCount, redis } from "@/lib/redis";

export const metadata: Metadata = {
  title: "الإحصاءات",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function StatsPage() {
  const articleStats = await Promise.all(
    articles.map(async (a) => ({
      title: a.title,
      value: await getArticleViews(a.slug),
    }))
  );

  const downloadStats = await Promise.all(
    downloads.map(async (d) => ({
      title: d.title,
      value: await getDownloadCount(d.id),
    }))
  );

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-2xl font-semibold text-foreground mb-8">
        الإحصاءات
      </h1>

      {!redis && (
        <p className="text-sm text-accent mb-8">
          قاعدة البيانات غير متصلة — تأكدي من متغيرات البيئة الخاصة بـ
          Upstash Redis.
        </p>
      )}

      <StatsTable heading="مشاهدات المقالات" rows={articleStats} unit="مشاهدة" />
      <div className="h-10" />
      <StatsTable heading="تحميلات الأجندات" rows={downloadStats} unit="تحميل" />
    </section>
  );
}

function StatsTable({
  heading,
  rows,
  unit,
}: {
  heading: string;
  rows: { title: string; value: number }[];
  unit: string;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-text-muted mb-3">
        {heading}
      </h2>
      <div className="border border-border rounded-2xl divide-y divide-border overflow-hidden">
        {rows.map((row) => (
          <div
            key={row.title}
            className="flex items-center justify-between px-5 py-3"
          >
            <span className="text-sm text-foreground">{row.title}</span>
            <span className="text-sm text-primary font-medium">
              {row.value.toLocaleString("ar")} {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
