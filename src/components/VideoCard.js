import React, { useEffect, useState } from "react";
import { CHANNEL_API } from "../utils/Constants";

// Video Card for each video in Home Screen/Home Page
const VideoCard = ({ info }) => {
  const [channelImage, setChannelImage] = useState("");
  const { snippet, statistics } = info;
  const { channelTitle, channelId, title, thumbnails } = snippet;

  useEffect(() => {
    getChannelImage();
  }, []);

  const getChannelImage = async () => {
    const data = await fetch(CHANNEL_API + "&id=" + channelId);
    const json = await data.json();
    const url = json?.items[0]?.snippet?.thumbnails?.high?.url;
    setChannelImage(url);
  };

  return (
    <div className="flex flex-col m-2 w-[312px] h-[300px] rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600">
      <img
        className="rounded-lg mb-2"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />

      <div>
        <div className="flex flex-row items-center">
          <img className="w-10 h-10 mr-1 rounded-full" src={channelImage} />
          <p className="font-semibold line-clamp-2 text-base font-sans">
            {title}
          </p>
        </div>

        {/* Channel Title And Views Count */}
        <div className="pl-10 text-sm">
          <p className="my-[0.15rem]">{channelTitle}</p>
          <p className="">{statistics?.viewCount} Views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
