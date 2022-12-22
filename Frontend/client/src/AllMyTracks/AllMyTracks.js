import React from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import "./AllMyTracks.css"
import MarketSliderNews from './MarketSlider/MarketSliderNews'
function AllMyTracks() {
  return (
    <div className='AllMyTracks'>
      <div className='allmytrack_container_nav'>
        <HomeMaketNavbar/>
      </div>
      <div className='allmytrack_container_slider'>
        <MarketSliderNews/>
      </div>
    </div>
  )
}

export default AllMyTracks
