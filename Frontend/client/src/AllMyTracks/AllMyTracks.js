import React from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import "./AllMyTracks.css"
import MarketSliderNews from './MarketSlider/MarketSliderNews'
import MarketTrackDetails from './MarketTrackDetails/MarketTrackDetails'
import Footer from "../Footer/Footer"
import MarketFooter from "../HomeMarket/MarketFooter/MarketFooter"

function AllMyTracks() {
  return (
    <div className='AllMyTracks'>
      <div className='allmytrack_container_nav'>
        <HomeMaketNavbar/>
      </div>
      <div className='allmytrack_container_slider'>
        <MarketSliderNews/>
      </div>
      <div className='allmytrack_container_tracks'>
        <MarketTrackDetails/>
      </div>
      <div className='allmytrack_container_footer'>
        <MarketFooter/>
      </div>
    </div>
  )
}

export default AllMyTracks
