import React from 'react'
import { Dropdown, Button, Stack } from 'react-bootstrap'

export const AppNavbar: React.FC = () => (
  <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div className="d-flex ">
          <div className="mx-2 fs-6">
            Cryptos: <span className="text-primary fw-bold">20,720</span>
          </div>
          <div className="mx-2 fs-6">
            Exchanges: <span className="text-primary fw-bold">520</span>
          </div>
          <div className="mx-2 fs-6">
            Dominance: <span className="text-primary fw-bold">BTC 39.7%</span>
          </div>
        </div>

        <Stack direction="horizontal" gap={3}>
          <Dropdown>
            <Dropdown.Toggle
              size="sm"
              id="dropdown-button-dark-example1"
              variant="outline-secondary"
            >
              <span className="material-symbols-outlined">monetization_on</span>
              USD
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">New project...</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button size="sm" variant="outline-secondary">
            <span className="material-symbols-outlined">notifications</span>
          </Button>

          <div className="vr"></div>

          <Dropdown>
            <Dropdown.Toggle
              className="p-0"
              id="dropdown-button-dark-example1"
              variant="white"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">New project...</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
      </div>
    </div>
  </header>
)
