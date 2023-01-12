import React, { useEffect, useRef, useState } from 'react'
import "./Market.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { StarOutline } from "@mui/icons-material"
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { Offline } from 'react-detect-offline';
import { useNavigate } from "react-router-dom";

function Markets() {
  const [data, setData] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  const navigate = useNavigate()
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
      <h1>Markets</h1>
        <Offline>
        <div className='loading_coin_errors'>
          <h1>Please check your internet connection</h1>
        </div>
      </Offline>
      <Table className='MarketsCoins_table'>
        <TableHead className='markets_table_head'>
          <TableRow className='markets_table_row'>
            <TableCell  className='markets_table_cell_perfomance' sx={{fontWeight: "bold"}}>Rank</TableCell>
            <TableCell className='markets_table_cell_asset' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell   className='markets_table_cell_Price' sx={{fontWeight: "bold"}}>Price</TableCell>
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
            <TableRow  className="markets_body_row" 
              onClick={()=>{
                navigate("/login")
              }}
            >
            <TableCell  className='markets_table_cell_chart'>{item?.rank}</TableCell>
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
                <TableCell  className='table_cell_percentage'>
                  <button className={Number(item?.changePercent24Hr) < 0 ? "table_cell_percentage_button_red" : "table_cell_percentage_button"}>
                    {Number(item?.changePercent24Hr).toFixed(2)}%
                  </button>
                </TableCell>
                <TableCell align='right'  className='table_cell_track'>
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
