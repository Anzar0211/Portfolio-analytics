import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "@/lib/dbConnect";
import Trade from "@/models/Trade";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  const { userId } =await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  try {

    const portfolios = await Portfolio.find({ userId });

    if (!portfolios || portfolios.length === 0) {
      return NextResponse.json({ error: "No portfolios found" }, { status: 404 });
    }


    const portfolioIds = portfolios.map((portfolio) => portfolio._id);


    const trades = await Trade.find({ portfolioId: { $in: portfolioIds } })
      .sort({ timestamp: -1 }) 
      .limit(10); 

    return NextResponse.json(trades);
  } catch (error: unknown) {
      if (error instanceof Error) {
          return NextResponse.json({ error: error.message || "Failed to fetch trades" }, { status: 500 });
      } else {
          return NextResponse.json({ error: "Failed to fetch trades" }, { status: 500 });
      }
  }
}
