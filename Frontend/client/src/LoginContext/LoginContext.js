import React , {createContext, useEffect, useReducer} from "react"

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("users")) || null ,
    loading: false,
    error: null
}

export const LoginContext = createContext(INITIAL_STATE)

const loginReducer = (state, action) =>{
    switch(action.type){

        case "LOGIN_START":
            return {
            user: null,
            loading: true,
            error: null
         }

         case "LOGIN_SUCCESS":
            return {
            user: action.payload,
            loading: false,
            error: null
         }

         case "LOGIN_FAIL":
            return {
            user: null,
            loading: false,
            error: action.payload
         }
         case "LOGOUT":
            return {
            user: null,
            loading: false,
            error: null
         }
         default:
            return state

       }
}

export const LoginContextProvider = ({children}) =>{
    const [ state , dispatch ] = useReducer(loginReducer, INITIAL_STATE)
    useEffect(()=>{
        localStorage.setItem("users" ,JSON.stringify(state?.user)) 
    },[state?.user])

    return (
        <LoginContext.Provider value={{ user: state.user , loading: state.loading , error: state.error, dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}