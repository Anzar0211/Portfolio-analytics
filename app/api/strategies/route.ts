import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "../../../lib/dbConnect";
import Strategy from "@/models/Strategy";

export async function GET() {
  try {

    const {userId} =await auth();


    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


    await dbConnect();


    const strategies = await Strategy.find({});
    

    return NextResponse.json(strategies);
  } catch (error) {
    console.error("Error in GET /api/strategies:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}