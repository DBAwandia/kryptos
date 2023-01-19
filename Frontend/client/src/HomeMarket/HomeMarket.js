import { Dehaze, PowerSettingsNew, Search } from '@mui/icons-material'
import React, { useContext, useEffect, useState } from 'react'
import "./HomeMarket.css"
import Footer from "../Footer/Footer"
import HomeMarketCoinsTable from './HomeMarketCoins/HomeMarketCoinsTable'
import MarketFooter from './MarketFooter/MarketFooter'
import HomeMaketNavbar from './HomeMaketNavbar/HomeMaketNavbar'
import { LoginContext } from '../LoginContext/LoginContext'

function HomeMarket() {
  const [searchs, setSearchs] = useState("")
  const [random, setRandom] = useState("🔥🔥 XXXUSDT")

  const names = ["🔥🔥🔥🔥 BTC", 
                "🔥 ETH", 
                "🔥🔥🔥 ADA", 
                "🔥 MATIC", 
                "🔥🔥 DOT", 
                "🚀 APEUSDT",
                "🔥🔥 BNB", 
                "🔥🔥 SOL",
                "🔥 XRP",
                "🔥 TRX",
                "🔥🔥 SAND",
                "🔥 KSM",
                "🔥 DAR",
                "🔥🚀🚀🚀 DOGE"
                ]
  let timer;
  useEffect(()=>{
      timer = setInterval(()=>{
        const random = Math.floor(Math.random() * names.length);
        setRandom(names[random]);
      },3500)
      return ()=>{ clearInterval(timer)}
  },[names])

  //get percentage from local storage
  let percentage = localStorage?.getItem("percentage") || 0.00
  let percentageChange = Math.abs(percentage)

    //get user from loginContext
    const { user } = useContext(LoginContext)
  
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
                  <p>Hi {user?.username} ,welcome!!</p>
              </div>
          </div>

          <div className='homemarket_price_tag'>
            <p>Change:</p>
            <span>{percentageChange ? percentageChange : 0.00}%</span>
          </div>
         </div>

            <div className='HomeMarket_coin_search_input'>
              <input type="search" placeholder={"Filter assets" + "  " + "  " + random } autoComplete='yes' onChange={(e)=>setSearchs(e.target.value.toLowerCase())}/>
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
