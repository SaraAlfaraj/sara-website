import { Redis } from "@upstash/redis";

// يدعم أسماء متغيرات البيئة التي تستخدمها تكاملات Vercel المختلفة
// (Upstash المباشر أو تكامل Vercel KV القديم القائم على Upstash).
const url =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

export const redis = url && token ? new Redis({ url, token }) : null;

const countKey = (id: string) => `downloads:count:${id}`;

export async function getDownloadCount(id: string): Promise<number> {
  if (!redis) return 0;
  const count = await redis.get<number>(countKey(id));
  return count ?? 0;
}

export async function incrementDownloadCount(id: string): Promise<number> {
  if (!redis) return 0;
  return redis.incr(countKey(id));
}
