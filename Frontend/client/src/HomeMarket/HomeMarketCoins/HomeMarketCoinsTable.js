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
  const [data, setData] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const Keys = ["name", "symbol","rank"]

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
      const datazz =  apiData[0].data

      let arrDataFromSETDATA = [data.data]
      let filteredData = arrDataFromSETDATA[0]
      const Search = (filteredData) =>{
        return filteredData?.filter((item)=>(
          Keys.some((key) => item[key].toLowerCase().includes(searchs))
          ))
        }

        
        // check length
        const isSearchIncorrect = Search(filteredData)
        let isSearchIncorrects =  isSearchIncorrect?.length
        
        // console.log(isSearchIncorrect)
    return (
    <TableContainer className='HomeMarketCoins'>
      <Table className='HomeMarketCoins_table'>
        <TableHead className='table_head'>
          <TableRow className='table_row'>
            <TableCell  className='table_cell_perfomance' sx={{fontWeight: "bold"}}>Rank</TableCell>
            <TableCell className='table_cell_asset' sx={{fontWeight: "bold"}}>Asset</TableCell>
            <TableCell   className='table_cell_Price' sx={{fontWeight: "bold"}}>Price</TableCell>
            <TableCell  className='market_table_cell_percentage' sx={{fontWeight: "bold"}}>24h%</TableCell>
              <TableCell  className='table_cell_tracks'  align='right' sx={{fontWeight: "bold"}}>All tracks</TableCell>
          </TableRow>
        </TableHead>

        {isSearchIncorrects === 0  && <div className='not_search_found'>
          <DoNotDisturbAlt className='not_found_icon'/>
          <p>There are no assets matching current filter</p>
        </div>}

        {/* {error   && <div className='internet_connection_error'>
          <DoNotDisturbAlt className='not_found_icon'/>
          <p>Check your connection</p>
        </div>} */}


        {loading ?
        <div className='market_loading'>
            <LoadingAnimation/>
         </div>
          : <TableBody>
          {Search(filteredData)?.map((item)=>
            <TableRow  className="body_row" key={item.id}>
              <TableCell  className='table_cell_chart'>{item?.rank}</TableCell>
              <TableCell className='table_body'  sx={{borderBottom: "0px"}}>              
                <div className='to_add_favorite'>
                <StarOutline className='star' />
                  <div className='coin_name'>
                    <div className="coin_name_and_symbol">
                      <p className='coin_names'>{item?.symbol}</p>
                     <p className='coin_symbols'>{item?.name}</p>
                    </div>
                  </div>
                </div>
              </TableCell>
                <TableCell  className='table_cell_current_price' >
                   ${Number(item?.priceUsd) < 1  ? Number(item?.priceUsd).toFixed(5) : Number(item?.priceUsd).toFixed(2)}
                </TableCell>
                <TableCell  className='table_cell_percentage'>
                  <button className={Number(item?.changePercent24Hr) < 0 ? "table_cell_percentage_button_red" : "table_cell_percentage_button"}>
                    {Number(item?.changePercent24Hr).toFixed(2)}%
                  </button>
                </TableCell>
                <TableCell align='right'  className='table_cell_track'>
                  <div className='homemarket_button'>
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

export default HomeMarketCoinsTable
