import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import {  Nav } from 'react-bootstrap'
import logo from './logo.jpg'

export const AppSidebar: React.FC = () => (
  // <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light min-vh-100">
  //   <NavLink to="/">Logo</NavLink>
  //   <br />
  //   <h5 className='ovw'>OVERVIEW</h5>
  //   <br />
  //   <ul className="nav nav-pills flex-column mb-auto">
  //     <li className="nav-item">
  //     <NavLink  to="/dashboard"><Button className="mb-2" >Dashboard</Button></NavLink>        
  //     </li>
  //     <li>
  //       <NavLink to="/market"><Button className="mb-2" >Market</Button></NavLink>
  //     </li>
  //     <li>
  //     <NavLink  to="/strategy"><Button className="mb-2" >Strategy</Button></NavLink>

  //     <Nav.Item >
  //       <Nav.Link as={NavLink} to="/strategy" >Strategy</Nav.Link>
  //     </Nav.Item>

  //     </li>
  //     <li>
  //       <NavLink to="/bot"><Button className="mb-2" >Bot</Button></NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/backtest"><Button className="mb-2" >Backtest</Button></NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/alerts"><Button className="mb-2" >Alerts</Button></NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/trades"><Button className="mb-2" >Trades</Button></NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/portfolios"><Button className="mb-2" >Portfolios</Button></NavLink>
  //     </li>
  //   </ul>
  //   <h5>OTHER</h5>
  //   <ul className="nav nav-pills flex-column mb-auto">
  //     <li>
  //       <NavLink to="/settings"><Button className="mb-2" >Settings</Button></NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/logout"><Button className="mb-2" >Logout</Button></NavLink>
  //     </li>
  //   </ul>
  // </div>
  <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light min-vh-100 ">
    <NavLink to="/"><img src={logo} alt="logo" width="150px" height="150px" /></NavLink>
    <h5 className='ovw'>OVERVIEW</h5>
    <Nav className='flex-column' variant="pills" >
    <Nav.Item>
      <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link> 
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/market">Market</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/strategy">Strategy</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/bot">Bot</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/backtest">Backtest</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/alerts">Alerts</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/trades">Trades</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/portfolios">Portfolios</Nav.Link>
    </Nav.Item>
    <h5 className='ovw'>OTHER</h5>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
    </Nav.Item>
    </Nav>
  </div>
)