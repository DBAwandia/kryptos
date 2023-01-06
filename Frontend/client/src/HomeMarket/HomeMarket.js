import { Dehaze, PowerSettingsNew, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./HomeMarket.css"
import Footer from "../Footer/Footer"
import HomeMarketCoinsTable from './HomeMarketCoins/HomeMarketCoinsTable'
import MarketFooter from './MarketFooter/MarketFooter'
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

         <div className='Homemarket_show_change'>
          <div className='Homemarket_show_change_balance'>
              <div className='homemarket_nav'>
                  <HomeMaketNavbar />
              </div>
              <div className='HomeMarket_header'>
                  <p>Crypto Assets</p>
              </div>
          </div>

          <div className='homemarket_price_tag'>
            <p>Change:</p>
            <span>+20%</span>
          </div>
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
