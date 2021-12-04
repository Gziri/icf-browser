import { combineReducers } from "redux";

import mainReducer from "./main/main.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["icfBundle"],
};
const rootReducer = combineReducers({
  icfBundle: mainReducer,
});

export default persistReducer(persistConfig, rootReducer);
