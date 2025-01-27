"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#A0A0A0",
      },
    },
    title: {
      display: true,
      text: "Backtest Results",
      color: "#4682B4",
    },
  },
  scales: {
    x: {
      grid: {
        color: "#A0A0A0",
      },
      ticks: {
        color: "#4682B4",
      },
    },
    y: {
      grid: {
        color: "#A0A0A0",
      },
      ticks: {
        color: "#4682B4",
      },
    },
  },
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

export default function BacktestResults({
  data,
  metrics,
}: {
  data: ChartData;
  metrics: PerformanceMetrics;
}) {
  return (
    <div className="bg-background rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Backtest Results
      </h2>
      <div className="h-64 md:h-80 mb-4">
        <Line options={options} data={data} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">
            Performance Metrics
          </h3>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>Total Return: {metrics.totalReturn.toFixed(2)}%</li>
            <li>Annualized Return: {metrics.annualizedReturn.toFixed(2)}%</li>
            <li>Sharpe Ratio: {metrics.sharpeRatio.toFixed(2)}</li>
            <li>Max Drawdown: {metrics.maxDrawdown.toFixed(2)}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
