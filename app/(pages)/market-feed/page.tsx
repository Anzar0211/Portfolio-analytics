import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import MarketNews from "../../../components/MarketNews";
import MarketMovers from "../../../components/MarketMovers";
import EconomicCalendar from "@/components/EconomicCalendar";

export default async function MarketFeedPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">
          Market Feed
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <MarketNews />
          <MarketMovers />
          <EconomicCalendar />
        </div>
      </main>
    </div>
  );
}
