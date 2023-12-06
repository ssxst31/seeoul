import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.host.match(/netlify.app/)) {
    return NextResponse.redirect("https://seeoul.vercel.app");
  }
  return NextResponse.next();
}
