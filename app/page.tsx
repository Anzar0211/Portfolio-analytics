import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Welcome to Moneyy.ai Portfolio Analytics
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
            Automate Trading with AI Algo Strategies by SEBI Reg. Experts
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={userId ? "/dashboard" : "/sign-up"}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg text-sm sm:text-base"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-3 px-6 rounded-lg text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard
            title="AI-Powered Strategies"
            description="Leverage cutting-edge AI algorithms to optimize your trading strategies."
          />
          <FeatureCard
            title="Real-time Analytics"
            description="Monitor your portfolio performance with real-time data and insights."
          />
          <FeatureCard
            title="Expert Guidance"
            description="Get support from SEBI registered experts to maximize your returns."
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border">
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
