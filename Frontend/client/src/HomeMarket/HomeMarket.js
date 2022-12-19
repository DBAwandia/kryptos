import { Dehaze, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import "./HomeMarket.css"
import Footer from "../Footer/Footer"
import HomeMarketCoinsTable from './HomeMarketCoins/HomeMarketCoinsTable'
import MarketFooter from './MarketFooter/MarketFooter'
import { useScrollDirection } from 'react-use-scroll-direction'

function HomeMarket() {
  const [active, setActive] = useState("market")
  const [searchs, setSearchs] = useState("")
  
  const { 
    isScrolling,
    isScrollingX,
    isScrollingY,
    isScrollingUp, 
    isScrollingDown,
    isScrollingLeft,
    isScrollingRight,
    scrollDirection,
  } = useScrollDirection()

  console.log(isScrollingY)

  const value = window.scrollY
  console.log(value)

  
  return (
    <div className="HomeMarket">

      <div className='market_side_bar'>
        <Dehaze />
      </div>
      <div className='market_footer'>
        <MarketFooter/>
      </div>
      <div className='HomeMarket_container'>
            <div className='HomeMaret_navbar'>
              <div className='HomeMarket_logo'>
                  <img className='HomeMarket_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                  <h1 >Krypto</h1>
              </div>
              <div className='HomeMarket_container_lists'>
                <ul>
                  <li className={active === "market"? "isActive":"market"}
                      onClick={()=>{
                        setActive("market")
                      }}
                  >Market</li>
                  <li className={active === "tracks"? "isActive":"market"}
                      onClick={()=>{
                        setActive("tracks")
                      }}
                  >Track</li>
                  <li className={active === "mytracks"? "isActive":"market"}
                      onClick={()=>{
                        setActive("mytracks")
                      }}
                  >My tracks</li>
                </ul>
              </div>
            </div>
            <div className='HomeMarket_header'>
              <p>Crypto Assets</p>
            </div>
            <div className='HomeMarket_coin_search_input'>
              <input type="search" placeholder="Filter Crypto Assets" onChange={(e)=>setSearchs(e.target.value.toLowerCase())}/>
              <Search className="search" />
            </div>
            <div className='HomeMarketCoins'>
              <HomeMarketCoinsTable searchs={searchs} />
            </div>
            {/* <div className='footer'>
              <Footer />
            </div> */}
      </div>
    </div>
  )
}

export default HomeMarket
