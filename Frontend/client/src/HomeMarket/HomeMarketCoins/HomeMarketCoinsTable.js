import React, { useEffect, useRef, useState } from 'react'
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
  const [data, setData] = useState([])

  const [ loading, setLoading ] = useState(false)
  const Keys = ["name", "symbol"]

  useEffect(()=>{
    // setInterval(()=>{
        const URL ="https://data.messari.io/api/v1/assets?fields=id,slug,symbol,image,metrics/market_data/price_usd"
        setLoading(true)
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
        // },100)
        
      },[URL])

      console.log(data.data[0].metrics.market_data.price_usd, data)
      // const Search = (data) =>{
      //   return data.filter((item)=>(
      //     Keys.some((key) => item[key].toLowerCase().includes(searchs))
      //     ))
      //   }
        // console.log(data)
        //check length
        // const isSearchIncorrect = Search(data)
        
        return (
          <TableContainer className='HomeMarketCoins'>
      <Table className='HomeMarketCoins_table'>
        <TableHead className='table_head'>
          <TableRow className='table_row'>
            <TableCell className='table_cell_asset' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell   className='table_cell_Price' sx={{fontWeight: "bold"}}>Price</TableCell>
            <TableCell  className='table_cell_perfomance' sx={{fontWeight: "bold"}}>Perfomance</TableCell>
            <TableCell  className='table_cell_percentage' sx={{fontWeight: "bold"}}>24h %</TableCell>
              <TableCell  className='table_cell_track'  align='right' sx={{fontWeight: "bold"}}>All tracks</TableCell>
          </TableRow>
        </TableHead>
        {/* {isSearchIncorrect.length === 0  && <div className='not_search_found'>
          <DoNotDisturbAlt className='not_found_icon'/>
          <p>There are no assets matching current filter</p>
        </div>} */}
        {loading ?
        <div className='market_loading'>
            <LoadingAnimation/>
         </div>
          : <TableBody>
          {/* {data?.map((item)=>(
            <TableRow key={item.id} className="body_row">
              <TableCell className='table_body'  sx={{borderBottom: "0px"}}>              
                <div className='to_add_favorite'>
                <StarOutline className='star' />
                  <div className='coin_name'>
                    <img src={item?.image} alt="" />
                    <div className="coin_name_and_symbol">
                      <p className='coin_names'>{item?.symbol}</p>
                     <p className='coin_symbols'>{item?.name}</p>
                    </div>
                  </div>
                </div>
              </TableCell>
                <TableCell  className='table_cell_current_price' >
                   ${item?.current_price.toFixed(2)}
                </TableCell>
                <TableCell  className='table_cell_chart'>chart</TableCell>
                <TableCell  className='table_cell_percentage'>+35%</TableCell>
              
                <TableCell align='right'  className='table_cell_track'>
                  <div className='homemarket_button'>
                    <button>Start tracking</button>
                  </div>
                </TableCell>

            </TableRow>
          ))} */}
        </TableBody>}
      </Table>
    </TableContainer>
  )
}

export default HomeMarketCoinsTable
