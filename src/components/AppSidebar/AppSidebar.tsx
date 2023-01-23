import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppSidebar: React.FC = () => (
  <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light min-vh-100">
    <NavLink to="/">Logo</NavLink>

    <h5>OVERVIEW</h5>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/market">Market</NavLink>
      </li>
      <li>
        <NavLink to="/strategy">Strategy</NavLink>
      </li>
      <li>
        <NavLink to="/bot">Bot</NavLink>
      </li>
      <li>
        <NavLink to="/backtest">Backtest</NavLink>
      </li>
      <li>
        <NavLink to="/alerts">Alerts</NavLink>
      </li>
      <li>
        <NavLink to="/trades">Trades</NavLink>
      </li>
      <li>
        <NavLink to="/portfolios">Portfolios</NavLink>
      </li>
    </ul>
    <h5>OTHER</h5>
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <NavLink to="/settings">Settings</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  </div>
)