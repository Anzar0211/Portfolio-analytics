import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes

const isAuthRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Await the auth() function to get the userId
  const { userId } = await auth();

  // Redirect authenticated users away from auth routes
  if (userId && isAuthRoute(req)) {
    return Response.redirect(new URL("/dashboard", req.url));
  }

  // Protect dashboard routes

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};