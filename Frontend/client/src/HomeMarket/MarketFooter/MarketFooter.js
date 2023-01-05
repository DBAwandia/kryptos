import React, { useEffect, useState } from 'react'
import { GraphicEq, Home, NotificationAdd } from '@mui/icons-material'
import "./MarketFooter.css"
import {NavLink} from "react-router-dom"

function MarketFooter() {

  return (
    <div className='MarketFooter'>
    <div className='MarketFooter_container'>

    <div>
      <NavLink
        to="/"
        className={({isActive})=>
        ( isActive ? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name")
                }
      >
          <Home className='footer_icon'/>
          <p>Markets</p>
      </NavLink>

    </div>

    <div>
      
        <NavLink
          to="/starttracking"
          className={({isActive})=>
          ( isActive ? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name")
                    }
        >
            <GraphicEq className='footer_icon'/>
            <p>Track</p>
        </NavLink>

        </div>

    <div>

        <NavLink 
            to="/allmytracks"
            className={({isActive})=>
            ( isActive ? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name")
                       }
            >
            <NotificationAdd className='footer_icon'/>
            <p>My tracks</p>

        </NavLink>

        </div>
    </div> 
</div>
  )
}

export default MarketFooter
