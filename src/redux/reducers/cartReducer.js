const initialData = {
  cartItems: [],
  cartTotalQuatity:0,
  cartTotalAmount:0,
}

const cartReducer = (state = initialData, action)=> {
  switch(action.type) 
  {
    case "ADD_PRODUCT":
      console.log("add product", action.payload)
    default: return state
    }
}

export default cartReducer;