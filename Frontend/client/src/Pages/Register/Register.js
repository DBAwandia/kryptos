import { Close } from '@mui/icons-material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
function Register() {
  const navigate = useNavigate()

  return (
    <div className='Register'>
      <div className='register_container'>
        <div className='register_header'>
            <div className='register_logo'>
                <img className='logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                <h1 >Krypto</h1>
            </div>
            <Link to="/notuser">
              <div className='close'>
                  <Close className='close'/>
              </div>
            </Link>
        </div>

        <div className='register_description'>
               <p>Register or</p>
            <Link to="/login">      
               <span>Login Account</span>
            </Link>
        </div>
        <div className='register_input'>
            <input type="text" placeholder="Username"  />
        </div>
        <div className='register_input'>
            <input type="email" placeholder="Email"  />
        </div>
        <div className='register_input'>
            <input type="password" placeholder="Password" className='Password' />
        </div>
        <div className='register_button'>
          
            <button className='cancelss' onClick={()=>{
              navigate("/notuser")
            }}>Cancel</button>
          
            <button className='registers'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register

