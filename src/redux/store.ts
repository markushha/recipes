import { configureStore } from "@reduxjs/toolkit";
import { reducer as favReducer } from "./favourites/favourite.slice";
import { combineReducers } from 'redux'

import { client } from "./api/client";

const reducers = combineReducers({
  favourites: favReducer,
  [client.reducerPath]: client.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    client.middleware,
  ]),
})