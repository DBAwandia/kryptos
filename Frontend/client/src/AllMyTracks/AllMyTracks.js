import React, { useEffect, useState, useSyncExternalStore } from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import "./AllMyTracks.css"
import MarketSliderNews from './MarketSlider/MarketSliderNews'
import MarketTrackDetails from './MarketTrackDetails/MarketTrackDetails'
import Footer from "../Footer/Footer"
import MarketFooter from "../HomeMarket/MarketFooter/MarketFooter"
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import { axiosInstance } from '../BaseURL/BaseUrl'
import { History } from '@mui/icons-material'

function AllMyTracks() {
  const [ loading, setLoading ] = useState(false)
  const [data, setData] = useState([])
    const image ="https://cdn.pixabay.com/photo/2018/10/08/14/54/bitcoin-3732876_960_720.jpg"

    const username = "wadda"

    //database fetch ( long, short, limit )
    const URL = `/Orders/individualorderdetails?QUERY=${username}`
    useEffect(()=>{
        const fetchData = async(URL) =>{
            try{
                const res = await axiosInstance.get(URL)
                setData(res.data)
            }catch(err){

            }
        }
        fetchData(URL)

    },[URL])

    console.log(data)
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
        {data.length === 0 ? 
        (
          <div className='No_data'>
            <History className='history_icon' />
            <p>All tracks appear here/empty!! </p>
          </div>
        ) 
        : (<MarketTrackDetails setLoading={setLoading}/>)
        }
      </div>
      <div className='allmytrack_container_footer'>
        <MarketFooter/>
      </div>
    </div>
  )
}

export default AllMyTracks
