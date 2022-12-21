import React from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import MarketFooter from '../HomeMarket/MarketFooter/MarketFooter'
import "./StartTracking.css"
function StartTracking() {
  return (
    <div className='StartTracking'>
      <div className='pc_naviagation'>
        <HomeMaketNavbar/>
      </div>
      <div className='mobile_naviagation'>
        <MarketFooter />
      </div>
     
    </div>
  )
}

export default StartTracking
