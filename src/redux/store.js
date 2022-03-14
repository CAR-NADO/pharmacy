import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
// );

const persistConfig = {
  key: "persist-key",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export default store;
export { persistor };
// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
