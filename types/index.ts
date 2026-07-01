export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
};

export type AchievementItem = {
  title: string;
  description: string;
  year: string;
  tag?: string;
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
