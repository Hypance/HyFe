import { Dashboard } from '../../pages/Dashboard/Dashboard'
import { Strategy } from '../../pages/Strategy/Strategy'
import { Bot } from '../../pages/Bots/Bot'
import { CreateBot } from '../../pages/Bots/CreateBot'
import { Backtest } from '../../pages/Backtest/Backtest'
import { BacktestDetail } from '../../pages/Backtest/BacktestDetail'
import { Alerts } from '../../pages/Alerts/Alerts'
import { Trades } from '../../pages/Trades/Trades'
import { Portfolios } from '../../pages/Portfolios'
import { Settings } from '../../pages/Settings'
import { Logout } from '../../pages/Logout'
import { CreateStrategy } from '../../pages/Strategy/CreateStrategy'
import { Market } from '../../pages/Market/Market'

export interface IRoute {
  path: string
  element: React.ComponentType
}
export enum AppPathes {
  DASHBOARD = '/',
  MARKET = '/market',
  STRATEGY = '/strategy',
  CREATESTRATEGY = '/create-strategy',
  BOT = '/bot',
  CREATEBOT = '/create-bot',
  BACKTEST = '/backtest',
  BACKTESTDETAIL = '/backtest-detail',
  ALERTS = '/alerts',
  TRADES = '/trades',
  PORTFOLIOS = '/portfolios',
  SETTINGS = '/settings',
  LOGOUT = '/logout',
}
export const publicRoutes: IRoute[] = [
  { path: AppPathes.DASHBOARD, element: Dashboard },
  { path: AppPathes.MARKET, element: Market },
  { path: AppPathes.STRATEGY, element: Strategy },
  { path: AppPathes.CREATESTRATEGY, element: CreateStrategy },
  { path: AppPathes.BOT, element: Bot },
  { path: AppPathes.CREATEBOT, element: CreateBot },
  { path: AppPathes.BACKTEST, element: Backtest },
  { path: AppPathes.BACKTESTDETAIL, element: BacktestDetail },
  { path: AppPathes.ALERTS, element: Alerts },
  { path: AppPathes.TRADES, element: Trades },
  { path: AppPathes.PORTFOLIOS, element: Portfolios },
  { path: AppPathes.SETTINGS, element: Settings },
  { path: AppPathes.LOGOUT, element: Logout },
]
