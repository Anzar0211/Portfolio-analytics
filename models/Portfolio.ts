import mongoose from "mongoose"

const PortfolioSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  totalValue: { type: Number, required: true },
  cash: { type: Number, required: true },
  stocks: [
    {
      stockId: { type: mongoose.Schema.Types.ObjectId, ref: "Stock" },
      quantity: { type: Number, required: true },
      averagePrice: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema)

