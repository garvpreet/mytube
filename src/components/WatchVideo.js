import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/SideMenuSlice";
import WatchVideoDetails from "./WatchVideoDetails";
import Recommendations from "./Recommendations";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [urlSearchParams] = useSearchParams();
  const videoId = urlSearchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-2 w-full pl-10 grid grid-cols-12  dark:bg-slate-800 dark:text-white">
      <div className="flex flex-col col-span-12 md:col-span-8 overflow-x-hidden mr-2">
        <div className="">
          {/* Video Tab */}
          <iframe
            data-testid="iframe"
            width="100%"
            height="450"
            src={
              "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl dark:bg-white"
          ></iframe>
        </div>
        {/* Title,Description,Channel Details,Comments of Video */}
        <WatchVideoDetails videoId={videoId} />
      </div>

      {/* Recomendations Section */}
      {
        <div className="col-span-4 p-1 hidden md:block">
          <div className="w-full">
            <div className="w-full flex justify-center rounded-3xl "></div>
          </div>
          <Recommendations />
        </div>
      }
    </div>
  );
};

export default WatchVideo;
