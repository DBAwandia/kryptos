import React, { useEffect, useState } from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import MarketFooter from '../HomeMarket/MarketFooter/MarketFooter'
import "./StartTracking.css"
import Chart from "./Chart/Chart"
import CompletePrice from './Completeprice/CompletePrice'
import { useLocation } from 'react-router-dom'
function StartTracking() {

  const location = useLocation()
  const coinName = location.state

  //fetch from localStorage and display if user didnt click
  const user = localStorage.getItem("coinID")

  return (
    <div className='StartTracking'>
      <div className='pc_naviagation'>
        <HomeMaketNavbar/>
      </div>

    <div className='starttracking_container'>
      <div className='StartTracking'>
        <Chart/>
      </div>

      <div className='StartTracking'>
        <CompletePrice coinName={coinName}/>
      </div>
    </div>

      <div className='mobile_naviagation'>
        <MarketFooter />
      </div>
    </div>
  )
}

export default StartTracking
