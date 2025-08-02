import Link from "next/link";
import {
  FaArrowTrendUp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="w-full max-w-none lg:max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] lg:mx-auto lg:px-6 xl:px-8 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 lg:px-0">
          <FaArrowTrendUp className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" />
          <p className="text-center text-sm lg:text-base xl:text-lg leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://moneyy.ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Moneyy.ai
            </a>
            . Automate Trading with AI Algo Strategies by SEBI Reg. Experts.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 xl:gap-8">
          <Link href="/about" className="text-sm lg:text-base xl:text-lg underline underline-offset-4 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm lg:text-base xl:text-lg underline underline-offset-4 hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
          <Link href="/faq" className="text-sm lg:text-base xl:text-lg underline underline-offset-4 hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link
            href="/support"
            className="text-sm lg:text-base xl:text-lg underline underline-offset-4 hover:text-primary transition-colors"
          >
            Support
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm lg:text-base xl:text-lg flex items-center gap-1 lg:gap-2 underline underline-offset-4 hover:text-primary transition-colors"
          >
            <FaTwitter className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
            <span className="hidden lg:inline">Twitter</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm lg:text-base xl:text-lg flex items-center gap-1 lg:gap-2 underline underline-offset-4 hover:text-primary transition-colors"
          >
            <FaLinkedin className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm lg:text-base xl:text-lg flex items-center gap-1 lg:gap-2 underline underline-offset-4 hover:text-primary transition-colors"
          >
            <FaInstagram className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
            <span className="hidden lg:inline">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
