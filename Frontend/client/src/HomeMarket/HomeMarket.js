import { Dehaze, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./HomeMarket.css"
import Footer from "../Footer/Footer"
import HomeMarketCoinsTable from './HomeMarketCoins/HomeMarketCoinsTable'
import MarketFooter from './MarketFooter/MarketFooter'
import { useScrollDirection } from 'react-use-scroll-direction'
import { Link, useNavigate } from 'react-router-dom'
import HomeMaketNavbar from './HomeMaketNavbar/HomeMaketNavbar'

function HomeMarket() {
  const [searchs, setSearchs] = useState("")
  let user = localStorage.getItem("users")
  console.log(user)
  return (
    <div className="HomeMarket">

      <div  className='homes_markets_container'>

      <div className='market_side_bar'>
        <Dehaze />
      </div>

      <div className='market_footer'>
        <MarketFooter/>
      </div>

      <div className='HomeMarket_container'>

          <div className='homemarket_nav'>
              <HomeMaketNavbar />
          </div>

          <div className='HomeMarket_header'>
              <p>Crypto Assets</p>
            </div>

            <div className='HomeMarket_coin_search_input'>
              <input type="search" placeholder="Filter Crypto Assets" autoComplete='yes' onChange={(e)=>setSearchs(e.target.value.toLowerCase())}/>
              <Search className="search" />
            </div>

            <div className='HomeMarketCoins'>
              <HomeMarketCoinsTable searchs={searchs} />
            </div>

            <div className='footer'>
              <Footer />
            </div>
        </div>

      </div>
      
    </div>
  )
}

export default HomeMarket
