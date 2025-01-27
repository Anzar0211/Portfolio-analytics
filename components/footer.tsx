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
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <FaArrowTrendUp className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
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
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/about" className="text-sm underline underline-offset-4">
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm underline underline-offset-4"
          >
            Contact Us
          </Link>
          <Link href="/faq" className="text-sm underline underline-offset-4">
            FAQ
          </Link>
          <Link
            href="/support"
            className="text-sm underline underline-offset-4"
          >
            Support
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm flex items-center gap-1 underline underline-offset-4"
          >
            <FaTwitter className="h-5 w-5" />
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm flex items-center gap-1 underline underline-offset-4"
          >
            <FaLinkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm flex items-center gap-1 underline underline-offset-4"
          >
            <FaInstagram className="h-5 w-5" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
