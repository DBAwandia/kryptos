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
          <a href='https://twitter.com/keniko1297'>            
            <Twitter className='social_icon' />
          </a>

          <a href='https://t.me/xcrxwadda'>
            <Telegram className='social_icon' />
          </a>

          <a href='https://wa.me/254742845204?text=Hello'>
            <WhatsApp  className='social_icon' />
          </a>

          <a href='https://github.com/DBAwandia'>
            <GitHub  className='social_icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
