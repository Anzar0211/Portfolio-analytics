import type React from "react";
import { TooltipProps } from "recharts";

export const ChartContainer = ({
  children,
  ...props
}: React.ComponentProps<"div">) => <div {...props}>{children}</div>;

export const ChartTooltip = ({ active, payload, label }: TooltipProps<any,any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label}
            </span>
            <span className="font-bold text-muted-foreground">
              {payload[0].value}
            </span>
          </div>
          {payload[1] && (
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                {payload[1].name}
              </span>
              <span className="font-bold">{payload[1].value}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};
