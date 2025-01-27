import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import dbConnect from "../../../lib/dbConnect"
import Stock from "@/models/Stock"

export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  await dbConnect()

  const stocks = await Stock.find({}).sort({ marketCap: -1 }).limit(100)

  return NextResponse.json(stocks)
}

