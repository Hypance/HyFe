import React from 'react'
import { AppNavbar } from './components/AppNavbar/AppNavbar'
import AppRouter from './components/AppRouter/AppRouter'
import { AppSidebar } from './components/AppSidebar/AppSidebar'

const App: React.FC = () => {
  return (
    <div className="d-flex flex-nowrap">
      <AppSidebar />
      <div className="w-100">
        <AppNavbar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
