import React from 'react'
import Home from "./Home/Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import HomeMarket from './HomeMarket/HomeMarket'
import StartTracking from './StartTracking/StartTracking'
import AllMyTracks from './AllMyTracks/AllMyTracks'

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<HomeMarket/>} />
            <Route path='/starttracking' element={<StartTracking/>} />
            <Route path='/allmytracks' element={<AllMyTracks/>} />
            <Route path='/notuser' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
