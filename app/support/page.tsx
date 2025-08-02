import { auth } from "@clerk/nextjs/server";

export default async function SupportPage() {
  await auth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Support Center
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Get the help you need to succeed with Moneyy.ai
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              💬
            </div>
            <h3 className="text-xl font-bold mb-3">Live Chat</h3>
            <p className="text-muted-foreground mb-4">
              Get instant help from our support team. Available 24/7.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-lg transition-colors duration-200">
              Start Chat
            </button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              📞
            </div>
            <h3 className="text-xl font-bold mb-3">Phone Support</h3>
            <p className="text-muted-foreground mb-4">
              Speak directly with our experts for personalized assistance.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">+91 98765 43210</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM IST</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              ✉️
            </div>
            <h3 className="text-xl font-bold mb-3">Email Support</h3>
            <p className="text-muted-foreground mb-4">
              Send us a detailed message and we&apos;ll respond within 24 hours.
            </p>
            <a
              href="mailto:support@moneyy.ai"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Quick Help Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Common Issues */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common Issues</h2>
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Login Problems</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Can&apos;t access your account? Try resetting your password or clearing browser cache.
                </p>
                <a href="#" className="text-primary text-sm underline">Learn more →</a>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Trading Issues</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Experiencing problems with order execution or strategy performance?
                </p>
                <a href="#" className="text-primary text-sm underline">Troubleshoot →</a>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Payment & Billing</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Questions about fees, billing cycles, or payment methods?
                </p>
                <a href="#" className="text-primary text-sm underline">Get help →</a>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Platform Navigation</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  New to the platform? Learn how to navigate and use key features.
                </p>
                <a href="#" className="text-primary text-sm underline">View guide →</a>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Helpful Resources</h2>
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">📚 Knowledge Base</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Comprehensive articles covering all aspects of the platform.
                </p>
                <a href="#" className="text-primary text-sm underline">Browse articles →</a>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">🎥 Video Tutorials</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Step-by-step video guides for getting started and advanced features.
                </p>
                <a href="#" className="text-primary text-sm underline">Watch videos →</a>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">📖 User Manual</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Complete documentation for all platform features and functionalities.
                </p>
                <a href="#" className="text-primary text-sm underline">Download PDF →</a>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">🤝 Community Forum</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Connect with other users, share experiences, and get peer support.
                </p>
                <a href="#" className="text-primary text-sm underline">Join forum →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-destructive text-destructive-foreground rounded-lg flex items-center justify-center flex-shrink-0">
              🚨
            </div>
            <div>
              <h3 className="text-lg font-bold text-destructive mb-2">Emergency Trading Support</h3>
              <p className="text-muted-foreground mb-4">
                For urgent trading issues that require immediate attention outside business hours.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <p className="font-semibold">📞 +91 98765 43211</p>
                <p className="font-semibold">📧 emergency@moneyy.ai</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Available 24/7 for critical trading platform issues only.
              </p>
            </div>
          </div>
        </div>

        {/* Status Page */}
        <div className="bg-muted/30 p-6 rounded-lg mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Platform Status</h3>
              <p className="text-muted-foreground">
                Check real-time status of our trading platform and services.
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">All Systems Operational</span>
              </div>
              <a href="#" className="text-primary text-sm underline">View detailed status →</a>
            </div>
          </div>
        </div>

        {/* Contact Form Preview */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Personalized Help?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our team is ready to provide personalized assistance for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Contact Support Team
            </a>
            <a
              href="/faq"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Check FAQ
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
