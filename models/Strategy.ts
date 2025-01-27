import mongoose from "mongoose"

const StrategySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  performance: {
    winRate: { type: Number, required: true },
    avgReturn: { type: Number, required: true },
  },
  riskLevel: { type: String, enum: ["Low", "Medium", "High"], required: true },
})

export default mongoose.models.Strategy || mongoose.model("Strategy", StrategySchema)

