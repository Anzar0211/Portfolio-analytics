export default function EconomicCalendar() {
  const events = [
    {
      id: 1,
      date: "2023-05-20",
      time: "08:30 AM",
      event: "US Retail Sales",
      impact: "High",
    },
    {
      id: 2,
      date: "2023-05-21",
      time: "10:00 AM",
      event: "Eurozone CPI",
      impact: "Medium",
    },
    {
      id: 3,
      date: "2023-05-22",
      time: "02:00 PM",
      event: "FOMC Meeting Minutes",
      impact: "High",
    },
    {
      id: 4,
      date: "2023-05-23",
      time: "09:30 AM",
      event: "UK GDP",
      impact: "Medium",
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
      case "Low":
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900";
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-lg dark:shadow-xl border border-border p-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Economic Calendar
      </h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="border-b border-border pb-4 last:border-b-0"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-foreground">{event.event}</span>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${getImpactColor(
                  event.impact
                )}`}
              >
                {event.impact}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {event.date} - {event.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
