"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Trade {
  _id: string;
  symbol: string;
  type: "BUY" | "SELL";
  price: number;
  quantity: number;
  timestamp: string;
}

export function RecentTrades({ className }: { className?: string }) {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/trades");

        if (!response.ok) {
          throw new Error("Failed to fetch trades.");
        }

        const data = await response.json();
        setTrades(data);
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

    fetchTrades();
  }, []);

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Recent Trades</CardTitle>
          <CardDescription>Your latest trading activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">Loading recent trades...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Recent Trades</CardTitle>
          <CardDescription>Your latest trading activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-red-500">
            {error || "Failed to load recent trades."}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!trades || trades.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Recent Trades</CardTitle>
          <CardDescription>Your latest trading activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">No recent trades found.</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Trades</CardTitle>
        <CardDescription>Your latest trading activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto max-h-[200px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade._id}>
                  <TableCell className="font-medium">{trade.symbol}</TableCell>
                  <TableCell
                    className={
                      trade.type === "BUY" ? "text-green-600" : "text-red-600"
                    }
                  >
                    {trade.type}
                  </TableCell>
                  <TableCell>${trade.price.toFixed(2)}</TableCell>
                  <TableCell>{trade.quantity}</TableCell>
                  <TableCell className="text-right">
                    {new Date(trade.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
