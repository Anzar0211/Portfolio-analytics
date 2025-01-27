import mongoose from "mongoose"

const StockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  change: { type: Number, required: true },
  changePercent: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  volume: { type: Number, required: true },
  peRatio: { type: Number },
  dividend: { type: Number },
  yield: { type: Number },
  lastUpdated: { type: Date, default: Date.now },
})

export default mongoose.models.Stock || mongoose.model("Stock", StockSchema)

