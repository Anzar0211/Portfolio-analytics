import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "../../../lib/dbConnect";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  try {
    const { userId } = await auth();

  
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


    await dbConnect();


    const portfolios = await Portfolio.find({ userId });

  
    if (!portfolios || portfolios.length === 0) {
      return new NextResponse("No portfolio found", { status: 404 });
    }


    return NextResponse.json(portfolios);
  } catch (error: unknown) {

    if (error instanceof Error) {

      if (error.name === "MongoNetworkError") {
        return new NextResponse("Database connection error", { status: 503 });
      }

    
      return new NextResponse(error.message, { status: 500 });
    }

   
    return new NextResponse("An unexpected error occurred", { status: 500 });
  }
}