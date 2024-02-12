// jis component me ham { Outlet } import karte hai oo root ya layout component ban jata hai

import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Login from './components/login/Login'
const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

// export default Layout;



