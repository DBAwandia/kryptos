import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import "./CompletePrice.css"
function CompletePrice({coinName}) {
    const [changeDetails, setChangeDetails] = useState("Limit")
    const [long , setLong] = useState("Long")
    const [short , setShort] = useState("")
    const [select,setSelect] = useState("Limit")
    const [data, setData]= useState([])

    const URL = `https://api.coincap.io/v2/assets/${coinName}`
    useEffect(()=>{

      setInterval(()=>{

        const fetchData = async(URL) =>{
          const response = await axios.get(URL)
          setData(response.data.data)
        }
        fetchData(URL)

      },100)

    },[coinName,URL])

    const datas = [data]
    console.log(data)
  return (
    <div>
    {datas?.map((item)=>{

    return <div className='CompletePrice_names' key={item?.id}>
       <div className='CompletePrice_name'>
        <div className='CompletePrice_name_n_price'>
          <p className='CompletePrice_name_n_price_btcname'>{item?.symbol}/USDT</p>
          <span className='CompletePrice_name_n_price_btcleverage'>5X</span>
          <p className={
            item?.changePercent24Hr < 0 ? "CompletePrice_name_n_price_btc_change_red":"CompletePrice_name_n_price_btc_change_green"
          }
          >
            ${Number(item?.priceUsd) < 1  ? Number(item?.priceUsd).toFixed(5) : Number(item?.priceUsd).toFixed(2)}
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
        <button className={long === "Long" ? "buy_long" : "sell_short"}>{!long ? "Sell/Short BTC" : "Buy/Long BTC"}</button>
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
