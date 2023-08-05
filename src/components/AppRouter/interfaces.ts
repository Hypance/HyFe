import { Dashboard } from '../../pages/Dashboard/Dashboard'
import { Strategy } from '../../pages/Strategy/Strategy'
import { Bot } from '../../pages/Bots/Bot'
import { CreateBot } from '../../pages/Bots/CreateBot'
import { Backtest } from '../../pages/Backtest/Backtest'
import { BacktestDetails } from '../../pages/Backtest/BacktestDetails'
import { Alerts } from '../../pages/Alerts/Alerts'
import { Trades } from '../../pages/Trades/Trades'
import { Portfolios } from '../../pages/Portfolios'
import { Settings } from '../../pages/Settings'
import { Logout } from '../../pages/Logout'
import { CreateStrategy } from '../../pages/Strategy/CreateStrategy'
import { Market } from '../../pages/Market/Market'
import { BotDetails }   from '../../pages/Bots/BotDetails'

export interface IRoute {
  path: string
  element: React.ComponentType
}
export enum AppPathes {
  DASHBOARD = '/',
  MARKET = '/market',
  STRATEGY = '/strategy',
  CREATESTRATEGY = '/create-strategy',
  EDITSTRATEGY = '/edit-strategy',
  BOT = '/bot',
  BOTDETAILS = '/bot-details',
  CREATEBOT = '/create-bot',
  BACKTEST = '/backtest',
  BACKTESTDETAILS = '/backtest-details',
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
  { path: AppPathes.ALERTS, element: Alerts },
  { path: AppPathes.TRADES, element: Trades },
  { path: AppPathes.PORTFOLIOS, element: Portfolios },
  { path: AppPathes.SETTINGS, element: Settings },
  { path: AppPathes.LOGOUT, element: Logout },

  { path: `${AppPathes.BOTDETAILS}/:botId`, element: BotDetails  },
  { path: `${AppPathes.BACKTESTDETAILS}/:backtestId`, element: BacktestDetails  },
  { path: `${AppPathes.EDITSTRATEGY}/:strategyId`, element:CreateStrategy  }

]
