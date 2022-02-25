import { createStore } from "redux";
import rootReducer from "./reducers/index";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_());

export default store;