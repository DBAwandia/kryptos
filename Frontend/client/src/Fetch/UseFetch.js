import React, {useEffect, useState} from "react"
import axios from "axios"

export const UseFetch = (URL)=>{
    const [data, setData] = useState([])
    const [ loading, setLoading ] = useState(false)
    let timer;
    useEffect(()=>{
        const fetchData = async (URL)=>{
            setLoading(true)
            // timer = setInterval(async()=>{
                try{
                    const res = await axios.get(URL)
                    setData(res.data)
                    setLoading(false)
    
                }catch(err){
                    setLoading(false)
                }
            // },2000)

            // return clearInterval(timer)
    
        }
        fetchData()
        console.log(data)
    
    },[URL])

    // const reFetch = ()=>{
    //     setLoading(true)
    //         timer = setInterval(async()=>{
    //             try{
    //                 const res = await axios.get(URL)
    //                 setData(res.data)
    //                 setLoading(false)
    
    //             }catch(err){
    //                 setLoading(false)
    //             }
    //         },2000)

    //         clearInterval(timer)
    //         return {data, loading, reFetch}
    // }
}

