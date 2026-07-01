import Link from "next/link";
import type { Article } from "@/types";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/knowledge/${article.slug}`} className="group block">
      <article className="border-b border-border py-8 hover:border-primary transition-colors">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-surface text-primary font-medium"
            >
              {tag}
            </span>
          ))}
          <span className="text-xs text-text-muted">{article.readingTime} قراءة</span>
        </div>

        <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
          {article.title}
        </h2>

        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {article.description}
        </p>

        <time className="text-xs text-text-muted">{article.date}</time>
      </article>
    </Link>
  );
}
