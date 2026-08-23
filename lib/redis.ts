import { Redis } from "@upstash/redis";

// يدعم أسماء متغيرات البيئة التي تستخدمها تكاملات Vercel المختلفة
// (Upstash المباشر أو تكامل Vercel KV القديم القائم على Upstash).
const url =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

export const redis = url && token ? new Redis({ url, token }) : null;

async function getCount(key: string): Promise<number> {
  if (!redis) return 0;
  const count = await redis.get<number>(key);
  return count ?? 0;
}

async function incrementCount(key: string): Promise<number> {
  if (!redis) return 0;
  return redis.incr(key);
}

const downloadKey = (id: string) => `downloads:count:${id}`;
export const getDownloadCount = (id: string) => getCount(downloadKey(id));
export const incrementDownloadCount = (id: string) =>
  incrementCount(downloadKey(id));

const viewKey = (slug: string) => `articles:views:${slug}`;
export const getArticleViews = (slug: string) => getCount(viewKey(slug));
export const incrementArticleViews = (slug: string) =>
  incrementCount(viewKey(slug));
