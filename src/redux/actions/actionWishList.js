export const addWishList = (product) => {
  return {
    type: "ADD_WISHLIST",
    payload: product,
  };
};

export const removeWishList = (id) => {
  // console.log("id", id);
  return {
    type: "REMOVE_WISHLIST",
    payload: {
      id: id,
    },
  };
};
