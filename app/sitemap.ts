import type { MetadataRoute } from "next";
import { articles } from "@/content/knowledge";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/about",
    "/experience",
    "/knowledge",
    "/achievements",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/knowledge/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...articlePages];
}
