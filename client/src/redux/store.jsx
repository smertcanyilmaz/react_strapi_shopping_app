//import cartReducer from "./cartReducer";

// export const store = configureStore({
//   reducer: { cart: cartReducer },
// });

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const stripe = require("stripe")(process.env.STRİPE_KEY);

const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
