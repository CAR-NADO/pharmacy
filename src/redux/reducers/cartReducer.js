import { toast } from "react-toastify";
const initialState = {
  // cartItems: localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //   : [],
  cartItems: [],
  cartTotalQuatity: 0,
  cartTotalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        return {
          ...state,
          cartTotalQuatity: state.cartTotalQuatity + 1,
        };
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        toast(`${action.payload.data.name} added to cart`, {
          position: "top-center",
          type: "success",
          theme: "dark",
          autoClose: 3000,
        });
        return {
          ...state,
          cartItems: [...state.cartItems, tempProduct],
        };
      }

    // *********************************************************************************

    case "REMOVE_PRODUCT":
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.data.id !== action.payload.id
      );

      return {
        ...state,
        cartItems: nextCartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
