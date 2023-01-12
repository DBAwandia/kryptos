import React from 'react'
import { Link } from 'react-router-dom'
import "./Herosection.css"

function Herosection() {
  
  return (
    <div className='Herosection'>
      <div className='video_container'>
        <video className='video_mp4' src='/images/city.mp4' autoPlay type="video/mp4" muted loop ></video>
      </div>
      <div className='hero_container'>
        <h1 className='hero_header'>
          Live Crypto Tracker 
         </h1>
         <p className='hero_description'>
          Krypto helps you
          track all crypto coins everywhere in the World for free .
        </p>
        <Link to="/register">
          <button className='hero_button'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Herosection
