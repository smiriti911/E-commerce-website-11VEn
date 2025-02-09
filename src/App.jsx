import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='dark:bg-neutral-950 px-0 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ShopContextProvider >
      <NavBar />
      <SearchBar/>
      <Outlet />
      <Footer/>
      </ShopContextProvider >
    </div>
  )
}

export default App
