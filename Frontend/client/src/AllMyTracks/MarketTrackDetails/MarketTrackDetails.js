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


function MarketTrackDetails({setLoading}) {
    const [data, setData] = useState([])
    const [btcdata, setBtcData] = useState(null)
    const [datas, setDatas]= useState([])
    const [loadings , setLoadings] = useState(false)
    const [error, setError] = useState(false)
    const image ="https://img.freepik.com/premium-vector/eror-404-page-concept-with-character-boy-holding-magnifying-glass-vector-illustration_651415-175.jpg?w=740"

    const username = "wadda"

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

    const price_data = [datas]
    const market_price = price_data?.map((item) => item?.priceUsd )
    const market_price_live = market_price[0]

    //convert to 4decimal places || to fixed
    const market_price_lives = market_price_live < 1 ?  Number(market_price_live).toFixed(5) :  Number(market_price_live).toFixed(3)
  
  return (
      <TableContainer className='MarketTrackDetails'>
      <Table className='Market_Track_Details'>
        <TableHead className='MarketTrackDetails_head'>
          <TableRow className='MarketTrackDetails_row'>
            <TableCell  className='Trackings' sx={{fontWeight: "bold"}}>Trackings</TableCell>
            <TableCell  className='Coin' sx={{fontWeight: "bold"}}>Coin</TableCell>
            <TableCell className='Entry' sx={{fontWeight: "bold"}}>Entry</TableCell>
            <TableCell className='Leverage' sx={{fontWeight: "bold"}}>Leverage</TableCell>
            <TableCell   className='Markets' sx={{fontWeight: "bold"}}>Markets</TableCell>
            <TableCell  className='Change' sx={{fontWeight: "bold"}}>%Change</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
          {data?.map((item,i)=>
            <TableRow key={i}>
              <TableCell sx={{borderBottom: "0px"}} className={item?.long === "Long" ? "notification_buy":"notification_sell"}>
                { item?.long }
                { item?.short}              
              </TableCell>
                <TableCell  className='btc_name' >
                    {item?.name}
                </TableCell>
                <TableCell  className='btc_entry'>
                    <p className='mobile_entry'>
                        {item?.entry}
                    </p>
                    <p className='mobile_leverage'>
                       5X
                    </p>
                </TableCell>
                <TableCell  className='btc_leverage'>
                        5X
                </TableCell>

                <TableCell  className={market_price_lives < item?.entry ? "btc_price_loss" : "btc_price_profit" }>
                    <p className='live_market_price'>
                        ${market_price_lives}
                    </p>
                    <p  className={item?.change < 0 ? "live_market_price_loss" : "live_market_price_profit"}>
                        {item?.change}%
                    </p>
                </TableCell>
                <TableCell  className={item?.change < 0 ? "btc_change_loss" : "btc_change_profit"}>
                    {item?.change}%
                </TableCell>
            </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MarketTrackDetails
