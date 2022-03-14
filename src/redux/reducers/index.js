import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  wishListReducer: wishListReducer,
});

export default rootReducer;
