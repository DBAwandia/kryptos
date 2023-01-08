import React, { useState } from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import "./AllMyTracks.css"
import MarketSliderNews from './MarketSlider/MarketSliderNews'
import MarketTrackDetails from './MarketTrackDetails/MarketTrackDetails'
import Footer from "../Footer/Footer"
import MarketFooter from "../HomeMarket/MarketFooter/MarketFooter"
import {useLocation} from "react-router-dom"
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

function AllMyTracks() {
  const location = useLocation()
  const [ loading, setLoading ] = useState(false)

  return (
    <div className='AllMyTracks'>
     { loading && <div className='market_loadings'>
            <LoadingAnimation/>
      </div>}
      <div className='allmytrack_container_nav'>
        <HomeMaketNavbar/>
      </div>
      <div className='allmytrack_container_slider'>
        <MarketSliderNews/>
      </div>
      <div className='allmytrack_container_tracks'>
        <MarketTrackDetails setLoading={setLoading}/>
      </div>
      <div className='allmytrack_container_footer'>
        <MarketFooter/>
      </div>
    </div>
  )
}

export default AllMyTracks
