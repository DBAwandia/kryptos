import React from 'react'
import Home from "./Home/Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import HomeMarket from './HomeMarket/HomeMarket'

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<HomeMarket/>} />
            <Route path='/notuser' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
