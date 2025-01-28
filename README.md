# Portfolio Analytics Dashboard

## Overview

The Portfolio Analytics Dashboard is a comprehensive web application designed for investors to manage and analyze their stock portfolios. It provides real-time insights, strategy backtesting, and portfolio management tools to help users make informed investment decisions.

## Features

- **Dashboard**: Overview of portfolio performance, recent trades, and strategy performance
- **Strategies**: View and analyze various trading strategies
- **Backtesting**: Test trading strategies using historical data
- **Market Feed**: Real-time market news, top movers, and economic calendar
- **Stock Selector**: Search, view, and add stocks to your portfolio
- **User Authentication**: Secure sign-up and login functionality
- **Responsive Design**: Optimized for both desktop and mobile devices

## Technologies Used

- **Frontend**: React, Next.js (App Router), Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Next.js API Routes
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: Clerk
- **Charts**: Recharts
- **Deployment**: Vercel

## Setup Instructions

1. Clone the repository:
   \`\`\`
   git clone https://github.com/Anzar0211/Portfolio-analytics.git
   cd portfolio-analytics-dashboard
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install or npm install --legacy-peer-deps
   \`\`\`

3. Set up environment variables:
   Create a \`.env.local\` file in the root directory and add the following variables:
   \`\`\`
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_ALPHAVANTAGE_KEY=your_alphavantage_key
   \`\`\`

5. Populate the database with dummy stock data:
   \`\`\`
   node scripts/populateStocks.mjs
   node scripts/seedStrategies.mjs
   \`\`\`

7. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

8. Open \`http://localhost:3000\` in your browser to view the application.

## Project Structure

\`\`\`
portfolio-analytics-dashboard/
├── app/
│   ├── (pages)/
│   │   ├── dashboard/
│   │   ├── strategies/
│   │   ├── backtesting/
│   │   ├── market-feed/
│   │   └── stock-selector/
│   ├── api/
│   │   ├── portfolio/
│   │   ├── strategies/
│   │   ├── trades/
│   │   └── stocks/
│   ├── sign-in/
│   ├── sign-up/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── BacktestForm.tsx
│   ├── BacktestResults.tsx
│   ├── DashboardHeader.tsx
│   ├── EconomicCalendar.tsx
│   ├── MarketMovers.tsx
│   ├── MarketNews.tsx
│   ├── PortfolioOverview.tsx
│   ├── RecentTrades.tsx
│   ├── StockSelector.tsx
│   └── StrategyCard.tsx
├── lib/
│   ├── mongodb.ts
│   └── mongoose.ts
├── models/
│   ├── Portfolio.ts
│   ├── Stock.ts
│   ├── Strategy.ts
│   ├── Trade.ts
│   
├── scripts/
│   └── populateStocks.js
├── public/
├── styles/
│   └── globals.css
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
\`\`\`

## API Endpoints

- \`/api/portfolio\`: GET (fetch user's portfolio), POST (create new portfolio)
- \`/api/portfolio/add-stock\`: POST (add stock to portfolio)
- \`/api/stocks\`: GET (fetch all stocks)
- \`/api/strategies\`: GET (fetch all strategies)
- \`/api/trades\`: GET (fetch user's trades), POST (create new trade)

## Future Improvements

1. Integrate real-time stock data from a financial API
2. Implement advanced charting and technical analysis tools
3. Add support for multiple portfolios per user
4. Enhance backtesting functionality with more parameters and visualizations
5. Implement email notifications for significant portfolio changes or market events
6. Add social features for sharing strategies and portfolio performance
7. Integrate machine learning models for stock predictions and portfolio optimization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
\`\`\`



