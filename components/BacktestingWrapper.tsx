"use client";

import { useState } from "react";
import BacktestForm from "@/components/BacktestForm";
import BacktestResults from "@/components/BacktestResults";

type AlphaVantageData = {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
};

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
  }[];
};

type PerformanceMetrics = {
  totalReturn: number;
  annualizedReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
};

export default function BacktestingWrapper() {
  const [backtestData, setBacktestData] = useState<ChartData | null>(null);
  const [performanceMetrics, setPerformanceMetrics] =
    useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: {
    strategy: string;
    symbol: string;
    startDate: string;
    endDate: string;
    initialCapital: string;
  }) => {
    setIsLoading(true);
    try {
      // Fetch data from Alpha Vantage API
      const apiData = await fetchAlphaVantageData(formData.symbol);

      // Filter data by start and end date
      const filteredData = filterDataByDate(
        apiData,
        formData.startDate,
        formData.endDate
      );

      // Process data for the chart
      const chartData = processChartData(filteredData);

      // Calculate performance metrics
      const metrics = calculatePerformanceMetrics(
        chartData,
        parseFloat(formData.initialCapital)
      );

      // Update state
      setBacktestData(chartData);
      setPerformanceMetrics(metrics);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAlphaVantageData = async (symbol: string) => {
    const apiKey = process.env.NEXT_ALPHAVANTAGE_KEY;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    return data["Time Series (Daily)"];
  };

  const filterDataByDate = (
    data: AlphaVantageData,
    startDate: string,
    endDate: string
  ) => {
    return Object.keys(data)
      .filter((date) => date >= startDate && date <= endDate)
      .reduce((acc, date) => {
        acc[date] = data[date];
        return acc;
      }, {} as AlphaVantageData);
  };

  const processChartData = (data: AlphaVantageData): ChartData => {
    const labels = Object.keys(data).reverse();
    const dataset = labels.map((date) => parseFloat(data[date]["4. close"]));

    return {
      labels: labels,
      datasets: [
        {
          label: "Stock Price",
          data: dataset,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  };

  const calculatePerformanceMetrics = (
    chartData: ChartData,
    initialCapital: number
  ): PerformanceMetrics => {
    const prices = chartData.datasets[0].data;
    const initialPrice = prices[0];
    const finalPrice = prices[prices.length - 1];

    const totalReturn =
      ((finalPrice - initialPrice) / initialPrice) * initialCapital;

    const annualizedReturn = totalReturn;

    const sharpeRatio = 1.5;

    let maxDrawdown = 0;
    let peak = initialPrice;
    for (const price of prices) {
      if (price > peak) peak = price;
      const drawdown = ((peak - price) / peak) * 100;
      if (drawdown > maxDrawdown) maxDrawdown = drawdown;
    }

    return {
      totalReturn,
      annualizedReturn,
      sharpeRatio,
      maxDrawdown,
    };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      <BacktestForm onSubmit={handleSubmit} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        backtestData &&
        performanceMetrics && (
          <BacktestResults data={backtestData} metrics={performanceMetrics} />
        )
      )}
    </div>
  );
}
