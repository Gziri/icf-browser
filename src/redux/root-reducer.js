import { combineReducers } from "redux";

import icfReducer from "./icf/icf.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["icf"],
};
const rootReducer = combineReducers({
  icf: icfReducer,
});

export default persistReducer(persistConfig, rootReducer);
