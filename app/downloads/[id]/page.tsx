import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { downloads } from "@/content/downloads";
import DownloadCard from "@/components/downloads/DownloadCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return downloads.map((d) => ({ id: d.id }));
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const item = downloads.find((d) => d.id === id);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: "website",
    },
  };
}

export default async function DownloadItemPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const item = downloads.find((d) => d.id === id);
  if (!item) notFound();

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/downloads"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-12"
      >
        ← العودة إلى التحميل
      </Link>

      <DownloadCard item={item} />
    </section>
  );
}
