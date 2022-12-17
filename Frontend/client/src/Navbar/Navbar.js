import React, { useState } from 'react'
import "./Navbar.css"
import { Dehaze, KeyboardArrowDownOutlined} from "@mui/icons-material"
import { Link } from 'react-router-dom'
function Navbar({setOpenSidebar}) {
  const [ open ,setOpen] = useState(false)
  return (
    <div className='Navbar'>
      <div className='dehaze'
        onClick={()=>{
          setOpenSidebar(true)
        }}
      >
        <Dehaze className='dehaze'/>
      </div>
      <div className='logo'>
        <img className='logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
        <h1 className='krypto'>Krypto</h1>
      </div>

      <div className='center_information'>

        <ul>
          <li>Prices</li>
          <li>Exchange</li>
          <li>Blog</li>

          <div className='select_language' onClick={()=>{
            setOpen(true)
          }}>
            <li>EN</li>
            <KeyboardArrowDownOutlined/>
          </div>

         {open && <div className='languages_container'>
            <ul>

              <li>English</li>
              <li>Espanol</li>
              <li>French</li>

            </ul>
          </div>}
          
        </ul>

      </div>
      <div className='buttons'>
        <Link to="/login">
          <button className='button_login'>Log In</button>
        </Link>
        <Link to="/register">
          <button className='button_signup'>Signup</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
