import React from 'react'
import "./MarketSliderNews.css"
import { Navigation,A11y, Autoplay, EffectFade, EffectCreative, EffectCards, EffectFlip, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';


function MarketSliderNews() {
    const data = [
        {
            name: "Bitcon",
            description: " making this the first true generator on the Internet",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        },
        {
            name: "Polkatot",
            description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
            image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_s9qL49r5EgHRuK9iWgkV03wATapFV-BuLyhTjci2w&s"
        },
        {
            name: "Etherium",
            description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
            image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQWZPBwRyqkkT8biI5AxlQyJfHlLgLRPSqI11daePeJTHqTJcXc5BiL2MqdzN0rNcpE8&usqp=CAU"
        },
        {
            name: "Cardano",
            description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
            image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNbvZ1FsxJtDhZMtND0Pho5hcyEjQ6WBTj96nWTW3&s"
        }
    ]
  return (
    <div className='MarketSliderNews'>
         <Swiper
            // install Swiper modules
            modules={[Navigation,Autoplay,EffectCreative , A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            effect=' Creative'
            disableOnInteraction="true"
            loop
            autoplay={{delay: 5000}}
         >
        <div className='MarketSliderNews_container'>
           {data.map((item)=> 
        <SwiperSlide className='slider'>
                <div className='slider_container'>
                    <div className='news_description'>
                        <u>{item.name}</u>
                        <a href='www.facebook.com'>
                            <p>{item.description}</p>
                        </a>
                    </div>
                        <img  loading='lazy' className='lazy_images' src={item?.image} alt="" />
                </div>
        </SwiperSlide>
            )}
        </div>
        </Swiper>
    </div>
  )
}

export default MarketSliderNews
