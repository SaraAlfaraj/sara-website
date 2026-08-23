import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "dont-forget-your-mind",
    title: "لا تنسَ عقلك",
    description:
      "في عصر أصبحت فيه الأدوات تفكر وتكتب وتحلل، يصبح السؤال الأهم: هل لا تزال تستخدم عقلك؟",
    date: "٢٠٢٦/٧/٢",
    tags: ["تأملات", "ذكاء اصطناعي"],
    readingTime: "٥ دقائق",
  },
  {
    slug: "how-to-achieve-goals",
    title: "الأهداف ليست قائمة أمنيات !",
    description:
      "الحماس وحده لا يكفي لتحقيق الأهداف. كيف نكتشف ما يهمنا فعلًا، ونختار ما يستحق وقتنا، ونحوّله إلى خطوات قابلة للتنفيذ؟",
    date: "٢٠٢٦/٨/٢٣",
    tags: ["تأملات", "إنتاجية"],
    readingTime: "١٥ دقيقة",
  },
];

export const allTags = [...new Set(articles.flatMap((a) => a.tags))];
