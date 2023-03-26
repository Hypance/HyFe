export const SERVICE_URL = 'http://localhost:3000'
export const STRATEGY_URLS = {
    CREATE_STRATEGY: "/Strategy",
    GET_INTERVALS: "/GetIntervals",
    GET_PROVISIONS:"/GetProvisions",
    GET_INDICATORS: "/GetIndicators",
    GET_VALUE: "/GetValue",
    GET_ORDERSIGNAL: "/GetOrderSignal",
    GET_MY_STRATEGIES:'/GetMyStrategies',
  };
export const BOT_URLS = {
  CREATE_BOT: '/Bot',
  GET_MARKETS: '/GetMarkets',
  GET_ORDERTYPE: '/GetOrderType',
  GET_STRATEGY: '/Strategy',
  GET_ASSETS: '/GetAssets',
  GET_FORMATION: '/GetFormation',
  GET_TRENDSTRATEGY: '/GetTrendStrategy',
  GET_PRICESTRATEGY: '/GetPriceStrategy',
  GET_BOT:'/Bot',
  GET_MYBOTS:'/MyBots'
}
export const TRADES_URLS = {
  GET_ALL_OPEN_TRADES: '/Trades',
}

export const BACKTEST_URLS = {
  GET_ALL_BACKTESTS: '/Backtest',
  GET_BACKTEST_DETAIL:'/BacktestDetail'
}

export const DASHBOARD_URLS = {
  GET_TRANSACTIONS: '/Transactions',
  GET_DASHBOARD_ASSETS: '/DashboardAssets',
  GET_ACTIVE_POSITIONS:'/ActivePositions'
}
