import React, { useContext } from 'react'
import Home from "./Home/Home"
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import HomeMarket from './HomeMarket/HomeMarket'
import StartTracking from './StartTracking/StartTracking'
import AllMyTracks from './AllMyTracks/AllMyTracks'
import { LoginContext } from './LoginContext/LoginContext'

function App() {

//protected route
const ProtectedRoute = ({children}) =>{
  const { user } = useContext(LoginContext)
  if(!user){
    <Navigate to="/notuser" />
  }else{
    return children
  }
}

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<ProtectedRoute><HomeMarket/></ProtectedRoute>} />
            <Route path='/starttracking' element={<ProtectedRoute><StartTracking/></ProtectedRoute>} />
            <Route path='/allmytracks' element={<ProtectedRoute><AllMyTracks/></ProtectedRoute>} />
            <Route path='/notuser' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
