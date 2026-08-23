"use client";

import { useEffect } from "react";

// يسجّل مشاهدة للمقال في الخلفية دون عرض أي رقم للزائر.
// العدد يظهر فقط في لوحة الإحصاءات الخاصة (/admin/stats).
export default function ArticleViews({ slug }: { slug: string }) {
  useEffect(() => {
    fetch(`/api/articles/${slug}/views`, { method: "POST" }).catch(() => {});
  }, [slug]);

  return null;
}
