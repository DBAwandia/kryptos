import React from 'react'
import "./Reasons.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Reasons() {

    const data = [
        {
            image: "https://coinmetro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy_1.715caef4.jpg&w=3840&q=75",
            name:"Buy Crypto",
            description: "Buy crypto instantly with credit card"
        },
        {
            image: "https://coinmetro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy_2.7b0f56d9.jpg&w=3840&q=75",
            name:"Trade Crypto",
            description: "Advanced trading tools and indicators"
        },
        {
            image: "https://coinmetro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy_3.6b1e8a47.jpg&w=3840&q=75",
            name:"Keep Profits",
            description: "Trade on the lowest fees in the industry"
        },
        {
            image: "https://coinmetro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy_4.3209ab63.jpg&w=3840&q=75",
            name:"Invest in Crypto",
            description: "Copy professional traders automatically"
        }
    ]

  return (
    <div className='reasons'>
        <h1 className='reasons_header'>Why Krypto</h1>
        <p className='reasons_description'>Whether you're a seasoned trader or just getting into crypto, our aim is your financial success.</p>
      <div className='reasons_containers'>
        {data.map((item)=>(
            <div className='reasons_container'>
                {/* <img src={item?.image} alt="" /> */}
                <LazyLoadImage src={item?.image} alt="" effect='blur' className='lazyload_image' />
                <h2>{item?.name}</h2>
                <p>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Reasons
