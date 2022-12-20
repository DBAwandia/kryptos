  // const btnRef = useRef("");

  // let streamz = [
  //   "ethusdt@trade", "btcusdt@trade","bnbusdt@trade","adausdt@trade","bchusdt@trade",
  //   "dotusdt@trade","xrpusdt@trade",
  //   "trxusdt@trade","ltcusdt@trade","xlmusdt@trade",
  // ];

  //   let ws = new WebSocket("wss://stream.binance.com:9443/ws/" + streamz.join('/'));
  //   ws.onmessage = (event)=>{
  //    let prevs = JSON.parse(event.data)
  //    let datazz = prevs.p


  //      btnRef = datazz
  //      //  console.log(datazz)
  //      //  console.log(btnRef.current.datazz)
  //     }

  //  console.log(btnRef)
//   const [ prixe, setPrixe] = useState([])
//   const socket = io("http://localhost:5000");

//   useEffect(()=>{
//     socket.on("chatmessage" ,cryptoData =>{
//       setPrixe(cryptoData)
//     })
//   }, [])

//   let mapping = prixe.data
//   console.log(mapping)

//   socket.on("connect", ()=>{
//     console.log("connected")
//   })

// import { io } from "socket.io-client";
