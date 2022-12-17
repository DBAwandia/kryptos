import { Close } from '@mui/icons-material'
import React from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
function Login() {
  const navigate = useNavigate()
  return (
    <div className='Login'>
      <div className='login_container'>
        <div className='login_header'>
            <div className='login_logo'>
                <img className='logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                <h1 >Krypto</h1>
            </div>
            <Link to="/notuser">            
              <div className='close'>
                  <Close className='close'/>
              </div>
            </Link>

        </div>

        <div className='login_description'>
            <p>Login or</p>
          <Link to="/register">
            <span>Create Account</span>
          </Link>
        </div>
        <div className='login_input'>
            <input type="email" placeholder="Email / username"  />
        </div>
        <div className='login_input'>
            <input type="password" placeholder="Password" className='Password' />
            <p>Forgot password?</p>
        </div>
        <div className='login_button'>
          {/* <Link to="/"> */}
            <button className='cancelss'onClick={()=>{
              navigate("/notuser")
            }}>Cancel</button>
          {/* </Link> */}
            <button className='logins'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
