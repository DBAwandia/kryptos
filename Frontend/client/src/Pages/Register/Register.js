import { Close, Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../BaseURL/BaseUrl'
import "./Register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [ password, setPassword ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ username, setUsername ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)


  const navigate = useNavigate()

  const handleRegister = async () =>{
    try{
     setLoading(true)
     const res = await axiosInstance.post("/Users/register" , {email: email , username: username, password: password})
     toast.success("Successfully registered")
     setLoading(false)
     
     setTimeout(()=>{
       navigate("/login")
     },2000)

    }catch(err){
      toast.error(err.response.data.msg)
      setLoading(false)
    }
  }

  return (
    <div className='Register'>
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
      <div className='register_container'>
        <div className='register_header'>
            <div className='register_logo'>
                <img className='logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                <h1 >Krypto</h1>
            </div>
            <Link to="/notuser">
              <div className='close'>
                  <Close className='closex'/>
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
            <input required type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='register_input'>
            <input required type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='register_input'>
            <input type="password" placeholder="Password" className='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='register_button'>
          
            <button className='cancelss' onClick={()=>{
              navigate("/notuser")
            }}>Cancel</button>
          
            <button className='registers' onClick={handleRegister}>{loading ? "Loading..." : "Register"}</button>
        </div>
      </div>
    </div>
  )
}

export default Register

