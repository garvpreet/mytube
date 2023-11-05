import { createSlice } from "@reduxjs/toolkit";

// sideMenuSlice to toggle the sidebar
const sideMenuSlice = createSlice({
  name: "SideMenuSlice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, event) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, event) => {
      state.isMenuOpen = false;
    },
    setMenu: (state, event) => {
      state.isMenuOpen = true;
    },
  },
});
export const { toggleMenu, closeMenu, setMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
