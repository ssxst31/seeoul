import { NextRequest, NextResponse } from "next/server";
import blog from "api/blog.json";

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const extractedNumber = parseInt(pathname.match(/\d+/)![0], 10);
  const post = blog.posts.find((blog) => blog.id === Number(extractedNumber));

  return NextResponse.json(post);
}
