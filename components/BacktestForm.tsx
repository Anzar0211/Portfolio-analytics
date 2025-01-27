"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function BacktestForm({ onSubmit }) {
  const [strategy, setStrategy] = useState("");
  const [symbol, setSymbol] = useState(""); // State for symbol
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [initialCapital, setInitialCapital] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(""); // State for validation error

  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the date constraints
    if (new Date(startDate) > new Date(endDate)) {
      setError("Start date must be earlier than the end date.");
      return;
    }

    setError(""); // Clear any previous error
    setLoading(true); // Start loading
    await onSubmit({ strategy, symbol, startDate, endDate, initialCapital });
    setLoading(false); // Stop loading
  };

  return (
    <div className="bg-card rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Run Backtest
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Strategy Selection */}
        <div>
          <label
            htmlFor="strategy"
            className="block text-sm font-medium text-muted-foreground"
          >
            Strategy
          </label>
          <select
            id="strategy"
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="mt-1 block w-full rounded-md border border-border bg-background text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
            required
          >
            <option value="">Select a strategy</option>
            <option value="momentum">Momentum Trading</option>
            <option value="meanReversion">Mean Reversion</option>
            <option value="trendFollowing">Trend Following</option>
            <option value="statArb">Statistical Arbitrage</option>
          </select>
        </div>

        {/* Symbol Input */}
        <div>
          <label
            htmlFor="symbol"
            className="block text-sm font-medium text-muted-foreground"
          >
            Stock Symbol
          </label>
          <input
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="mt-1 block w-full rounded-md border border-border bg-background text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-muted-foreground"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            max={today} // Limit selection to today or earlier
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-border bg-background text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
            required
          />
        </div>

        {/* End Date */}
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-muted-foreground"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            min={startDate || "1970-01-01"} // Ensure end date is not earlier than start date
            max={today} // Limit selection to today or earlier
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-border bg-background text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
            required
          />
        </div>

        {/* Initial Capital */}
        <div>
          <label
            htmlFor="initialCapital"
            className="block text-sm font-medium text-muted-foreground"
          >
            Initial Capital
          </label>
          <input
            type="number"
            id="initialCapital"
            value={initialCapital}
            onChange={(e) => setInitialCapital(e.target.value)}
            className="mt-1 block w-full rounded-md border border-border bg-background text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
            required
            min="0"
            step="1000"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-primary/50"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Running...
            </div>
          ) : (
            "Run Backtest"
          )}
        </button>
      </form>
    </div>
  );
}
