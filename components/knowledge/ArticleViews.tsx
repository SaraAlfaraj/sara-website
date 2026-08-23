"use client";

import { useEffect, useState } from "react";

export default function ArticleViews({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/articles/${slug}/views`, { method: "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setViews(data.views);
      })
      .catch(() => {});
  }, [slug]);

  if (views === null) return null;

  return (
    <>
      <span>·</span>
      <span>{views.toLocaleString("ar")} مشاهدة</span>
    </>
  );
}
