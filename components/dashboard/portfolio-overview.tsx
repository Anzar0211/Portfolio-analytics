"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

export function PortfolioOverview({ className }: { className?: string }) {
  const [portfolio, setPortfolio] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/portfolio");

        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }

        const data = await response.json();
        if (data.length > 0) {
          setPortfolio(data[0]); // Assuming a single portfolio per user
        } else {
          setError("No portfolio data available");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "An unknown error occurred");
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Placeholder metrics and chart data during loading
  const placeholderMetrics = [
    { title: "Total Portfolio Value", value: "Loading..." },
    { title: "Cash", value: "Loading..." },
    { title: "Total Stocks", value: "Loading..." },
    { title: "ROI", value: "Loading..." },
    { title: "CAGR", value: "Loading..." },
    { title: "Max Drawdown", value: "Loading..." },
  ];

  const placeholderChartData = Array(6).fill({ date: "", value: 0 });

  // Use real data if available
  const metrics = loading
    ? placeholderMetrics
    : [
        {
          title: "Total Portfolio Value",
          value: `$${portfolio?.totalValue.toLocaleString()}`,
        },
        { title: "Cash", value: `$${portfolio?.cash.toLocaleString()}` },
        { title: "Total Stocks", value: portfolio?.stocks.length || 0 },
        { title: "ROI", value: "12.3%" }, // Example static metric
        { title: "CAGR", value: "10.5%" }, // Example static metric
        { title: "Max Drawdown", value: "-5.8%" }, // Example static metric
      ];

  const chartData = loading
    ? placeholderChartData
    : [
        { date: "Jan", value: portfolio?.totalValue * 0.8 },
        { date: "Feb", value: portfolio?.totalValue * 0.85 },
        { date: "Mar", value: portfolio?.totalValue * 0.9 },
        { date: "Apr", value: portfolio?.totalValue * 0.95 },
        { date: "May", value: portfolio?.totalValue * 0.98 },
        { date: "Jun", value: portfolio?.totalValue },
      ];

  return (
    <Card className={`${className} h-[500px]`}>
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
        <CardDescription>
          Your portfolio performance and key metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        {/* Metrics Section */}
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </p>
                <p
                  className={`text-2xl font-bold ${
                    loading ? "animate-pulse text-gray-400" : ""
                  }`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Section */}
        <div className="h-[300px] mt-4">
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => (value ? value : "")}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) =>
                    value ? `$${value.toLocaleString()}` : ""
                  }
                />
                <Tooltip content={<ChartTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={
                    loading
                      ? "hsl(var(--muted-foreground))"
                      : "hsl(var(--primary))"
                  }
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
