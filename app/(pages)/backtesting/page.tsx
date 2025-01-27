import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import BacktestingWrapper from "@/components/BacktestingWrapper";

export default async function BacktestingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Backtesting
        </h1>
        <BacktestingWrapper />
      </main>
    </div>
  );
}
