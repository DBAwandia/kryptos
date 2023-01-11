import { Close } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import { LoginContext } from "../../LoginContext/LoginContext"
import { axiosInstance } from '../../BaseURL/BaseUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate()
  const [ emailAndUsername, setEmailAndUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const {  loading  , dispatch} = useContext(LoginContext)

  const handleLogin = async() =>{
    try{
      dispatch({type: "LOGIN_START"})
      const res = await axiosInstance.post("/Users/login" , { email: emailAndUsername, username: emailAndUsername, password: password})
      console.log(res)
      dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
      toast.success("Login success")
       
     setTimeout(()=>{
      navigate("/")
    },2000)

    }catch(err){
      dispatch({type :"LOGIN_FAIL" })
      toast.error(err.response.data.msg)
    }
  }


  return (
    <div className='Login'>
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <div className='login_container'>
        <div className='login_header'>
            <div className='login_logo'>
                <img className='logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                <h1 >Krypto</h1>
            </div>
            <Link to="/notuser">            
              <div className='close'>
                  <Close className='closex'/>
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
            <input type="email" placeholder="Email / username" onChange={(e) => setEmailAndUsername(e.target.value)} />
        </div>
        <div className='login_input'>
            <input type="password" placeholder="Password" className='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>


        <div className='login_button'>
            <button className='cancelss'onClick={()=>{
              navigate("/notuser")
            }}>Cancel</button>
            <button className='logins' onClick={()=>handleLogin()}>{loading ? "Loading..." : "Login"}</button>
        </div>

        <div className='forget_password'>
            <p>Forgot password?</p>
        </div>

      </div>
    </div>
  )
}

export default Login
