import { auth } from "@clerk/nextjs/server";

export default async function FAQPage() {
  await auth();

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple! Click on the 'Sign Up Free' button on our homepage, fill in your details, and verify your email address. You'll have instant access to our platform with a 30-day free trial."
        },
        {
          question: "Is there a minimum investment amount?",
          answer: "Yes, the minimum investment amount is ₹10,000. This ensures that our AI algorithms can effectively diversify and manage your portfolio while keeping costs reasonable."
        },
        {
          question: "How long does it take to set up automated trading?",
          answer: "Once your account is verified and funded, you can set up automated trading in less than 10 minutes. Simply choose your preferred strategy, set your risk parameters, and you're ready to go!"
        }
      ]
    },
    {
      category: "Trading & Strategies",
      questions: [
        {
          question: "How do your AI strategies work?",
          answer: "Our AI strategies use machine learning algorithms to analyze market data, technical indicators, news sentiment, and historical patterns. The system continuously learns and adapts to changing market conditions to optimize your returns."
        },
        {
          question: "Can I customize my trading strategy?",
          answer: "Absolutely! While we offer pre-built strategies, you can also create custom strategies using our strategy builder. You can set your own parameters for risk tolerance, asset allocation, and trading frequency."
        },
        {
          question: "What markets and assets can I trade?",
          answer: "You can trade across multiple asset classes including Indian equities, derivatives (futures and options), commodities, and currencies. Our platform supports trading on NSE, BSE, and MCX."
        },
        {
          question: "Can I stop automated trading anytime?",
          answer: "Yes, you have complete control. You can pause, stop, or modify your automated trading strategies at any time through your dashboard. Manual override is always available."
        }
      ]
    },
    {
      category: "Safety & Security",
      questions: [
        {
          question: "Is Moneyy.ai regulated?",
          answer: "Yes, we are registered with SEBI (Securities and Exchange Board of India) and operate under strict regulatory compliance. Our operations are regularly audited to ensure adherence to all financial regulations."
        },
        {
          question: "How is my money protected?",
          answer: "Your funds are held in segregated accounts with SEBI-registered brokers. We use bank-level encryption and security measures. Additionally, we're covered by investor protection schemes as per SEBI guidelines."
        },
        {
          question: "What happens if Moneyy.ai shuts down?",
          answer: "Your funds are always held with regulated brokers, not with us directly. In the unlikely event of our company closure, you would retain full access to your funds and can continue trading through the broker's platform."
        }
      ]
    },
    {
      category: "Fees & Pricing",
      questions: [
        {
          question: "What are your fees?",
          answer: "We charge a performance-based fee of 20% on profits generated, with no upfront costs. We also charge a small platform fee of 0.5% annually on assets under management. No profits, no fees!"
        },
        {
          question: "Are there any hidden charges?",
          answer: "No hidden charges whatsoever. Our fee structure is completely transparent. You'll only pay brokerage charges (as per your broker's rates) and our clearly stated performance and platform fees."
        },
        {
          question: "How is the free trial different from paid plans?",
          answer: "The 30-day free trial gives you full access to all features with a virtual portfolio of ₹1 lakh. You can test strategies, view real-time analytics, and experience the platform without any financial commitment."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I face technical issues?",
          answer: "Our technical support team is available 24/7 through live chat, email, and phone. We also have comprehensive documentation and video tutorials to help you navigate the platform."
        },
        {
          question: "Do you provide investment advice?",
          answer: "While our platform provides AI-generated strategies and market insights, we also have SEBI-registered investment advisors available for personalized consultations. However, all final investment decisions remain with you."
        },
        {
          question: "Can I access the platform on mobile?",
          answer: "Yes, our platform is fully responsive and works seamlessly on all devices. We also have dedicated mobile apps for iOS and Android that provide full functionality on the go."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Find answers to common questions about Moneyy.ai and automated trading
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 bg-muted/30 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Contact Support
            </a>
            <a
              href="/support"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Help Center
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              📚
            </div>
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Comprehensive guides and tutorials
            </p>
            <a href="/docs" className="text-primary underline">
              View Docs
            </a>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              🎥
            </div>
            <h3 className="text-lg font-semibold mb-2">Video Tutorials</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Step-by-step video guides
            </p>
            <a href="/tutorials" className="text-primary underline">
              Watch Videos
            </a>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              💬
            </div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Connect with other investors
            </p>
            <a href="/community" className="text-primary underline">
              Join Community
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
