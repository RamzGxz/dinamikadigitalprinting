
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {

  const session = await getSession();
  console.log(session)
  if (session?.user) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
}

export const config = {
  matcher: '/api/user/get'
}