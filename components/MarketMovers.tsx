"use client"; // Add this if using Next.js App Router

import { useEffect, useState } from "react";

interface Stock {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
}

export default function MarketMovers() {
  const [topGainers, setTopGainers] = useState<Stock[]>([]);
  const [topLosers, setTopLosers] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketMovers = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.NEXT_ALPHAVANTAGE_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch market movers data");
        }

        const data = await response.json();

        // Extract top 2 gainers and top 2 losers from the API response
        setTopGainers(data.top_gainers.slice(0, 5) || []);
        setTopLosers(data.top_losers.slice(0, 5) || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMarketMovers();
  }, []);

  if (loading) {
    return <div className="text-center text-muted-foreground">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        Error fetching market movers: {error}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-lg dark:shadow-xl border border-border p-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Market Movers
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-green-600 dark:text-green-400 mb-3">
            Top Gainers
          </h3>
          <ul className="space-y-3">
            {topGainers.map((stock) => (
              <li
                key={stock.ticker}
                className="flex justify-between items-center border-b border-border pb-3 last:border-b-0"
              >
                <span className="text-foreground">
                  {stock.ticker} - {stock.price}
                </span>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {stock.change_percentage}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-red-600 dark:text-red-400 mb-3">
            Top Losers
          </h3>
          <ul className="space-y-3">
            {topLosers.map((stock) => (
              <li
                key={stock.ticker}
                className="flex justify-between items-center border-b border-border pb-3 last:border-b-0"
              >
                <span className="text-foreground">
                  {stock.ticker} - {stock.price}
                </span>
                <span className="text-red-600 dark:text-red-400 font-medium">
                  {stock.change_percentage}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
