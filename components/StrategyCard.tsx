"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, BarChart2, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Strategy {
  _id: string;
  name: string;
  description: string;
  performance: {
    winRate: number;
    avgReturn: number;
  };
  riskLevel: "Low" | "Medium" | "High";
}

export default function StrategyCard() {
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await fetch("/api/strategies");
        if (!response.ok) {
          throw new Error("Failed to fetch strategies");
        }
        const data = await response.json();
        setStrategies(data);
      } catch {
        setError("Error fetching strategies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStrategies();
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600 bg-green-100";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "High":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  if (isLoading) {
    return <div>Loading strategies...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {strategies.map((strategy) => (
        <Card key={strategy._id}>
          <CardHeader>
            <CardTitle>{strategy.name}</CardTitle>
            <CardDescription>{strategy.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium">
                  Win Rate: {strategy.performance.winRate}%
                </span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-medium">
                  Avg. Return: {strategy.performance.avgReturn}%
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${getRiskColor(
                  strategy.riskLevel
                )}`}
              >
                {strategy.riskLevel} Risk
              </span>
              <button className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center">
                Learn More
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
