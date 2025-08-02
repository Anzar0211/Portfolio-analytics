import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 xl:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                Welcome to Moneyy.ai Portfolio Analytics
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Automate Trading with AI Algo Strategies by SEBI Reg. Experts
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <a
                  href={userId ? "/dashboard" : "/sign-up"}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-lg text-sm sm:text-base lg:text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Free
                </a>
                <a
                  href="/learn-more"
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-lg text-sm sm:text-base lg:text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by 10,000+ investors • SEBI Registered • Free 30-day trial
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StatCard number="₹100Cr+" label="Assets Under Management" />
              <StatCard number="10,000+" label="Active Investors" />
              <StatCard number="85%" label="Average Success Rate" />
              <StatCard number="24/7" label="Market Monitoring" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Powerful Features for Smart Trading
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to automate and optimize your trading strategies
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="AI-Powered Strategies"
                description="Leverage cutting-edge AI algorithms powered by machine learning to optimize your trading strategies with real-time market analysis."
                icon="🤖"
              />
              <FeatureCard
                title="Real-time Analytics"
                description="Monitor your portfolio performance with live data feeds, advanced charting, and comprehensive risk analytics dashboard."
                icon="📊"
              />
              <FeatureCard
                title="Expert Guidance"
                description="Get support from SEBI registered experts with 15+ years of market experience to maximize your returns safely."
                icon="👨‍💼"
              />
              <FeatureCard
                title="Automated Backtesting"
                description="Test your strategies against historical data with our advanced backtesting engine before deploying real capital."
                icon="⚡"
              />
              <FeatureCard
                title="Risk Management"
                description="Advanced risk controls with stop-loss automation, position sizing, and portfolio diversification tools."
                icon="🛡️"
              />
              <FeatureCard
                title="Multi-Asset Trading"
                description="Trade across equities, derivatives, commodities, and currencies from a single unified platform."
                icon="💎"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started with automated trading in just 3 simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard
                step="1"
                title="Sign Up & Connect"
                description="Create your account and securely connect your trading account with bank-level encryption."
              />
              <StepCard
                step="2"
                title="Choose Strategy"
                description="Select from our library of AI-powered strategies or create custom ones with our strategy builder."
              />
              <StepCard
                step="3"
                title="Start Trading"
                description="Deploy your strategies and watch as our AI executes trades automatically based on market conditions."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What Our Investors Say
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Real stories from real investors who transformed their trading
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Moneyy.ai has transformed my trading approach. The AI strategies have consistently outperformed my manual trading by 40%."
                author="Rajesh Kumar"
                role="Retail Investor"
                rating={5}
              />
              <TestimonialCard
                quote="The backtesting feature saved me from making costly mistakes. I can test strategies risk-free before going live."
                author="Priya Sharma"
                role="Professional Trader"
                rating={5}
              />
              <TestimonialCard
                quote="SEBI registered experts provide excellent guidance. The platform is user-friendly and the results speak for themselves."
                author="Amit Patel"
                role="Investment Advisor"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of successful investors who trust Moneyy.ai for their automated trading needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={userId ? "/dashboard" : "/sign-up"}
                className="bg-background text-foreground hover:bg-background/90 font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-lg text-sm sm:text-base lg:text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-lg text-sm sm:text-base lg:text-lg transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required • Cancel anytime • SEBI regulated
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <div className="bg-card p-6 lg:p-8 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-200">
      {icon && (
        <div className="text-3xl md:text-4xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
}) {
  return (
    <div className="bg-card p-6 lg:p-8 rounded-lg shadow-md border border-border">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
      <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
}
