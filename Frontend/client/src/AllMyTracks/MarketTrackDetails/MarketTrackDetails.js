import React, { useEffect, useState } from 'react'
import "./MarketTrackDetails.css"
import {NotificationsActive} from "@mui/icons-material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
import { axiosInstance } from "../../BaseURL/BaseUrl"
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function MarketTrackDetails() {
    const [data, setData] = useState([])
    const [ loading, setLoading ] = useState(false)
    const location = useLocation()
    const [datas, setDatas]= useState([])
    const [loadings , setLoadings] = useState(false)
    const [error, setError] = useState(false)

    const wad = "wadda"

    //database fetch
    const URL = `/Orders/individualorderdetails?QUERY=${wad}`
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

    //from database coinname
    const userCoinName = data?.map((item) => item?.btcname)
    // console.log(Object.values(userCoinName))

    //fetch data from market || coincap API fetch
    const URLS = `https://api.coincap.io/v2/assets/${userCoinName}`
    useEffect(()=>{
      setLoading(true)
      setError(false)
      setInterval(()=>{

        const fetchData = async(URLS) =>{
          try{
            const response = await axios.get(URLS)
            setDatas(response.data.data)
            setError(false)
            setLoading(false)
          }catch(err){
            setLoading(false)
          }
        }
        fetchData(URLS)

      },100)

    },[URL])

    const market_price = datas?.map((item, i) => item?.priceUSD )
    // console.log(market_price)
  
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
        {loading ?
        <div className='market_loading'>
            <LoadingAnimation/>
         </div>
          : <TableBody>
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

                <TableCell  className={item?.market_price < item?.entry ? "btc_price_loss" : "btc_price_profit" }>
                    <p className='live_market_price'>
                        ${item?.market_price}
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
        </TableBody>}
      </Table>
    </TableContainer>
  )
}

export default MarketTrackDetails
