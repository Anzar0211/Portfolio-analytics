import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview";
import { StrategyPerformance } from "@/components/dashboard/strategy-performance";
import { RecentTrades } from "@/components/dashboard/recent-trades";
import { MarketUpdates } from "@/components/dashboard/market-updates";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Portfolio Analytics Dashboard",
};

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Portfolio Analytics"
        text="Monitor your investment strategies and analyze market data."
      />
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-7">
        <PortfolioOverview className="lg:col-span-4 col-span-2" />
        <StrategyPerformance className="lg:col-span-3 col-span-2" />
        <RecentTrades className="col-span-2 lg:col-span-4" />
        <MarketUpdates className="col-span-2 lg:col-span-3" />
      </div>
    </DashboardShell>
  );
}
