import { auth } from "@clerk/nextjs/server";

export default async function LearnMorePage() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Learn More About Moneyy.ai
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover how our AI-powered trading platform revolutionizes portfolio management
          </p>
        </div>

        {/* What We Do Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What We Do</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Moneyy.ai is a cutting-edge portfolio analytics platform that combines artificial intelligence 
                with traditional trading expertise to deliver superior investment outcomes. Our platform is 
                designed for both retail and institutional investors who want to leverage the power of AI 
                to automate their trading strategies.
              </p>
              <p className="mb-6">
                We are registered with SEBI (Securities and Exchange Board of India) and operate under 
                strict regulatory compliance to ensure the safety and security of your investments.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">🤖 AI-Powered Decision Making</h3>
              <p className="text-muted-foreground">
                Our advanced algorithms analyze market data 24/7 to identify optimal trading opportunities 
                and execute trades with precision timing.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">📊 Real-Time Analytics</h3>
              <p className="text-muted-foreground">
                Get instant insights into your portfolio performance with comprehensive dashboards 
                and real-time market data.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">🛡️ Risk Management</h3>
              <p className="text-muted-foreground">
                Advanced risk controls and portfolio diversification tools help protect your capital 
                while maximizing returns.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">👨‍💼 Expert Support</h3>
              <p className="text-muted-foreground">
                Access to SEBI registered experts with years of market experience to guide your 
                investment decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Technology</h2>
            <div className="text-muted-foreground space-y-6">
              <p>
                Our platform leverages state-of-the-art machine learning algorithms and natural language 
                processing to analyze market sentiment, news events, and technical indicators in real-time.
              </p>
              <p>
                The system continuously learns from market patterns and adapts trading strategies to 
                changing market conditions, ensuring optimal performance across different market cycles.
              </p>
              <p>
                With enterprise-grade security and bank-level encryption, your data and investments 
                are protected by the highest security standards in the industry.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of investors who trust Moneyy.ai for their trading needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={userId ? "/dashboard" : "/sign-up"}
              className="bg-background text-foreground hover:bg-background/90 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold py-3 px-8 rounded-lg transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
