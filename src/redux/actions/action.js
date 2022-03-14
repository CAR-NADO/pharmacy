export const addItems = (productObj) => {
  // console.log("productObj",productObj)
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: new Date().getTime().toString(),
      data: productObj,
    },
  };
};

export const removeItems = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      id: id,
    },
  };
};

export const decreaseProduct = (product) => {
  return {
    type: "DECREASE_PRODUCT",
    payload: {
      data: product,
    },
  };
};

export const getTotal = () => {
  return {
    type: "GET_TOTALS",
  };
};
