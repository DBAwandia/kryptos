import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import "./CompletePrice.css"
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation"
import { Offline } from "react-detect-offline";
import {Link} from "react-router-dom"


function CompletePrice({coinName}) {
    const [changeDetails, setChangeDetails] = useState("Limit")
    const [long , setLong] = useState("Long")
    const [short , setShort] = useState("")
    const [select,setSelect] = useState("Limit")
    const [data, setData]= useState([])
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(false)


    //fetch from localStorage and display if user didnt click
    const user = localStorage.getItem("coinID")

    const URL = `https://api.coincap.io/v2/assets/${user}`
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

    },[coinName,URL])

    const datas = [data]
  return (
    <div className='container'>
      {loading && <div className='loading_coin_animate'>
        <LoadingAnimation />
      </div>}

      <Offline>
        <div className='loading_coin_error'>
          <h1>Please check your internet connection</h1>
        </div>
      </Offline>
      
    {datas?.map((item)=>{

    return <div className='CompletePrice_names' key={item?.id}>
       <div className='CompletePrice_name'>
        <div className='CompletePrice_name_n_price'>
          <p className='CompletePrice_name_n_price_btcname'>
            <Link to="/">
              {item?.symbol}/USDT
            </Link>
          </p>
          <span className='CompletePrice_name_n_price_btcleverage'>5X</span>
          <p className={
            item?.changePercent24Hr < 0 ? "CompletePrice_name_n_price_btc_change_red":"CompletePrice_name_n_price_btc_change_green"
              }
          >
            <b>${Number(item?.priceUsd) < 1  ? Number(item?.priceUsd).toFixed(5) : Number(item?.priceUsd).toFixed(2)}</b>
            <b className={Number(item?.priceUsd) < 1 ? "CompletePrice_name_n_price_btc_change_24h_display_none" :"CompletePrice_name_n_price_btc_change_24h"}> {Number(item?.changePercent24Hr) < 0 ? Number(item?.priceUsd*item?.changePercent24Hr/100).toFixed(2): "+" + Number(item?.priceUsd*item?.changePercent24Hr/100).toFixed(2)}$ </b>

          </p>
          
        </div>

        <div className='CompletePrice_buy_n_sell'>
          <button className={long === "Long" ? "long" : ""} onClick={()=>{
            setShort("")
            setLong("Long")
            }}>Long</button>
          <button className={short === "Short" ? "short" : ""} onClick={()=>{
            setLong("")
            setShort("Short")
            }}>Short</button>
        </div>
        
       <select class="choose_limit_market" onChange={(e)=>setSelect(e.target.value)}>

          <option className='Limit'>
            <p onClick={()=>{
              setChangeDetails("Limit")
            }}>
              Limit
            </p>
          </option>
        <option className='Market'>
          <p onClick={()=>{
              setChangeDetails("Market")
            }}>
              Market
          </p>
        </option>

       </select>
       <div className='progress_bar'>
          <p className='progress_description'>Choose %profit for notification</p>
          <select className='progress_select'>
            <option>25%</option>
            <option>50%</option>
            <option>75%</option>
            <option>100%</option>
          </select>
        </div>
       <div className={select ==="Limit" ? "CompletePrice_input_limit_amount" : "CompletePrice_input_limit_amount_hide"}>
          <input 
          type="number" 
          placeholder={`Enter Limit price  (${Number(item?.priceUsd) < 1  ? Number(item?.priceUsd).toFixed(6) : Number(item?.priceUsd).toFixed(4)})`} />
       </div>

       <div className='CompletePrice_input_amount'>
          <input type="number" placeholder="Enter amount ( USDT ) " />
       </div>   

      </div>
      
      <div className='CompletePrice_button_long_short'>
        <button className={long === "Long" ? "buy_long" : "sell_short"}>{!long ? `Sell/Short ${item?.symbol}` : `Buy/Long ${item?.symbol}`}</button>
      </div>

      <div className='track_order_footer'>
        <p>Track my orders</p>
      </div>
    </div>
  
  })}
    </div>
  )
}

export default CompletePrice
