import { DateRangePicker } from "@/components/date-range-picker";

interface DashboardHeaderProps {
  heading: string;
  text?: string;
}

export function DashboardHeader({ heading, text }: DashboardHeaderProps) {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-4">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl md:text-4xl">{heading}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      <DateRangePicker />
    </div>
  );
}
