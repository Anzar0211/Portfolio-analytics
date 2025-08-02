import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/backtesting(.*)",
  "/market-feed(.*)",
  "/stock-selector(.*)",
  "/strategies(.*)"
]);

// Define public authentication routes
const isAuthRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {

  const { userId } = await auth();


  if (!userId && isProtectedRoute(req)) {
    return Response.redirect(new URL("/sign-in", req.url));
  }

  if (userId && isAuthRoute(req)) {
    return Response.redirect(new URL("/dashboard", req.url));
  }

  return;
});

export const config = {
  matcher: [
    '/((?!_next|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};