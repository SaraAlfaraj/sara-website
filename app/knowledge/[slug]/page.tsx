import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Link2Off } from "lucide-react";
import { articles, retiredSlugs } from "@/content/knowledge";
import ArticleViews from "@/components/knowledge/ArticleViews";
import ShareButton from "@/components/ui/ShareButton";
import { FadeIn } from "@/components/ui/AnimateIn";
import FloatIcon from "@/components/ui/FloatIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...articles.map((a) => ({ slug: a.slug })),
    ...retiredSlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  if (retiredSlugs.includes(slug)) {
    return { title: "غير متاح", robots: { index: false, follow: false } };
  }

  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
    ...(article.hidden && { robots: { index: false, follow: false } }),
  };
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  if (retiredSlugs.includes(slug)) {
    return (
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <FadeIn className="flex flex-col items-center">
          <FloatIcon className="mb-5">
            <Link2Off className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </FloatIcon>
          <h1 className="text-base font-bold text-primary mb-2">هذا المقال غير متاح</h1>
          <Link
            href="/knowledge"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            للانتقال إلى المقالات اضغط <span className="underline">هنا</span>
          </Link>
        </FadeIn>
      </section>
    );
  }

  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const { default: ArticleContent } = await import(
    `@/content/knowledge/${slug}.mdx`
  );

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/knowledge"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-12"
      >
        ← العودة إلى المعرفة
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-surface text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-semibold text-foreground leading-snug mb-4">
          {article.title}
        </h1>

        <p className="text-text-muted text-base leading-relaxed mb-6">
          {article.description}
        </p>

        <div className="flex items-center justify-between gap-4 text-xs text-text-muted border-t border-border pt-4">
          <div className="flex items-center gap-4">
            <time>{article.date}</time>
            <span>·</span>
            <span>{article.readingTime} قراءة</span>
            <ArticleViews slug={article.slug} />
          </div>
          <ShareButton
            url={`/knowledge/${article.slug}`}
            title={article.title}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-border text-text-muted hover:border-primary hover:text-primary transition-colors shrink-0"
          />
        </div>
      </header>

      <div className="prose-article">
        <ArticleContent />
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <Link
          href="/knowledge"
          className="text-sm text-text-muted hover:text-primary transition-colors"
        >
          ← العودة إلى قائمة المقالات
        </Link>
      </footer>
    </article>
  );
}
