import React from 'react'
import "./Footer.css"
import { GitHub, Telegram, Twitter, WhatsApp} from "@mui/icons-material"
function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer_container'>
        <h2>Developer's contact</h2>
        <p>My socials  </p>
        <div className='socials' >
            <Twitter className='social_icon' />
            <Telegram className='social_icon' />
            <WhatsApp  className='social_icon' />
            <GitHub  className='social_icon' />
        </div>
      </div>
    </div>
  )
}

export default Footer
