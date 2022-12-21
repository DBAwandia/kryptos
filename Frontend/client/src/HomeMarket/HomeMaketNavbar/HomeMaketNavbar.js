import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./HomeMaketNavbar.css"
function HomeMaketNavbar() {

  const [active, setActive] = useState("market")

  return (
    <div>
      <div className='HomeMaret_navbar'>
              <div className='HomeMarket_logo'>
                  <img className='HomeMarket_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                  <h1 >Krypto</h1>
              </div>
              <div className='HomeMarket_container_lists'>
                <ul>
                  <Link to="/">
                    <li className={active === "market"? "isActive":"market"}
                        onClick={()=>{
                          setActive("market")
                        }}
                    >Market</li>
                  </Link>

                  <Link to="/starttracking">
                    <li className={active === "tracks"? "isActive":"market"}
                        onClick={()=>{
                          setActive("tracks")
                        }}
                    >Track</li>
                  </Link>

                  <Link to="/allmytracks">
                    <li className={active === "mytracks"? "isActive":"market"}
                        onClick={()=>{
                          setActive("mytracks")
                        }}
                    >My tracks</li>
                  </Link>
                  
                </ul>
              </div>
            </div>
            
    </div>
  )
}

export default HomeMaketNavbar
