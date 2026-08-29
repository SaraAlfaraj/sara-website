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
  {
    slug: "683218",
    title: "وماذا بعد الحد؟",
    description:
      "قراءة في كلام أهل العلم حول لباس المرأة أمام النساء، وكيف تحوّلت عبارة فقهية إلى ذريعة للتوسع في الكشف.",
    date: "٢٠٢٦/٨/٢٩",
    tags: [],
    readingTime: "١٣ دقيقة",
    hidden: true,
  },
];

/** المقالات الظاهرة للعموم (تُستخدم في شبكة المعرفة، الرئيسية، وخريطة الموقع). */
export const visibleArticles = articles.filter((a) => !a.hidden);

export const allTags = [...new Set(visibleArticles.flatMap((a) => a.tags))];

/**
 * روابط قديمة لمقالات مخفية تغيّر رابطها؛ تبقى هذه الروابط مبنية (بدل 404)
 * وتعرض رسالة "محتوى مخفي" مع رابط للعودة إلى صفحة المعرفة.
 */
export const retiredSlugs = ["831573"];
