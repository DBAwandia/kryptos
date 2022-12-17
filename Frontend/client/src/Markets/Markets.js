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

console.log(price,data)
  return (
    <TableContainer className='HomeMarketCoinss'>
      <h1>MARKETS</h1>
      <Table className='HomeMarketCoins_table'>
        <TableHead className='table_head'>
          <TableRow className='table_row'>
            <TableCell className='table_cell' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell  align='right' className='table_cell' sx={{fontWeight: "bold"}}>Price</TableCell>
            <TableCell align='right' className='table_cell' sx={{fontWeight: "bold"}}>Perfomance</TableCell>
            <TableCell align='right' className='table_cell' sx={{fontWeight: "bold"}}>24h %</TableCell>
              <TableCell align='right' className='table_cell' sx={{fontWeight: "bold"}}>All tracks</TableCell>
          </TableRow>
        </TableHead>
        {loading ?
        <div className='markets_loading'>
            <LoadingAnimation/>
         </div>
          : <TableBody>
          {data?.map((item)=>(
            <TableRow key={item.id}>
              <div className='to_add_favorite'>
                <StarOutline className='star' />
                <div className='coin_name'>
                  <img src={item?.image} alt="" />
                  <div className="coin_name_and_symbol">
                    <p className='coin_names'>{item?.name}</p>
                    <p className='coin_symbols'>{item?.symbol}</p>
                  </div>
                </div>
              </div>
                <TableCell align="right" className='table_cell'>
                   {price}
                </TableCell>
                <TableCell align="right" className='table_cell'>chart</TableCell>
                <TableCell align="right" className='table_cell'>+35%</TableCell>
                <TableCell align="right" className='table_cell'>
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
