"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StrategyPerformance() {
  const [chartData, setChartData] = useState<
    ChartData<"bar", number[], string>
  >({
    labels: [],
    datasets: [
      {
        label: "Win Rate",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Profit",
        data: [],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  });

  useEffect(() => {
    // Fetch data from API or use mock data
    const mockData = {
      labels: ["Momentum", "Mean Reversion", "Trend Following", "Stat Arb"],
      winRates: [68, 72, 65, 70],
      profits: [12500, 15000, 9800, 11200],
    };

    setChartData({
      labels: mockData.labels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: mockData.winRates,
        },
        {
          ...chartData.datasets[1],
          data: mockData.profits,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Strategy Performance
      </h2>
      <div className="h-64 md:h-80">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
