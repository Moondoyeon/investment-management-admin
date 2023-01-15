import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { accountQuerySlice } from "./accountQuerySlice";
import { alertModalSlice } from "./alertModalSlice";
import { headerTitleSlice } from "./headerTitleSlice";

const rootReducer = combineReducers({
  [headerTitleSlice.name]: headerTitleSlice.reducer,
  [alertModalSlice.name]: alertModalSlice.reducer,
  [accountQuerySlice.name]: accountQuerySlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
