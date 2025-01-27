"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

interface StrategyData {
  strategy: string;
  winRate: number;
  profit: number;
}

interface StrategyPerformanceProps {
  className?: string;
}

interface StrategyResponse {
  name: string;
  performance: {
    winRate: number;
    avgReturn: number;
  };
}

export function StrategyPerformance({ className }: StrategyPerformanceProps) {
  const [data, setData] = useState<StrategyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API endpoint
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/strategies");
        if (!response.ok) {
          throw new Error("Failed to fetch strategies");
        }
        const strategies = await response.json();

        const formattedData = strategies.map((strategy: StrategyResponse) => ({
          strategy: strategy.name || "Unknown Strategy", // Fallback value
          winRate: strategy.performance.winRate,
          profit: strategy.performance.avgReturn,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching strategies:", error);
        setError("Failed to load strategy data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Strategy Performance</CardTitle>
          <CardDescription>Win rates and profits by strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <p>Loading...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Strategy Performance</CardTitle>
          <CardDescription>Win rates and profits by strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Strategy Performance</CardTitle>
        <CardDescription>Win rates and profits by strategy</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="strategy"
                angle={-60}
                textAnchor="end"
                interval={0}
                axisLine={false}
                tickLine={false}
                height={100}
                tick={{ fontSize: 10 }} // Adjust the font size as needed
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="#8884d8"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#82ca9d"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="winRate"
                fill="#8884d8"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                yAxisId="right"
                dataKey="profit"
                fill="#82ca9d"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
