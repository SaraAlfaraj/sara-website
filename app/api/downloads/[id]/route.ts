import { NextResponse } from "next/server";
import { downloads } from "@/content/downloads";
import { getDownloadCount, incrementDownloadCount } from "@/lib/redis";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!downloads.some((d) => d.id === id)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const count = await getDownloadCount(id);
  return NextResponse.json({ count });
}

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!downloads.some((d) => d.id === id)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const count = await incrementDownloadCount(id);
  return NextResponse.json({ count });
}
