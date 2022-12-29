import React, { useState } from 'react'
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Herosection from "../HeroSection/Herosection"
import Sidebar from '../Navbar/Sidebar'
import Reasons from '../Reasons/Reasons'
import Footer from '../Footer/Footer'
import Markets from '../Markets/Markets'

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false)
  
  return (
    <div className='Home'>

      {openSidebar &&<div className='show_side_bar'>
        <Sidebar setOpenSidebar={setOpenSidebar}/>
      </div>}

      <div className='hero_and_navbar'>
          <Navbar setOpenSidebar={setOpenSidebar}/>
        <div className='hero_home_section'>
          <Herosection/>
        </div>

        <div className='market_home_section'>
          <Markets/>
        </div>

        <div className='reason_home_section'>
          <Reasons/>
        </div>

        <div className='footer_home_section'>
          <Footer/>
        </div>

      </div>
    </div>
  )
}

export default Home
