import React, { useEffect, useState } from 'react'
import "./MarketSliderNews.css"
import { Navigation,A11y, Autoplay, EffectFade, EffectCreative, EffectCards, EffectFlip, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import axios from 'axios';
const dataz = [
    {
        name: "Bitcon",
        description: " making this the first true generator on the Internet",
        image :"https://m.economictimes.com/thumb/height-450,width-600,imgsize-50849,msid-81171034/bitcoin.jpg"
    },
    {
      name: "Etherium",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://yourcryptolibrary.com/wp-content/uploads/2021/12/Ethereum-Best-place-to-stake-Ethereum.jpg"
    },
    {
      name: "Kadena",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"data:image/png;base64,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"
    },
    {
      name: "BNB ",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://i.pinimg.com/originals/76/d3/61/76d361b47a5c77573874e0c8471ed9fb.jpg"
    },
    {
      name: "Polkadot",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://www.analyticsinsight.net/wp-content/uploads/2022/07/Can-Buying-Polkadot-DOT-and-Xchange-Monster-MXCH-Now-Make-You-a-Crypto-Millionaire.jpg"

     },
    {
        name: "Cardano",
        description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
        image :"https://newsbtc.com/wp-content/uploads/2021/09/cardano-1280x720-1.jpeg"
    },
    {
      name: "Solana",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://www.analyticsinsight.net/wp-content/uploads/2022/05/Solana-5.jpg"
    },
    {
      name: "Tron",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://zipmex.com/static/0e85266359c199a39ebc9bac8cabae34/1bbe7/TRX-price-prediction.jpg"
    },
    {
      name: "Litecoin",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://www.investopedia.com/thmb/sFHIoT5OqLJAwZNsoiTPnxR6XD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_709036540-5bfc32f246e0fb00514633ea.jpg"
    },
    {
      name: "DogeCoin",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://thecryptobasic.com/wp-content/uploads/2022/06/robinhood-ceo-best-friend-dogecoin.jpg"
    },
    {
      name: "Metaverse",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://www.analyticsinsight.net/wp-content/uploads/2022/07/Best-Metaverse-Crypto-That-Can-Outperform-Bitcoin-In-2022.jpg"
    }
    ,
    {
      name: "Gala",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://img.cryptopolitan.com/wp-content/uploads/2022/01/CP_Altcoins_-GALA_1140x570.png?strip=all&lossy=1&quality=90&webp=90&sharp=1&ssl=1"
    },
    {
      name: "Matic",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://www.forbes.com/advisor/wp-content/uploads/2022/08/Polygon_logo_resized.jpeg.jpg"
    },
    {
      name: "CRO",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://i0.wp.com/newspack-washingtoncitypaper.s3.amazonaws.com/uploads/2022/11/CRO-Crypto-Price-Prediction.jpg?fit=602%2C316&ssl=1"
    },
    {
      name: "XRP",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://changelly.com/blog/wp-content/uploads/2020/09/Ripple-1.png"
    },
    {
      name: "Algo",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://news.coincu.com/wp-content/uploads/2022/01/algorand-.png"
    },
    {
      name: "Rune",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://www.coinbureau.com/wp-content/uploads/2021/01/ThorChainLogo.jpg"
    },
    {
      name: "AXS",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://u.today/sites/default/files/styles/twitter/public/2022-07/22003.jpg"
    },
    {
      name: "Aave",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://criptomonede-romania.ro/wp-content/uploads/2021/07/ce-este-aave-criptomonede-romania-780x507.jpg"
    },
    {
      name: "Uni",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://ripplecoinnews.com/wp-content/uploads/2020/10/uniswap-news.jpg"
    },
    {
      name: "VeCHAIN",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://img.cryptopolitan.com/wp-content/uploads/2020/07/Vechain-price-prediction.jpg"
    },
    {
      name: "Avalance",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://www.analyticsinsight.net/wp-content/uploads/2022/06/These-5-Facts-About-Bitgert-BRISE-Are-Attracting-Solana-Holders.jpg"
    },
    ,
    {
      name: "Telegram @xcrxwadda || 254742845204",
      description: "making this the first true generator on the Internet making this the first true generator on the Internet making this the first true generator on the Internet",
      image :"https://wallpaper.dog/large/990949.jpg"
    }
    
]

function MarketSliderNews() {
    const [data, setData]= useState([])
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(false)

    const news_api = process.env.REACT_APP_CRYPTO_API

    const URL = 'https://newsdata.io/api/1/crypto?apikey=pub_15397b4f44605075b41e32e478616adce3bda'

    useEffect(()=>{
      setLoading(true)
      setError(false)
      setInterval(()=>{

        const fetchData = async(URL) =>{
          try{
            const response = await axios.get(URL)
            setData(response.data.data)
            setError(false)
            setLoading(false)
          }catch(err){
            setLoading(false)
          }
        }
        fetchData(URL)

      },100)

    },[URL])

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
           {dataz.map((item)=> 
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
