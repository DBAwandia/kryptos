import React, { useEffect, useState } from 'react'
import "./HomeMarketCoinsTable.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import {DoNotDisturbAlt, StarOutline} from "@mui/icons-material"
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation"

function HomeMarketCoinsTable({searchs}) {

  const URL ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h"
  const [data, setData] = useState([])
  const [ loading, setLoading ] = useState(false)
  const Keys = ["name", "symbol"]

  useEffect(()=>{
    // setInterval(()=>{
      setLoading(true)
      setTimeout(()=>{

        const fetchData =async (URL)=>{
          try{

              const res = await axios.get(URL)
                setData(res.data)
              setLoading(false)

          }catch(err){
              setLoading(false)
          }

    }

   fetchData(URL)

      },3000)
      
  // },1000)
    
  // return clearInterval(timer)
},[URL])

const Search = (data) =>{
  return data.filter((item)=>(
    Keys.some((key) => item[key].toLowerCase().includes(searchs))
  ))
}

//check length
const isSearchIncorrect = Search(data)

  return (
    <TableContainer className='HomeMarketCoins'>
      <Table className='HomeMarketCoins_table'>
        <TableHead className='table_head'>
          <TableRow className='table_row'>
            <TableCell className='table_cell' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell  align='right' className='table_cell' sx={{fontWeight: "bold"}}>Price</TableCell>
            <TableCell align='right' className='table_cells' sx={{fontWeight: "bold"}}>Perfomance</TableCell>
            <TableCell align='right' className='table_cell' sx={{fontWeight: "bold"}}>24h %</TableCell>
              <TableCell align='right' className='table_cell' sx={{fontWeight: "bold"}}>All tracks</TableCell>
          </TableRow>
        </TableHead>
        {isSearchIncorrect.length === 0  && <div className='not_search_found'>
          <DoNotDisturbAlt className='not_found_icon'/>
          <p>There are no assets matching current filter</p>
        </div>}
        {loading ?
        <div className='market_loading'>
            <LoadingAnimation/>
         </div>
          : <TableBody>
          {Search(data)?.map((item)=>(
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
                   {item?.current_price}
                </TableCell>
                <TableCell align="right" className='table_cells'>chart</TableCell>
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

export default HomeMarketCoinsTable
