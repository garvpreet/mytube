import React, { useEffect, useState } from "react";
import { VIDEO_DETAILS_API } from "../utils/Constants";
import ChannelDetails from "./ChannelDetails";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { FiMoreHorizontal } from "react-icons/fi";
import VideoPublishedTime from "./VideoPublishedTime";
import VideoCommentContainer from "./VideoCommentContainer";

const WatchVideoDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, [videoId]);

  const { channelId, channelTitle, description, tags, title, publishedAt } =
    videoDetails?.snippet || {};
  const { commentCount, likeCount, viewCount } = videoDetails?.statistics || {};

  const fetchData = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    setVideoDetails(json?.items[0]);
  };

  return videoDetails == null ? (
    <div></div>
  ) : (
    <div className="flex flex-col w-full">
      {/* Video Title */}
      <div className="my-2 font-semibold text-lg">{title}</div>

      {/* Channel Details And lIkes */}
      <div className="flex items-center my-2 justify-between">
        <div className="flex items-center ">
          <ChannelDetails channelId={channelId} channelTitle={channelTitle} />
          <div>
            <button className="mx-4 p-2 px-4 bg-black text-white dark:bg-white dark:text-black rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        {/* Likes and DisLikes */}
        <div className="flex items-center max-sm:hidden">
          <div className="m-2  flex items-center bg-gray-100 dark:bg-slate-800 p-2 px-6 rounded-full dark:border border-white">
            <BiLike className="text-xl mr-1" />
            <p className="mx-1 text-sm">{likeCount}</p>
            <p className="mx-1">|</p>
            <BiDislike className="text-xl ml-1" />
          </div>

          {/* Share Button */}
          <div className="m-2 flex items-center text-center bg-gray-100 p-2 px-6 rounded-full justify-between  dark:bg-slate-800 dark:border border-white ">
            <PiShareFatThin className="text-xl mr-1" />
            <p className="font-medium ml-1">Share</p>
          </div>

          {/* More */}
          <div className="bg-gray-100 p-2 rounded-full ml-2 dark:bg-slate-800 dark:border border-white hidden md:block ">
            <FiMoreHorizontal />
          </div>
        </div>
      </div>

      {/* View count,Date,Tags and Description */}
      <div className="bg-gray-100 p-2 rounded-xl px-4 dark:bg-slate-600 ">
        {/* viewCount and Date */}
        <div className="lg:flex">
          <p className="flex">
            <span className="font-semibold mr-2">{viewCount}</span> views
          </p>
          <p className="lg:ml-2 font-medium">
            {VideoPublishedTime(publishedAt)}
          </p>
        </div>

        {/* Description */}
        <p className="text-clip">{description.split("\n")[0]}</p>
      </div>

      {/* Comments Section */}
      <div className="p-2">
        <VideoCommentContainer videoId={videoId} commentCount={commentCount} />
      </div>
    </div>
  );
};

export default WatchVideoDetails;
