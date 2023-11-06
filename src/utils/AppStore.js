import { configureStore } from "@reduxjs/toolkit";
import channelIdSlice from "./ChannelIdSlice";
import sideMenuSlice from "./SideMenuSlice";
import SearchCacheSlice from "./SearchCacheSlice";

// AppStore which contains multiple slices
const AppStore = configureStore({
  reducer: {
    channelIdSlice: channelIdSlice,
    sideMenuSlice: sideMenuSlice,
    searchCacheSlice: SearchCacheSlice,
  },
});

export default AppStore;
