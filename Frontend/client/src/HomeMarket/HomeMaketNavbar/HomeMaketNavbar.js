import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./HomeMaketNavbar.css"
function HomeMaketNavbar() {
  const [activez, setActivez] = useState("")

  //store the active to local storage for easy access in other components
  useEffect(()=>{
    JSON.parse(localStorage.setItem("activez",activez) || null)
  },[activez])

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
                    <li className={activez === "market"? "isActivez":"market"}
                        onClick={()=>{
                          setActivez("market")
                        }}
                    >Market</li>
                  </Link>

                  {/* <Link to="/starttracking"> */}
                    <li className={activez === "tracks"? "isActivez":"market"}
                        onClick={()=>{
                          setActivez("tracks")
                        }}
                    >Track</li>
                  {/* </Link> */}

                  {/* <Link to="/allmytracks"> */}
                    <li className={activez === "mytracks"? "isActivez":"market"}
                        onClick={()=>{
                          setActivez("mytracks")
                        }}
                    >My tracks</li>
                  {/* </Link> */}
                  
                </ul>
              </div>
            </div>
            
    </div>
  )
}

export default HomeMaketNavbar
