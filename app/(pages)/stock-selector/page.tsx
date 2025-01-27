import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import StockSelector from "../../../components/StockSelector";

export default async function StockSelectorPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Stock Selector
        </h1>
        <StockSelector />
      </main>
    </div>
  );
}
