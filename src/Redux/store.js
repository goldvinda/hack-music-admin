import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userSlice"; 

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import thunk from "redux-thunk";

const reducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
