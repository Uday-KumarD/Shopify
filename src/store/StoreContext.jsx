import {createContext,useContext,useReducer,useEffect} from 'react'
import {initialState} from "../reducers/StoreReducers"
import reducer from '../reducers/StoreReducers'

// step1 : creating the cartContext (store)
export let cartContext = createContext()

// step2: creating the provider
const CartProvider = ({children}) => {
const [state,dispatch] = useReducer(reducer,initialState)

// useEffect for handling the cart functionality - adding and removing items from local storage
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart));
      
    return ()=>{} //clean up
  },[state.cart])

  return (
    <cartContext.Provider value={{state,dispatch}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider


// creating the custom hook to avoid the repetative logic
// custom always starts with useHookName

export const useCart=()=>{
  return useContext(cartContext)
}