import { createSlice } from "@reduxjs/toolkit";

const initialMenuState = {
  openFilter: false,
};

export const filterResponsiveReducer = createSlice({
  name: "openFilter",
  initialState: initialMenuState,
  reducers: {
    openFilter: (state) => {
      state.openFilter = !state.openFilter;
    },
  },
});

export const { openFilter } = filterResponsiveReducer.actions;

export default filterResponsiveReducer.reducer;
