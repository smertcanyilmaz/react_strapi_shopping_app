import { createSlice } from "@reduxjs/toolkit";

const initialMenuState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {
    open: (state) => {
      state.open = !state.open;
    },
  },
});

export const { open } = menuSlice.actions;

export default menuSlice.reducer;
