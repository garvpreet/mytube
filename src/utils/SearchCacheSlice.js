import { createSlice } from "@reduxjs/toolkit";

// Storing Cache - Debouncing
const searchCache = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addCacheItem: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { addCacheItem } = searchCache.actions;
export default searchCache.reducer;
