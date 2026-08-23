import { NextResponse } from "next/server";
import { articles } from "@/content/knowledge";
import { getArticleViews, incrementArticleViews } from "@/lib/redis";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!articles.some((a) => a.slug === slug)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const views = await getArticleViews(slug);
  return NextResponse.json({ views });
}

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!articles.some((a) => a.slug === slug)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const views = await incrementArticleViews(slug);
  return NextResponse.json({ views });
}
