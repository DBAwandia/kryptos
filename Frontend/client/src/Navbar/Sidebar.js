import React from 'react'
import "./Sidebar.css"
import "./Navbar.css"
import { Close} from "@mui/icons-material"
import { Link } from 'react-router-dom'
function Sidebar({setOpenSidebar}) {
  return (
    <div className='Sidebar'>
      <div className='sidebar_close'
        onClick={()=>{
          setOpenSidebar(false)
        }}
      >
      </div>
      <div className='sidebar_open'>
        <div className='logos'>
          <div className='sidebar_header'>
              <img className='logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
              <h1 className='krypto'>Krypto</h1>
          </div>
          <div className='close'
            onClick={()=>{
              setOpenSidebar(false)
            }}
          >
            <Close className='close_icon'/>
          </div>
        </div>
          <div className='sidebar_items'>
              
                <ul>
                    <li>Prices</li>
                    <li>Exchange</li>
                    <li>Blog</li>
                  <Link to="/login">
                    <button className='button_login'>Log In</button>
                  </Link>
                  <Link to="/register">
                    <button className='button_signup'>Signup</button>
                  </Link>
                    <p className='languagez'>
                      <li>EN</li>
                      <li>ES</li>
                      <li>FR</li>
                  </p>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
