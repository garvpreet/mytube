import React, { useEffect, useState } from "react";
import { CHANNEL_IMG_API } from "../utils/Constants";

const ChannelDetails = ({ channelId, channelTitle }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getChannelImage();
  }, []);

  const getChannelImage = async () => {
    const data = await fetch(CHANNEL_IMG_API + channelId);
    const json = await data.json();
    setDetails(json);
  };
  if (details == null) return <></>;
  const imgUrl = details?.items[0].snippet?.thumbnails?.high?.url || {};
  const subscriberCount = details?.items[0]?.statistics?.subscriberCount;

  return (
    <div className="flex items-center">
      <img
        className="w-14 h-14 mr-1 rounded-full"
        alt="Channel Image"
        src={imgUrl}
      />
      <div>
        <p className="font-semibold text-lg">{channelTitle}</p>
        <p className="text-xs">{subscriberCount} subscribers</p>
      </div>
    </div>
  );
};

export default ChannelDetails;
