import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import StrategyCard from "../../../components/StrategyCard";

export default async function StrategiesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Trading Strategies
        </h1>
        <StrategyCard />
      </main>
    </div>
  );
}
