import React from 'react'
import { GraphicEq, Home, NotificationAdd } from '@mui/icons-material'
import "./MarketFooter.css"
function MarketFooter() {
  return (
    <div className='MarketFooter'>
    <div className='MarketFooter_container'>
        <div className='MarketFooter_icons_and_name'>
          <Home/>
          <p>Markets</p>
        </div>
        <div className='MarketFooter_icons_and_name'>
          <GraphicEq/>
          <p>Track</p>
        </div>
        <div className='MarketFooter_icons_and_name'>
          <NotificationAdd/>
          <p>My tracks</p>
        </div>
    </div> 
</div>
  )
}

export default MarketFooter
