import { configureStore } from "@reduxjs/toolkit";
import ChannelIdSlice from "./ChannelIdSlice";
import SideMenuSlice from "./SideMenuSlice";
import SearchCacheSlice from "./SearchCacheSlice";

// AppStore which contains multiple slices
const AppStore = configureStore({
  reducer: {
    channelIdSlice: ChannelIdSlice,
    sideMenuSlice: SideMenuSlice,
    searchCacheSlice: SearchCacheSlice,
  },
});

export default AppStore;
