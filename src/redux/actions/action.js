export const addItems = (productObj)=> {
  return {
    type:"ADD_PRODUCT",
    payload:{
      id:new Date().getTime().toString(),
      data:productObj
    }
  }
}

export const removeItems = (id)=> {
  return {
    type:"REMOVE_PRODUCT",
    payload:{
      id:id
    }
  }
}