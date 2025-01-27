import mongoose from "mongoose"

const TradeSchema = new mongoose.Schema({
  userId: {type:String,required:true},
  portfolioId: { type: mongoose.Schema.Types.ObjectId, ref: "Portfolio", required: true },
  symbol: { type: String, required: true },
  type: { type: String, enum: ["BUY", "SELL"], required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
})

export default mongoose.models.Trade || mongoose.model("Trade", TradeSchema)

