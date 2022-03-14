const initialState = {
  wishListItems: [],
};
const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      return {
        ...state,
        wishListItems: state.wishListItems.concat(action.payload),
      };

    //***********************************************************************/

    case "REMOVE_WISHLIST":
      // console.log("action", action);
      const removeFromWishList = state.wishListItems.filter(
        (data) => data.id !== action.payload.id
      );
      return {
        ...state,
        wishListItems: removeFromWishList,
      };
    // case "REMOVE_WISHLIST":
    //   const removeFromWishListItems = state.wishListItems.filter(
    //     (cartItem) => cartItem.data.id !== action.payload.id
    //   );

    //   return {
    //     ...state,
    //     WishListItems: removeFromWishListItems,
    //   };

    default:
      return state;
  }
};

export default wishListReducer;
