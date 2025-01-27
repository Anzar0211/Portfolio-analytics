import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "../../../../lib/dbConnect";
import Portfolio from "@/models/Portfolio";
import Stock from "@/models/Stock";
import Trade from "@/models/Trade";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await dbConnect();

  const { stockId, quantity } = await req.json();

  const stock = await Stock.findById(stockId);

  if (!stock) {
    return new NextResponse("Stock not found", { status: 404 });
  }

  let portfolio = await Portfolio.findOne({ userId });

  if (!portfolio) {
    portfolio = new Portfolio({
      userId,
      name: "My Portfolio",
      totalValue: 0,
      cash: 10000,
      stocks: [],
    });
  }

  const stockIndex = portfolio.stocks.findIndex(
    (s: { stockId: { toString: () => string } }) => s.stockId.toString() === stockId
  );

  if (stockIndex > -1) {
    // Update existing stock
    const existingStock = portfolio.stocks[stockIndex];
    const totalShares = existingStock.quantity + quantity;
    const totalCost =
      existingStock.quantity * existingStock.averagePrice +
      quantity * stock.currentPrice;
    existingStock.quantity = totalShares;
    existingStock.averagePrice = totalCost / totalShares;
  } else {
    portfolio.stocks.push({
      stockId: stock._id,
      quantity,
      averagePrice: stock.currentPrice,
    });
  }

  const trade = new Trade({
    userId,
    portfolioId: portfolio._id,
    symbol: stock.symbol,
    type: "BUY",
    quantity,
    price: stock.currentPrice,
    timestamp: new Date(),
  });

  await trade.save();

  // Update portfolio's total value
  portfolio.totalValue =
    portfolio.stocks.reduce(
      (total: number, s: { quantity: number; averagePrice: number }) =>
        total + s.quantity * stock.currentPrice,
      0
    ) + portfolio.cash;

  await portfolio.save();

  return NextResponse.json(portfolio);
}