import React from 'react'
import { NavLink } from 'react-router-dom'
import "./HomeMaketNavbar.css"
function HomeMaketNavbar() {

  return (
    <div>
      <div className='HomeMaret_navbar'>
              <div className='HomeMarket_logo'>
                  <img className='HomeMarket_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                  <h1 >Krypto</h1>
              </div>
              <div className='HomeMarket_container_lists'>
                <ul>
                  <NavLink 
                    to="/"
                    className={ ({isActive}) =>
                    isActive ? "isActivez":"market"}
                  >
                    <li>
                      Market
                    </li>
                  </NavLink>

                  <NavLink 
                    to="/starttracking"
                    className={ ({isActive}) =>
                    isActive ? "isActivez":"market"}
                  >
                    <li>
                    Track
                    </li>
                  </NavLink>

                  <NavLink 
                    to="/allmytracks"
                    className={ ({isActive}) =>
                    isActive ? "isActivez":"market"}
                  >
                    <li>
                      My tracks
                    </li>
                  </NavLink>
                  
                </ul>
              </div>
            </div>
            
    </div>
  )
}

export default HomeMaketNavbar
