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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react"; // Spinner icon

interface Stock {
  _id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  marketCap: number;
  volume: number;
  peRatio: number;
  dividend: number;
  yield: number;
}

export default function StockSelector() {
  const { toast } = useToast();
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStocks, setSelectedStocks] = useState<{
    [key: string]: number;
  }>({});
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track button state

  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/stocks");
        const data = await response.json();
        setStocks(data);
        setFilteredStocks(data);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch stocks. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, [toast]);

  useEffect(() => {
    const filtered = stocks.filter(
      (stock) =>
        stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStocks(filtered);
  }, [searchTerm, stocks]);

  const handleStockSelection = (stockId: string) => {
    setSelectedStocks((prev) => ({
      ...prev,
      [stockId]: (prev[stockId] || 0) + 1,
    }));
  };

  const handleQuantityChange = (stockId: string, quantity: number) => {
    setSelectedStocks((prev) => ({
      ...prev,
      [stockId]: quantity,
    }));
  };

  const handleAddToPortfolio = async () => {
    setIsSubmitting(true); // Start spinner and disable button
    for (const [stockId, quantity] of Object.entries(selectedStocks)) {
      try {
        const response = await fetch("/api/portfolio/add-stock", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stockId, quantity }),
        });

        if (!response.ok) {
          throw new Error("Failed to add stock to portfolio");
        }

        toast({
          title: "Success",
          description: `Added ${quantity} shares to your portfolio.`,
        });
      } catch {
        toast({
          title: "Error",
          description: "Failed to add stock to portfolio. Please try again.",
          variant: "destructive",
        });
      }
    }
    setSelectedStocks({});
    setIsSubmitting(false); // Stop spinner and enable button
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Stocks</CardTitle>
        <CardDescription>
          Choose stocks to add to your portfolio
        </CardDescription>
      </CardHeader>
      <CardContent className="relative h-[500px] overflow-y-auto">
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            Loading...
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Market Cap</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>P/E Ratio</TableHead>
                <TableHead>Dividend</TableHead>
                <TableHead>Yield</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStocks.map((stock) => (
                <TableRow key={stock._id}>
                  <TableCell>{stock.symbol}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>${stock.currentPrice.toFixed(2)}</TableCell>
                  <TableCell
                    className={
                      stock.change >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}
                    %)
                  </TableCell>
                  <TableCell>${(stock.marketCap / 1e9).toFixed(2)}B</TableCell>
                  <TableCell>{(stock.volume / 1e6).toFixed(2)}M</TableCell>
                  <TableCell>{stock.peRatio?.toFixed(2) || "N/A"}</TableCell>
                  <TableCell>${stock.dividend.toFixed(2)}</TableCell>
                  <TableCell>{(stock.yield * 100).toFixed(2)}%</TableCell>
                  <TableCell>
                    {selectedStocks[stock._id] ? (
                      <div className="flex items-center">
                        <Input
                          type="number"
                          min="1"
                          value={selectedStocks[stock._id]}
                          onChange={(e) =>
                            handleQuantityChange(
                              stock._id,
                              Number.parseInt(e.target.value)
                            )
                          }
                          className="w-20 mr-2"
                        />
                        <Button
                          variant="outline"
                          onClick={() => handleQuantityChange(stock._id, 0)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <Button onClick={() => handleStockSelection(stock._id)}>
                        Add
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {Object.keys(selectedStocks).length > 0 && !loading && (
          <div className="mt-4">
            <Button
              onClick={handleAddToPortfolio}
              disabled={isSubmitting} // Disable button during submission
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <Loader2 className="animate-spin mr-2" />
                  Adding...
                </div>
              ) : (
                "Add Selected Stocks to Portfolio"
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
