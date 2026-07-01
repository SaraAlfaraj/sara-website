import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/content/knowledge";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
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
  };
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
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

        <div className="flex items-center gap-4 text-xs text-text-muted border-t border-border pt-4">
          <time>{article.date}</time>
          <span>·</span>
          <span>{article.readingTime} قراءة</span>
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
