import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartReducer = (state = initialState, action) => {
  // console.log("action", action);
  switch (action.type) {
    case "ADD_PRODUCT":
      const itemIndex = state.cartItems.findIndex(
        (item) => item.data.id === action.payload.data.id
      );
      if (itemIndex >= 0) {
        // console.log("item Index if ==>", itemIndex);

        state.cartItems[itemIndex].cartQuantity += 1;
        toast(`You have increase quantity by 1`, {
          position: "top-center",
          type: "success",
          theme: "dark",
          autoClose: 1000,
        });
      } else {
        // console.log("item Index else ==>", itemIndex);

        const tempProduct = { ...action.payload, cartQuantity: 1 };
        // console.log("tempProduct", tempProduct);
        toast(`${action.payload.data.name} added to cart`, {
          position: "top-center",
          type: "success",
          theme: "dark",
          autoClose: 1000,
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
      const productIndex = state.cartItems.findIndex(
        (item) => item.data.id == action.payload.data.id
      );
      if (state.cartItems[productIndex].cartQuantity > 1) {
        // console.log("first");
        state.cartItems[productIndex].cartQuantity -= 1;
        toast(
          `You've changed ${state.cartItems[productIndex].data.name} QUANTITY to ${state.cartItems[productIndex].cartQuantity} `,
          {
            position: "top-center",
            type: "success",
            theme: "dark",
            autoClose: 1000,
          }
        );
      } else if (state.cartItems[productIndex].cartQuantity === 1) {
        // console.log("second IF ELSE");
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.data.id !== action.payload.data.id
        );

        state.cartItems = nextCartItems;

        toast(
          `Successfully removed ${action.payload.data.name} from your cart`,
          {
            position: "top-center",
            type: "error",
            theme: "dark",
            autoClose: 1000,
          }
        );
      }
      return {
        ...state,
      };

    //************************************************************************************

    case "GET_TOTALS":
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price } = cartItem.data;
          const { cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      // console.log("state", state);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
