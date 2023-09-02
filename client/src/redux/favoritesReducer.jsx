import { createSlice } from "@reduxjs/toolkit";

const initialFavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoritesState,
  reducers: {
    addToFavorites: (state, action) => {
      const item = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.favorites.push(action.payload);
      }
    },
    removeItemFav: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },

    resetCartFav: (state) => {
      state.favorites = [];
    },
  },
});

export const { addToFavorites, removeItemFav, resetCartFav } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
