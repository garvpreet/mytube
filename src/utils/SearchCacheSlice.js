import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCacheSlice",
  initialState: {},
  reducers: {
    addCacheItem: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { addCacheItem } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
