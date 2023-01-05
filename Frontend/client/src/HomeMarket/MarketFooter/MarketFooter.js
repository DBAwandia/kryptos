import React, { useEffect, useState } from 'react'
import { GraphicEq, Home, NotificationAdd } from '@mui/icons-material'
import "./MarketFooter.css"
import {Link, useNavigate} from "react-router-dom"

function MarketFooter() {
  const [activez, setActivez] = useState("markets")
  const [ item , setItem ] = useState("")

  //store the active to local storage for easy access in other components || to persist
  useEffect(() => {
    localStorage.setItem('activez', JSON.stringify(activez));
  }, [activez]);


  //get from localstorage
  // useEffect(() => {
    const items = JSON.parse(localStorage.getItem('activez'));
    console.log(items)
   
  // }, []);

  const navigate = useNavigate()
  return (
    <div className='MarketFooter'>
    <div className='MarketFooter_container'>

        <div className={item === "markets"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
          onClick={()=>{
            setActivez("markets")
            // navigate("/")
          }}
        >
      {/* <Link to="/"> */}
          <Home className='footer_icon'/>
          <p>Markets</p>
      {/* </Link> */}

        </div>

          <div className={item === "track"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
            onClick={()=>{
              setActivez("track")
            }}>
        {/* <Link to="/starttracking"> */}
          <GraphicEq className='footer_icon'/>
          <p>Track</p>
        {/* </Link> */}
        </div>

        <div className={item === "mytracks"? "MarketFooter_icons_and_names": "MarketFooter_icons_and_name"}
          onClick={()=>{
            setActivez("mytracks")
          }}>

          {/* <Link to="allmytracks"> */}
            <NotificationAdd className='footer_icon'/>
            <p>My tracks</p>
          {/* </Link> */}

        </div>
    </div> 
</div>
  )
}

export default MarketFooter
