import React from "react";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col overflow-hidden dark:bg-slate-800 dark:text-slate-300">
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
