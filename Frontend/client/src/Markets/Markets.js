import React, { useEffect, useState } from 'react'
import "./Market.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { StarOutline } from "@mui/icons-material"
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation"

function Markets() {

  const URL ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h"
  const [data, setData] = useState([])
  const [price, setPrice] = useState([])

  const [ loading, setLoading ] = useState(false)

  useEffect(()=>{
    // setInterval(()=>{
      setLoading(true)
      setTimeout(()=>{

        const fetchData =async (URL)=>{
          try{

              const res = await axios.get(URL)
                setData(res.data)

                // setInterval(()=>{

                //   setPrice(res.data[0].current_price)
                // },1000)
              setLoading(false)

          }catch(err){
              setLoading(false)
          }

    }

   fetchData(URL)

      },3500)
      
  // },1000)
    
  // return clearInterval(timer)
},[URL])

const datas = data.splice(7,100)

// console.log(price,data)
  return (
    <TableContainer className='HomeMarketCoinss'>
      <h1>MARKETS</h1>
      <Table className='HomeMarketCoins_table'>
        <TableHead className='table_head'>
          <TableRow className='table_row'>
            <TableCell className='Market_asset' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell   className='Market_Price' sx={{fontWeight: "bold"}}>Price</TableCell>
            <TableCell  className='Market_perfomance' sx={{fontWeight: "bold"}}>Perfomance</TableCell>
            <TableCell  className='Market_percentage' sx={{fontWeight: "bold"}}>24h %</TableCell>
              <TableCell  className='Market_track'  align='right' sx={{fontWeight: "bold"}}>All tracks</TableCell>
          </TableRow>
        </TableHead>
        {loading ?
        <div className='market_loading'>
            <LoadingAnimation/>
         </div>
          : <TableBody className='table_body'>
          {data?.map((item)=>(
            <TableRow key={item.id} className="body_row">
              <div className='market_coin_name_to_add_favorite'>
                <StarOutline className='stars' />
                <div className='market_coin_name'>
                  <img src={item?.image} alt="" />
                  <div className="market_coin_name_and_symbol">
                    <p className='market_coin_names'>{item?.name}</p>
                    <p className='market_coin_symbols'>{item?.symbol}</p>
                  </div>
                </div>
              </div>
                <TableCell  className='Market_current_price'>
                   ${item?.current_price.toFixed(2)}
                   {/* <p>35%</p> */}
                </TableCell>
                <TableCell  className='Market_chart'>chart</TableCell>
                <TableCell  className='Market_percentage'>+35%</TableCell>
                <TableCell align='right'  className='Market_track'>
                  <div className='homemarket_button'>
                    <button>Start tracking</button>
                  </div>
                </TableCell>

            </TableRow>
          ))}
        </TableBody>}
      </Table>
    </TableContainer>
  )
}

export default Markets
