import Link from "next/link";
import type { Article } from "@/types";

export default function ArticleCardGrid({ article }: { article: Article }) {
  return (
    <Link href={`/knowledge/${article.slug}`} className="group block h-full">
      <article className="h-full flex flex-col border border-border rounded-2xl p-6 hover:border-primary hover:shadow-sm transition-all duration-200">
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

        <h2 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
          {article.title}
        </h2>

        <p className="text-sm text-text-muted leading-relaxed line-clamp-3 flex-1">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
          <time className="text-xs text-text-muted">{article.date}</time>
          <span className="text-xs text-text-muted">{article.readingTime} قراءة</span>
        </div>
      </article>
    </Link>
  );
}
