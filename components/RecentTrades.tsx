"use client";

import { useState, useEffect } from "react";
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

export function RecentTrades({ className }: { className?: string }) {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      const response = await fetch("/api/trades");
      const data = await response.json();
      setTrades(data);
    };

    fetchTrades();
  }, []);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Trades</CardTitle>
        <CardDescription>Your latest trading activity</CardDescription>
      </CardHeader>
      <CardContent>
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
            {trades.map((trade: any) => (
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
      </CardContent>
    </Card>
  );
}
