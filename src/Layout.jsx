import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Microfinance from './components/Microfinance'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Microfinance/>
    </>
  )
}

export default Layout