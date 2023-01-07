import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import "./CompletePrice.css"
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation"
import { Offline } from "react-detect-offline";
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {axiosInstance} from "../../BaseURL/BaseUrl"


function CompletePrice({coinName,setLoading}) {
    const [changeDetails, setChangeDetails] = useState("Limit")
    const [long , setLong] = useState("Long")
    const [short , setShort] = useState("")
    const [select,setSelect] = useState("Limit")
    const [selectPercentage, setSelectPercentage] = useState("25%")
    const [limitAmount, setLimitAmount] = useState("")
    const [market, setMarket] = useState("")
    const[amount, setAmount] = useState("")
    const [data, setData]= useState([])
    const [loadings , setLoadings] = useState(false)
    const [error, setError] = useState(false)
    const [ disable , setDisable ] = useState(false)


    //validate form
    useEffect(()=>{
      if(amount.length < 1 || "" ){
        setDisable(true)
      }else{
        setDisable(false)
      }
    },[amount ,disable])

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

    //name or sumbol
    const symbol = data && datas?.map(item => item?.symbol)
    const symbols =symbol[0]

    //coinname
    const coinname = data && datas?.map(item => item?.name)
    let coinnames = coinname[0]

    //price usd
    const entryPrice = data && datas?.map(item => item?.priceUsd)
    const entry = Number(entryPrice[0]) < 1 ? Number(entryPrice[0]).toFixed(5) : Number(entryPrice[0]).toFixed(2)
 
    const navigate = useNavigate()
    //pass props of 5X ,price ,Percentage target,buy/sell to /allmytracks
    const handleClick = async()=>{
      setLoadings(true)
      try{
        await axiosInstance.post("/Orders/longORshort", 
          {
            username: "wadda",
            btcname: coinnames,
            name: symbols,
            short: short,
            long: long,
            markets: select,
            selectPercentage: selectPercentage,
            entry: entry,
            amount: amount,
            limitAmount: limitAmount
          }
        )
        setLoadings(false)
        toast.success('Successfull!!...redirecting', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          setTimeout(()=>{
            navigate("/allmytracks")
          },2500)
      }catch(err){
        setLoadings(false)
        toast.error("Please retry")
      }
    }
  return (
    <div className='container'>
      
      {/* show success or fail notification */}
        <ToastContainer />

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
            <b >${Number(item?.priceUsd) < 1  ? Number(item?.priceUsd).toFixed(5) : Number(item?.priceUsd).toFixed(2)}</b>
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

        <div className='progress_bar'>
          <p className='progress_description'>Choose %profit for notification</p>
          <select className='progress_select' onChange={(e)=>setSelectPercentage(e.target.value)} required>
            <option>25%</option>
            <option>50%</option>
            <option>75%</option>
            <option>100%</option>
          </select>
        </div>
        
       <select class="choose_limit_market" onChange={(e)=>setSelect(e.target.value)} >

          <option className='Limit'>
            <p onClick={()=>{
              setChangeDetails("Limit")
            }}>
              Limit
            </p>
          </option>
        <option className='Market' value={()=>setMarket(item?.priceUsd)}>
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
          min="1"
          onChange={(e)=>setLimitAmount(e.target.value)}
          placeholder={`Enter Limit price  (${Number(item?.priceUsd) < 1  ? Number(item?.priceUsd).toFixed(6) : Number(item?.priceUsd).toFixed(4)})`} 
          required
          />
       </div>

       <div className='CompletePrice_input_amount'>
          <input type="number"  min="1" placeholder="Enter amount ( USDT ) " onChange={(e)=>setAmount(e.target.value)} required />
       </div>   

      </div>
      
      <div className='CompletePrice_button_long_short'>
        {loadings && <p className='loadingz'>Loading...</p>}
        <button 
        disabled={disable}
        onClick={()=>
        handleClick(
        )} className={long === "Long" ? "buy_long" : "sell_short"}>{!long ? `Sell/Short ${item?.symbol} `  : `Buy/Long ${item?.symbol}`}</button>
      </div>

      <Link to="/allmytracks">
          <div className='track_order_footer'>
            <p>Track my orders</p>
          </div>
      </Link>
    </div>
  
  })}
    </div>
  )
}

export default CompletePrice
