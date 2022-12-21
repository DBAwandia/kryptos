import React, { useState } from 'react'
import { GraphicEq, Home, NotificationAdd } from '@mui/icons-material'
import "./MarketFooter.css"
import {Link, useNavigate} from "react-router-dom"

function MarketFooter() {
  const [active, setActive] = useState("markets")
  const navigate = useNavigate()
  return (
    <div className='MarketFooter'>
    <div className='MarketFooter_container'>

        <div className={active === "markets"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
          onClick={()=>{
            setActive("markets")
            navigate("/")
          }}
        >
      <Link to="/">
          <Home className='footer_icon'/>
          <p>Markets</p>
      </Link>
        </div>

          <div className={active === "track"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
            onClick={()=>{
              setActive("track")
            }}>
        <Link to="/starttracking">
          <GraphicEq className='footer_icon'/>
          <p>Track</p>
        </Link>
        </div>

        <div className={active === "mytracks"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
          onClick={()=>{
            setActive("mytracks")
          }}>

          <Link to="allmytracks">
            <NotificationAdd className='footer_icon'/>
            <p>My tracks</p>
          </Link>

        </div>
    </div> 
</div>
  )
}

export default MarketFooter
