export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
  url?: string;
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
};
