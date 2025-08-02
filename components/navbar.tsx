"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { FaArrowTrendUp } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export function Navbar({ userId }: { userId: string | null }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-none lg:max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] lg:mx-auto lg:px-6 xl:px-8 flex h-14 items-center justify-between px-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {userId && (
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-xl lg:hidden focus:outline-none"
              >
                <HiMenu />
              </button>
            )}
            <Link href="/" className="flex items-center space-x-2">
              <FaArrowTrendUp className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block lg:text-lg xl:text-xl">
                Moneyy.ai
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {userId && (
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10 text-sm lg:text-base xl:text-lg font-medium mx-auto">
              <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
              <Link href="/stock-selector" className="hover:text-primary transition-colors">Stocks</Link>
              <Link href="/strategies" className="hover:text-primary transition-colors">Strategies</Link>
              <Link href="/backtesting" className="hover:text-primary transition-colors">Backtesting</Link>
              <Link href="/market-feed" className="hover:text-primary transition-colors">Market Feed</Link>
            </nav>
          )}

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Button variant="ghost" className="text-sm lg:text-base xl:text-lg font-medium">
                <Link href="/sign-up">Sign Up Free</Link>
              </Button>
            )}
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {userId && (
        <>
          
          {isDrawerOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsDrawerOpen(false)}
            />
          )}

          
          <div
            className={`fixed inset-y-0 left-0 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out z-50 lg:hidden ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              
              <div className="p-4 border-b">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <FaArrowTrendUp className="h-6 w-6" />
                  <span className="font-bold">Moneyy.ai</span>
                </Link>
              </div>

              
              <nav className="flex flex-col p-4 text-sm font-medium space-y-4">
                <Link
                  href="/dashboard"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/stock-selector"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Stocks
                </Link>
                <Link
                  href="/strategies"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Strategies
                </Link>
                <Link
                  href="/backtesting"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Backtesting
                </Link>
                <Link
                  href="/market-feed"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Market Feed
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
