import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  cartTotalQuatity: 0,
  cartTotalAmount: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const itemIndex = state.cartItems.findIndex(
        (item) => item.data.id === action.payload.data.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        //   toast(`You've changed ${state.cartItems[itemIndex].name} QUANTITY to ${state.cartItems[itemIndex].cartQuantity} `,{
        //     position:"top-center",
        //     type:"success",
        //     theme:"dark",
        //     autoClose:3000,

        // })
        toast(`You have increase quantity by 1`, {
          position: "top-center",
          type: "success",
          theme: "dark",
          autoClose: 3000,
        });
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

    // *********************************************************************************
    case "DECREASE_PRODUCT":
      const itemIndex1 = state.cartItems.findIndex(
        (cartItem) => cartItem.data.id === action.payload.product.id
      );
      if (state.cartItems[itemIndex1].cartQuantity > 1) {
        state.cartItems[itemIndex1].cartQuantity -= 1;

        toast(
          `You've changed ${state.cartItems[itemIndex1].name} QUANTITY to ${state.cartItems[itemIndex1].cartQuantity} `,
          {
            position: "top-center",
            type: "success",
            theme: "dark",
            autoClose: 3000,
          }
        );
      } else if (state.cartItems[itemIndex1].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;

        toast(`Successfully removed ${action.payload.name} from your cart`, {
          position: "top-center",
          type: "error",
          theme: "dark",
          autoClose: 3000,
        });
      }

    default:
      return state;
  }
};

export default cartReducer;
