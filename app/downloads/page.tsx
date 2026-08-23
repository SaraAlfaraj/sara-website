import type { Metadata } from "next";
import { downloads } from "@/content/downloads";
import DownloadCard from "@/components/downloads/DownloadCard";

export const metadata: Metadata = {
  title: "التحميل",
  description: "أجندات سنوية وفصلية ودراسية جاهزة للتحميل والطباعة.",
};

export default function DownloadsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          التحميل
        </h1>
        <div className="w-12 h-0.5 bg-primary mb-4" />
        <p className="text-text-muted text-sm">
          أجندات سنوية وفصلية ودراسية جاهزة للتحميل والطباعة.
        </p>
      </div>

      {downloads.length === 0 ? (
        <p className="text-text-muted text-sm py-8">
          لا توجد ملفات متاحة حالياً.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {downloads.map((item) => (
            <DownloadCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
