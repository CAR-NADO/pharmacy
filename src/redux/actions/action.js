export const addItems = ()=> {
  return {
    type:"ADD_PRODUCT",
    payload:{
      id:new Date().getTime().toString(),
      data:"zeeshan"
    }
  }
}