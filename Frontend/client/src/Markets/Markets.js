import React, { useEffect, useRef, useState } from 'react'
import "./Market.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import {DoNotDisturbAlt, StarOutline} from "@mui/icons-material"
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

function Markets() {
  const [data, setData] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  let timer;
  useEffect(()=>{
  setLoading(true)
   setInterval(()=>{
        const URL = "https://api.coincap.io/v2/assets"
        const fetchData =async (URL)=>{
          try{
            const res = await axios.get(URL)
            setData(res.data)
            setLoading(false)
            setError(false)
            
          }catch(err){
            setLoading(false)
            setError(true)
          }
        }
        fetchData(URL)
        },200)
        return ()=>{clearInterval(timer)}
        
      },[URL])

      //all data from API
      const apiData  = [data]

      //all data which aint filtered
      const datazz =  apiData[0]?.data
        return (
    <TableContainer className='MarketsCoins'>
      <Table className='MarketsCoins_table'>
        <TableHead className='markets_table_head'>
          <TableRow className='markets_table_row'>
            <TableCell className='markets_table_cell_asset' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell   className='markets_table_cell_Price' sx={{fontWeight: "bold"}}>Price</TableCell>
            <TableCell  className='markets_table_cell_perfomance' sx={{fontWeight: "bold"}}>Perfomance</TableCell>
            <TableCell  className='markets_table_cell_percentage' sx={{fontWeight: "bold"}}>24h %</TableCell>
              <TableCell  className='markets_table_cell_track'  align='right' sx={{fontWeight: "bold"}}>All tracks</TableCell>
          </TableRow>
        </TableHead>

        {/* {error   && <div className='internet_connection_error'>
          <DoNotDisturbAlt className='not_found_icon'/>
          <p>Check your internet</p>
        </div>} */}

        {loading ?
        <div className='market_loading'>
            <LoadingAnimation/>
         </div>
          : <TableBody>
          {datazz?.map((item)=>
            <TableRow  className="markets_body_row" >
              <TableCell className='markets_table_body'  sx={{borderBottom: "0px"}}>              
                <div className='markets_to_add_favorite'>
                <StarOutline className='star' />
                  <div className='markets_coin_name'>
                    <div className="markets_coin_name_and_symbol">
                      <p className='markets_coin_names'>{item?.symbol}</p>
                     <p className='markets_coin_symbols'>{item?.name}</p>
                    </div>
                  </div>
                </div>
              </TableCell>
                <TableCell  className='markets_table_cell_current_price' >
                   ${Number(item?.priceUsd) < 1  ? Number(item?.priceUsd).toFixed(5) : Number(item?.priceUsd).toFixed(2)}
                </TableCell>
                <TableCell  className='markets_table_cell_chart'>chart</TableCell>
                <TableCell  className='markets_table_cell_percentage'>+35%</TableCell>
                <TableCell align='right'  className='markets_table_cell_track'>
                  <div className='Markets_button'>
                    <button>Start tracking</button>
                  </div>
                </TableCell>
            </TableRow>
        )}
        </TableBody>}
      </Table>
    </TableContainer>
  )
}

export default Markets
