import { configureStore } from "@reduxjs/toolkit";
import ChannelIdSlice from "./ChannelIdSlice";

// AppStore which contains multiple slices
const AppStore = configureStore({
  reducer: {
    channelId: ChannelIdSlice,
  },
});

export default AppStore;
