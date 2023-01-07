import React, { useEffect, useState } from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import MarketFooter from '../HomeMarket/MarketFooter/MarketFooter'
import "./StartTracking.css"
import Chart from "./Chart/Chart"
import CompletePrice from './Completeprice/CompletePrice'
import { useLocation } from 'react-router-dom'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
function StartTracking() {

  const location = useLocation()
  const coinName = location.state
  const [loading , setLoading] = useState(false)

  
  return (
    <div className='StartTracking'>
       

      <div className='pc_naviagation'>
        <HomeMaketNavbar/>
      </div>

    <div className='starttracking_container'>
      {loading && <div className='start_tracking_loading'>
        <LoadingAnimation />
      </div>}
      <div className='StartTrackings'>
        <CompletePrice setLoading={setLoading} coinName={coinName}/>
      </div>
    </div>

      <div className='mobile_naviagation'>
        <MarketFooter />
      </div>
    </div>
  )
}

export default StartTracking
