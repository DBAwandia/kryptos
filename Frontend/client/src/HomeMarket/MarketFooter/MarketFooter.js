import React, { useState } from 'react'
import { GraphicEq, Home, NotificationAdd } from '@mui/icons-material'
import "./MarketFooter.css"
function MarketFooter() {
  const [active, setActive] = useState("markets")
  return (
    <div className='MarketFooter'>
    <div className='MarketFooter_container'>
        <div className={active === "markets"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
          onClick={()=>{
            setActive("markets")
          }}
        >
          <Home className='footer_icon'/>
          <p>Markets</p>
        </div>
        <div className={active === "track"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
          onClick={()=>{
            setActive("track")
          }}>
          <GraphicEq className='footer_icon'/>
          <p>Track</p>
        </div>
        <div className={active === "mytracks"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
          onClick={()=>{
            setActive("mytracks")
          }}>
          <NotificationAdd className='footer_icon'/>
          <p>My tracks</p>
        </div>
    </div> 
</div>
  )
}

export default MarketFooter
