import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles, retiredSlugs } from "@/content/knowledge";
import ArticleViews from "@/components/knowledge/ArticleViews";
import ShareButton from "@/components/ui/ShareButton";

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
    return { title: "محتوى مخفي", robots: { index: false, follow: false } };
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
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-12 h-12 mx-auto mb-6 text-text-muted"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
        <h1 className="text-xl font-semibold text-foreground mb-3">محتوى مخفي</h1>
        <Link
          href="/knowledge"
          className="text-sm text-primary hover:opacity-80 transition-opacity"
        >
          للانتقال إلى المقالات اضغط هنا
        </Link>
      </div>
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
