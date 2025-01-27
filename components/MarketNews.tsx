"use client";

import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  url: string;
  time_published: string;
  source: string;
}

function parseAlphaVantageDate(timePublished: string): Date {
  const year = timePublished.slice(0, 4);
  const month = timePublished.slice(4, 6);
  const day = timePublished.slice(6, 8);
  const hour = timePublished.slice(9, 11);
  const minute = timePublished.slice(11, 13);
  const second = timePublished.slice(13, 15);

  const dateString = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
  return new Date(dateString);
}

export default function MarketNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketNews = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${process.env.NEXT_ALPHAVANTAGE_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch market news");
        }

        const data = await response.json();

        // Check for rate-limiting error
        if (data.Information && data.Information.includes("rate limit")) {
          throw new Error(data.Information);
        }

        if (!data.feed) {
          throw new Error("No news data found in the API response");
        }

        // Limit the news items to the first 5
        const firstFiveNews = data.feed.slice(0, 5);
        setNews(firstFiveNews);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMarketNews();
  }, []);

  if (loading) {
    return <div className="text-center text-muted-foreground">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="bg-card rounded-lg shadow-lg dark:shadow-xl border border-border p-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Market News
      </h2>
      <div className="max-h-96 overflow-y-auto">
        {news.length === 0 ? (
          <p className="text-muted-foreground">No news available.</p>
        ) : (
          <ul className="space-y-4">
            {news.map((item) => (
              <li
                key={item.url}
                className="border-b border-border pb-4 last:border-b-0"
              >
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.source} -{" "}
                  {parseAlphaVantageDate(item.time_published).toLocaleString()}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
