
// step1 : creating the initial state for cart
export let initialState = {
    cart: JSON.parse(localStorage.getItem("Cart")) || []
}

//step2: creating the reducers

export const reducer=(state,action)=>{

    switch (action.type){
        case "ADD_TO_CART":
            // checking whether the item is already existing in the cart or not
            let ExistingItem = state.cart.find((item)=>item.id === action.payload.id)
            console.log(ExistingItem)
            if(ExistingItem){
                return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
            }else{
                return {...state,cart:[...state.cart,{...action.payload,quantity:1}]}
            }

        case "REMOVE_ITEM_IN_CART":
            return {...state,cart:state.cart.filter((item)=>item.id !== action.payload.id)}
        case "INCREMENT":
            return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
        case "DECREMENT":
            return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity-1}:item))}

        default:
            break;
    }
}

export default reducer