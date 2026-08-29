export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
  url?: string;
};

export type IjazahItem = {
  title: string;
  grantor?: string;
  date: string;
  description?: string;
  file?: string;
};

export type AchievementItem = {
  title: string;
  organization?: string;
  description: string;
  year: string;
  tag?: string;
  rank?: number;
};

export type ContactLink = {
  label: string;
  href: string;
  handle: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  /** مقال غير مُدرَج: لا يظهر في شبكة المعرفة أو الرئيسية أو خريطة الموقع،
   * لكنه يبقى متاحًا لمن يملك الرابط المباشر فقط. */
  hidden?: boolean;
};

export type DownloadCategory = "سنوية" | "فصلية" | "دراسية";

export type DownloadItem = {
  id: string;
  title: string;
  year: string;
  description: string;
  category: DownloadCategory;
  file: string;
  fileSize: string;
};
