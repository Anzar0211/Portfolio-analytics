import { auth } from "@clerk/nextjs/server";

export default async function AboutPage() {
  await auth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Moneyy.ai
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Pioneering the future of automated trading with AI-powered strategies
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="text-lg text-muted-foreground text-center">
              <p className="mb-6">
                To democratize sophisticated trading strategies by making AI-powered portfolio management 
                accessible to every investor, regardless of their experience level or capital size.
              </p>
              <p>
                We believe that technology should empower individuals to make smarter financial decisions 
                and achieve their investment goals with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto text-muted-foreground space-y-6">
            <p>
              Founded in 2023 by a team of financial experts and AI researchers, Moneyy.ai was born 
              from the vision of making institutional-grade trading strategies available to everyone.
            </p>
            <p>
              Our founders, with over 50 years of combined experience in financial markets and 
              artificial intelligence, recognized the need for a platform that could bridge the 
              gap between complex algorithmic trading and user-friendly investment tools.
            </p>
            <p>
              Today, we&apos;re proud to serve over 10,000 active investors and manage assets worth 
              over ₹100 crores, all while maintaining our commitment to transparency, security, 
              and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Rahul Sharma</h3>
              <p className="text-muted-foreground mb-2">CEO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                15+ years in financial markets, ex-Goldman Sachs
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Priya Patel</h3>
              <p className="text-muted-foreground mb-2">CTO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                PhD in AI/ML, ex-Google Research
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍⚖️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Amit Kumar</h3>
              <p className="text-muted-foreground mb-2">Chief Compliance Officer</p>
              <p className="text-sm text-muted-foreground">
                SEBI Registered, 20+ years regulatory experience
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-3">🔒</span>
                Transparency
              </h3>
              <p className="text-muted-foreground">
                We believe in complete transparency in our operations, fees, and performance metrics.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-3">🛡️</span>
                Security
              </h3>
              <p className="text-muted-foreground">
                Your data and investments are protected by enterprise-grade security measures.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-3">🎯</span>
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Continuously pushing the boundaries of what&apos;s possible with AI in finance.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-3">🤝</span>
                Integrity
              </h3>
              <p className="text-muted-foreground">
                Operating with the highest ethical standards and regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16 bg-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">₹100Cr+</div>
              <div className="opacity-90">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="opacity-90">Happy Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="opacity-90">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get in touch with our team to discuss how we can help you achieve your investment goals
          </p>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
}
