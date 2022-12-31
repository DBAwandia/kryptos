import React, { useState } from 'react'
import "./CompletePrice.css"
function CompletePrice() {
    const [changeDetails, setChangeDetails] = useState("Limit")
    const [long , setLong] = useState("Long")
    const [short , setShort] = useState("")
    const [select,setSelect] = useState("Limit")

  return (
    <div className='CompletePrice_names'>
       <div className='CompletePrice_name'>
        <div className='CompletePrice_name_n_price'>
          <p className='CompletePrice_name_n_price_btcname'>BTC/USDT</p>
          <span className='CompletePrice_name_n_price_btcleverage'>5X</span>
          <p className='CompletePrice_name_n_price_btcpercentage'>-26%</p>
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
          <input type="number" placeholder="Enter Limit price" />
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
  )
}

export default CompletePrice
