import React, { useEffect, useState } from 'react'
import "./MarketTrackDetails.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { axiosInstance } from "../../BaseURL/BaseUrl"
import axios from 'axios';
import { Delete } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function MarketTrackDetails({setLoading,loading}) {
    const [data, setData] = useState([])
    const [btcdata, setBtcData] = useState(null)
    const [datas, setDatas]= useState([])
    const [loadings , setLoadings] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const username = "ken"

    //database fetch ( long, short, limit )
    const URL = `/Orders/individualorderdetails?QUERY=${username}`
    useEffect(()=>{
        const fetchData = async(URL) =>{
            try{
                const res = await axiosInstance.get(URL)
                setData(res.data)
            }catch(err){

            }
        }
        fetchData(URL)

    },[URL])
    console.log(data)

   
    //database fetch coin name (butcoin, dogecoin) to update market price
    const btc_url = `/Users/coinname?QUERY=${username}`
    useEffect(()=>{
        const fetchData = async(btc_url) =>{
            try{
                const res = await axiosInstance.get(btc_url)
                setBtcData(res.data)
            }catch(err){

            }
        }
        fetchData(btc_url)

    },[btc_url])

    //fetch data from market || coincap API fetch
    const URLS = `https://api.coincap.io/v2/assets/${btcdata}`
    useEffect(()=>{
      setLoading(true)
      setError(false)
      setInterval(()=>{

        const fetchData = async(URLS) =>{
          try{
            const response = await axios.get(URLS)
            setDatas(response.data.data)
            setLoading(false)
            setError(false)
          }catch(err){
            setLoading(false)
          }
        }
        fetchData(URLS)

      },100)

    },[URLS])


    //live track market
    const price_data = [datas]
    const market_price = price_data?.map((item) => item?.priceUsd )
    const market_price_live = market_price[0]

    //convert to 4decimal places || to fixed
    const market_price_lives = market_price_live < 1 ?  Number(market_price_live).toFixed(5) :  Number(market_price_live).toFixed(3)
  
    //LEVERAGE CALCULATONS
    //lets find user entered amount also long and short
    const long = data?.map(item => item?.long)
    const short = data?.map(item => item?.short)
    let longs = long[0]
    let shorts = short[0]
    
    const amount = data?.map(item => item?.amount)
    let amounts = Number(amount[0])

    console.log(amounts)
    //entry price
    const entry_price =  data?.map(item => item?.entry)

    //calculate change in percentage
    let profitOrLossChange = (100 - (market_price_live* 100/entry_price) )
    

    // %change
    let change_in_percentage = (Number(profitOrLossChange) < 1 ) ?  Number(profitOrLossChange).toFixed(2) : Number(profitOrLossChange).toFixed(3)
  let percentageChangess = Math.abs(change_in_percentage)

      //storeinlocalstorage
      let timer;
      useEffect(()=>{
      timer =  setInterval(()=>{
          localStorage.setItem("percentage" , percentageChangess)
        },1000)
     return  () =>{
          clearInterval(timer)
                  }

      },[percentageChangess])   

    const ifShortAndProfit = amounts - (amounts *  change_in_percentage/100)
    const ifShortAndLoss = amounts + (amounts *  change_in_percentage/100)

    const ifLongAndProfit = amounts - (amounts *  change_in_percentage/100)
    const ifLongAndLoss = amounts + (amounts *  change_in_percentage/100)

    let checkIfLong = entry_price < market_price_live
    let checkIfShort = market_price_live < entry_price


    //manually delete order from mongodb and from user
    const handleDelete = async ()=>{
      try{
        await axiosInstance.put("/Orders/deleteorder" , {username: "ken"})
        toast.success("Success")
        setTimeout(()=>{
          navigate("/")
        },3000)
      }catch(err){
        toast.error("Network/retry")
      }
    }

  return (
      <TableContainer className='MarketTrackDetails'>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <Table className='Market_Track_Details'>
        <TableHead className='MarketTrackDetails_head'>
          <TableRow className='MarketTrackDetails_row'>
            <TableCell  className='Trackings' sx={{fontWeight: "bold"}}>Type</TableCell>
            <TableCell  className='Coin' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell className='Entry' sx={{fontWeight: "bold"}}>Entry</TableCell>
            <TableCell className='Leverage' sx={{fontWeight: "bold"}}>Leverage</TableCell>
            <TableCell   className='Markets' sx={{fontWeight: "bold"}}>Balance</TableCell>
            <TableCell  className='Change' sx={{fontWeight: "bold"}}>%Change</TableCell>
            <TableCell  className='Trackings' sx={{fontWeight: "bold"}}>Manual(X)</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
          {data?.map((item,i)=>
            <TableRow key={i}>             
              <TableCell sx={{borderBottom: "0px"}} className={longs === "Long" ? "notification_buy":"notification_sell"}>
                { longs }
                { shorts}              
              </TableCell>
                <TableCell  className='btc_name' >
                    {item?.name}
                </TableCell>
                <TableCell  className='btc_entry'>
                    <p className='mobile_entry'>
                        {item?.entry}
                    </p>
                    {/* <p className='mobile_leverage'>
                       5X
                    </p> */}
                </TableCell>
                <TableCell  className='btc_leverage'>
                        5X
                </TableCell>
                <TableCell  className={
                  item?.short && checkIfShort && "btc_price_profit"  ||
                  item?.short && checkIfLong &&   "btc_price_loss"  ||
                  item?.long && checkIfShort &&   "btc_price_loss"  ||
                  item?.long && checkIfLong  &&   "btc_price_profit"
                   }>
                    <p className={item?.long ? "live_market_price" : "live_market_prices"}>
                       ${ item?.long && checkIfLong && ifLongAndProfit}
                       ${ item?.long && checkIfShort && ifLongAndLoss }

                    </p>
                    <p className={item?.short ? "live_market_price" : "live_market_prices"}>
                       ${ item?.short && checkIfShort && ifShortAndProfit }
                       ${ item?.short && checkIfLong &&  ifShortAndLoss }
                    </p>
                    <p 
                        className={
                          item?.long && checkIfShort  && "live_market_price_loss"  ||
                          item?.long && checkIfLong  &&  "live_market_price_profit" ||  
                          item?.short && checkIfShort  && "live_market_price_profit" ||  
                          item?.short && checkIfLong  && "live_market_price_loss" 
                       }
                      >
                        {percentageChangess}%
                    </p>
                </TableCell>
                <TableCell  className={
                       item?.long && checkIfShort  && "btc_change_loss"  ||
                       item?.long && checkIfLong  &&  "btc_change_profit" ||  
                       item?.short && checkIfShort  && "btc_change_profit" ||  
                       item?.short && checkIfLong  && "btc_change_loss" 
                    }
                  >
                    {percentageChangess}%
                </TableCell>
                <TableCell  className='delete_order' onClick={()=>handleDelete()}>
                  <Delete />
              </TableCell>
            </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MarketTrackDetails
