import { MongoClient } from "mongodb";
import { config } from "dotenv";

config({ path: ".env.local" });

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
const seedData = [
  {
    name: "Momentum",
    description:
      "A strategy that capitalizes on the continuation of existing market trends.",
    performance: {
      winRate: 68,
      avgReturn: 12500,
    },
    riskLevel: "Medium",
  },
  {
    name: "Mean Reversion",
    description: "A strategy that bets on the return of prices to their mean.",
    performance: {
      winRate: 72,
      avgReturn: 15000,
    },
    riskLevel: "Low",
  },
  {
    name: "Trend Following",
    description: "A strategy that follows the direction of market trends.",
    performance: {
      winRate: 65,
      avgReturn: 9800,
    },
    riskLevel: "High",
  },
  {
    name: "Statistical Arbitrage",
    description:
      "A strategy that exploits pricing inefficiencies between related assets.",
    performance: {
      winRate: 70,
      avgReturn: 11200,
    },
    riskLevel: "Medium",
  },
];

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("test");
    const collection = database.collection("strategies");

    const result = await collection.insertMany(seedData);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.error("Error populating stocks:", error);
  } finally {
    await client.close();
  }
}

run();
