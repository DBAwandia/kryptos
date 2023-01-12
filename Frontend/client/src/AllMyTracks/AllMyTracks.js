import React, { useContext, useEffect, useState, useSyncExternalStore } from 'react'
import HomeMaketNavbar from '../HomeMarket/HomeMaketNavbar/HomeMaketNavbar'
import "./AllMyTracks.css"
import MarketSliderNews from './MarketSlider/MarketSliderNews'
import MarketTrackDetails from './MarketTrackDetails/MarketTrackDetails'
import MarketFooter from "../HomeMarket/MarketFooter/MarketFooter"
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import { axiosInstance } from '../BaseURL/BaseUrl'
import { History, Logout, PowerSettingsNew } from '@mui/icons-material'
import { LoginContext } from '../LoginContext/LoginContext'
import { useNavigate } from 'react-router-dom'

function AllMyTracks() {
  const [ loading, setLoading ] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()

  //username
  const { user,dispatch } = useContext(LoginContext)
  const username = user?.username

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

    //LOGOUT
    const handleLogout = () =>{
      dispatch({type: "LOGOUT"})
      navigate("/notuser")
    }

  return (
    <div className='AllMyTracks'>
     { loading && <div className='market_loadings'>
            <LoadingAnimation/>
      </div>}

      <div className='allmytrack_container_nav'>
        <HomeMaketNavbar/>
      </div>
      <div className='logout' onClick={()=>handleLogout()}>
        <PowerSettingsNew className='logout_icon'/>
        <p>Logout</p>
      </div>
      <div className='allmytrack_container_slider'>
        <MarketSliderNews/>
      </div>
      <div className='allmytrack_container_tracks'>
        {data.length === 0 ? 
        (
          <div className='No_data'>
            <History className='history_icon' onClick={()=>{
              window.location.reload()
            }} />
            <p>All tracks appear here/empty!! </p>
          </div>
        ) 
        : (<MarketTrackDetails loading={loading} setLoading={setLoading}/>)
        }
      </div>
      <div className='allmytrack_container_footer'>
        <MarketFooter/>
      </div>
    </div>
  )
}

export default AllMyTracks
