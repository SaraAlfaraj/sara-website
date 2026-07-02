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
  {
    slug: "why-arabic-tech-writing-matters",
    title: "لماذا أكتب بالعربية عن التقنية؟",
    description:
      "تأمل في غياب المحتوى التقني العربي العميق، وما الذي يدفعني لملء هذا الفراغ بكلمات أثق فيها.",
    date: "٢٠٢٦/٦/٢٠",
    tags: ["تأملات", "كتابة"],
    readingTime: "٤ دقائق",
  },
  {
    slug: "how-i-built-this-site",
    title: "كيف بنيت هذا الموقع — القرارات والأسباب",
    description:
      "جولة تقنية في الأدوات والقرارات التي شكّلت بنية هذا الموقع: Next.js، Tailwind، RTL، وما بينها.",
    date: "٢٠٢٦/٦/٢٥",
    tags: ["تطوير الويب", "Next.js"],
    readingTime: "٦ دقائق",
  },
  {
    slug: "continuous-learning-tools",
    title: "أدوات تساعدني على التعلم المستمر",
    description:
      "ليست قائمة تطبيقات، بل نظام. كيف أنظّم التعلم، أوثّق الفهم، وأتجنب وهم القراءة الكثيرة دون ترسّخ.",
    date: "٢٠٢٦/٦/١٥",
    tags: ["إنتاجية", "تعلم"],
    readingTime: "٥ دقائق",
  },
  {
    slug: "ux-fundamentals-arabic",
    title: "مبادئ تجربة المستخدم — ما يجب أن يعرفه كل مطوّر",
    description:
      "تجربة المستخدم ليست تخصص المصمم وحده. مقدمة عملية لمفاهيم UX تجعل كل ما تبنيه أفضل وأكثر إنسانية.",
    date: "٢٠٢٦/٥/٢٨",
    tags: ["تجربة المستخدم", "تطوير الويب"],
    readingTime: "٧ دقائق",
  },
  {
    slug: "recommended-tech-reads",
    title: "قراءات تقنية غيّرت طريقة تفكيري",
    description:
      "ليست أفضل الكتب — بل الكتب التي تركت أثراً في طريقة تعاملي مع الكود، التصميم، والعمل الجماعي.",
    date: "٢٠٢٦/٥/١٠",
    tags: ["موارد", "كتب"],
    readingTime: "٤ دقائق",
  },
];

export const allTags = [...new Set(articles.flatMap((a) => a.tags))];
