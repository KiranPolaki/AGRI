import { NextResponse } from "next/server";

export async function middleware(req: { nextUrl: any; geo: any }) {
  const { nextUrl: url, geo } = req;
  const country = geo.country || "India";

  url.searchParams.set("country", country);

  return NextResponse.rewrite(url);
}
