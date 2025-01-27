import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const updates = [
  {
    id: "1",
    title: "Market Insight",
    description: "NIFTY showing strong momentum above 21,000",
    category: "Technical",
    timestamp: "5m ago",
  },
  {
    id: "2",
    title: "Strategy Alert",
    description: "Mean reversion strategy triggered for BANKNIFTY",
    category: "Strategy",
    timestamp: "15m ago",
  },
  // Add more updates...
];

export function MarketUpdates({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Market Updates</CardTitle>
        <CardDescription>Latest market insights and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update) => (
            <div key={update.id} className="flex items-start space-x-4">
              <Badge variant="outline">{update.category}</Badge>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {update.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {update.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {update.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
