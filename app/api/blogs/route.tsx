import { NextResponse } from "next/server";
import blog from "api/blog.json";

export async function GET() {
  const post = blog.posts;

  return NextResponse.json(post);
}
