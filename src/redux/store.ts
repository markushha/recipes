import { configureStore } from "@reduxjs/toolkit";
import { reducer as favReducer } from "./favourites/favourite.slice";
import { combineReducers } from 'redux'

const reducers = combineReducers({
  favourites: favReducer
})

export const store = configureStore({
  reducer: reducers,
})