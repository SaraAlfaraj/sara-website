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
    title: "كيف نحقق أهدافنا؟",
    description:
      "مع بداية كل عام يمتلئ الإنسان بالحماس والخطط، لكن كيف نحدد أهدافنا فعلاً؟ وكيف نسعى لتحقيقها بشكل واقعي ومرن؟",
    date: "٢٠٢٦/٧/٢",
    tags: ["تأملات", "إنتاجية"],
    readingTime: "٦ دقائق",
  },
];

export const allTags = [...new Set(articles.flatMap((a) => a.tags))];
