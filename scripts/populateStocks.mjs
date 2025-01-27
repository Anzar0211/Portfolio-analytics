import { MongoClient } from "mongodb";
import { config } from "dotenv";

config({ path: ".env.local" });

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

const dummyStocks = [
  {
    symbol: "DIS",
    name: "The Walt Disney Company",
    currentPrice: 180.45,
    change: 1.75,
    changePercent: 0.98,
    marketCap: 320000000000,
    volume: 17000000,
    peRatio: 30.8,
    dividend: 1.76,
    yield: 0.98,
  },
  {
    symbol: "NFLX",
    name: "Netflix Inc.",
    currentPrice: 650.2,
    change: -12.3,
    changePercent: -1.85,
    marketCap: 290000000000,
    volume: 14000000,
    peRatio: 50.6,
    dividend: 0,
    yield: 0,
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    currentPrice: 245.35,
    change: 2.4,
    changePercent: 0.99,
    marketCap: 520000000000,
    volume: 9000000,
    peRatio: 32.7,
    dividend: 1.6,
    yield: 0.65,
  },
  {
    symbol: "MA",
    name: "Mastercard Inc.",
    currentPrice: 380.25,
    change: 1.8,
    changePercent: 0.48,
    marketCap: 450000000000,
    volume: 8000000,
    peRatio: 35.4,
    dividend: 1.68,
    yield: 0.44,
  },
  {
    symbol: "BAC",
    name: "Bank of America Corporation",
    currentPrice: 40.2,
    change: 0.3,
    changePercent: 0.75,
    marketCap: 330000000000,
    volume: 62000000,
    peRatio: 13.5,
    dividend: 0.84,
    yield: 2.09,
  },
  {
    symbol: "COST",
    name: "Costco Wholesale Corporation",
    currentPrice: 510.8,
    change: 5.6,
    changePercent: 1.11,
    marketCap: 250000000000,
    volume: 4000000,
    peRatio: 40.2,
    dividend: 2.88,
    yield: 0.57,
  },
  {
    symbol: "KO",
    name: "The Coca-Cola Company",
    currentPrice: 60.35,
    change: -0.1,
    changePercent: -0.17,
    marketCap: 260000000000,
    volume: 21000000,
    peRatio: 25.9,
    dividend: 1.76,
    yield: 2.92,
  },
  {
    symbol: "PEP",
    name: "PepsiCo Inc.",
    currentPrice: 170.45,
    change: 0.9,
    changePercent: 0.53,
    marketCap: 235000000000,
    volume: 6000000,
    peRatio: 26.8,
    dividend: 4.3,
    yield: 2.52,
  },
  {
    symbol: "INTC",
    name: "Intel Corporation",
    currentPrice: 55.6,
    change: -0.8,
    changePercent: -1.42,
    marketCap: 220000000000,
    volume: 42000000,
    peRatio: 12.3,
    dividend: 1.2,
    yield: 2.16,
  },
  {
    symbol: "ORCL",
    name: "Oracle Corporation",
    currentPrice: 95.2,
    change: 0.6,
    changePercent: 0.63,
    marketCap: 280000000000,
    volume: 22000000,
    peRatio: 20.8,
    dividend: 1.28,
    yield: 1.35,
  },
  {
    symbol: "PYPL",
    name: "PayPal Holdings Inc.",
    currentPrice: 120.75,
    change: -1.25,
    changePercent: -1.02,
    marketCap: 150000000000,
    volume: 13000000,
    peRatio: 35.2,
    dividend: 0,
    yield: 0,
  },
  {
    symbol: "ADBE",
    name: "Adobe Inc.",
    currentPrice: 510.3,
    change: -2.3,
    changePercent: -0.45,
    marketCap: 240000000000,
    volume: 3200000,
    peRatio: 42.5,
    dividend: 0,
    yield: 0,
  },
  {
    symbol: "CRM",
    name: "Salesforce Inc.",
    currentPrice: 225.8,
    change: 1.2,
    changePercent: 0.53,
    marketCap: 210000000000,
    volume: 7500000,
    peRatio: 45.1,
    dividend: 0,
    yield: 0,
  },
  {
    symbol: "CSCO",
    name: "Cisco Systems Inc.",
    currentPrice: 56.4,
    change: 0.4,
    changePercent: 0.71,
    marketCap: 230000000000,
    volume: 18000000,
    peRatio: 17.5,
    dividend: 1.52,
    yield: 2.7,
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
    currentPrice: 65.75,
    change: -0.5,
    changePercent: -0.76,
    marketCap: 280000000000,
    volume: 31000000,
    peRatio: 10.8,
    dividend: 3.5,
    yield: 5.32,
  },
  {
    symbol: "PFE",
    name: "Pfizer Inc.",
    currentPrice: 43.1,
    change: 0.1,
    changePercent: 0.23,
    marketCap: 250000000000,
    volume: 24000000,
    peRatio: 9.7,
    dividend: 1.6,
    yield: 3.71,
  },
  {
    symbol: "MRK",
    name: "Merck & Co. Inc.",
    currentPrice: 81.4,
    change: 0.7,
    changePercent: 0.87,
    marketCap: 210000000000,
    volume: 19000000,
    peRatio: 16.2,
    dividend: 2.6,
    yield: 3.2,
  },
  {
    symbol: "UNH",
    name: "UnitedHealth Group Incorporated",
    currentPrice: 400.5,
    change: 5.2,
    changePercent: 1.31,
    marketCap: 370000000000,
    volume: 4500000,
    peRatio: 23.1,
    dividend: 5.8,
    yield: 1.45,
  },
  {
    symbol: "T",
    name: "AT&T Inc.",
    currentPrice: 25.6,
    change: -0.1,
    changePercent: -0.39,
    marketCap: 190000000000,
    volume: 30000000,
    peRatio: 7.5,
    dividend: 1.2,
    yield: 4.69,
  },
  {
    symbol: "VZ",
    name: "Verizon Communications Inc.",
    currentPrice: 51.5,
    change: 0.2,
    changePercent: 0.39,
    marketCap: 220000000000,
    volume: 27000000,
    peRatio: 9.1,
    dividend: 2.56,
    yield: 4.97,
  },
];

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("test");
    const collection = database.collection("stocks");

    const result = await collection.insertMany(dummyStocks);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.error("Error populating stocks:", error);
  } finally {
    await client.close();
  }
}

run();
