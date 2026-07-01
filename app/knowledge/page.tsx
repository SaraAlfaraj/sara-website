"use client";

import { useState } from "react";
import { articles, allTags } from "@/content/knowledge";
import ArticleCardGrid from "@/components/knowledge/ArticleCardGrid";
import CategoryFilter from "@/components/knowledge/CategoryFilter";

export default function KnowledgePage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-foreground mb-2">المعرفة</h1>
        <div className="w-12 h-0.5 bg-primary mb-4" />
        <p className="text-text-muted text-sm">
          مقالات وتأملات في التقنية، التعلم، وما بينهما.
        </p>
      </div>

      <CategoryFilter
        tags={allTags}
        active={activeTag}
        onChange={setActiveTag}
      />

      {filtered.length === 0 ? (
        <p className="text-text-muted text-sm py-8">
          لا توجد مقالات في هذا التصنيف حالياً.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((article) => (
            <ArticleCardGrid key={article.slug} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
