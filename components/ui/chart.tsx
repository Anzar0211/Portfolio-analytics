import type React from "react";
import type { TooltipProps } from "recharts";

export const ChartContainer = ({
  children,
  ...props
}: React.ComponentProps<"div">) => <div {...props}>{children}</div>;

// Define interfaces for tooltip data structure
interface TooltipData {
  name?: string;
  value?: number;
  payload?: {
    date: string;
    value: number;
  };
}

export const ChartTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload as TooltipData[];

    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label}
            </span>
            <span className="font-bold text-muted-foreground">
              {data[0].value?.toLocaleString()}
            </span>
          </div>
          {data[1] && (
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                {data[1].name}
              </span>
              <span className="font-bold">
                {data[1].value?.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};
