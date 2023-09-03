import { createSlice } from "@reduxjs/toolkit";

const initialMenuState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {
    openMenu: (state) => {
      state.open = true;
    },
    closeMenu: (state) => {
      state.open = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
