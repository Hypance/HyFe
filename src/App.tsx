import React from 'react'
import { Stack } from 'react-bootstrap'
import { AppNavbar } from './components/AppNavbar/AppNavbar'
import AppRouter from './components/AppRouter/AppRouter'
import { AppSidebar } from './components/AppSidebar/AppSidebar'
import { GlobalStyle } from './App.styles';


const App: React.FC = () => {
  return (
    <>
    <GlobalStyle/>
    <div className="d-flex flex-nowrap">
      <AppSidebar />
      <div className="w-100">
        <AppNavbar />
        <Stack className='px-5 pt-2'>
          <AppRouter />
        </Stack>
      </div>
    </div>

    
     
    
    </>
   
  )
}

export default App
