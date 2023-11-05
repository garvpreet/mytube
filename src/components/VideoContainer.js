import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { VIDEO_API } from "../utils/Constants";
import ShimmerVideoContainer from "./ShimmerVideoContainer";

// Video Container Present in Main Container
const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);
  const [hasScrolledDown, setHasScrollDown] = useState(false);

  useEffect(() => {
    getVideos();
  }, [hasScrolledDown]);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    const updatedData = videosList.concat(json.items);
    setVideosList(updatedData);
    setHasScrollDown(false);
  };

  // Infinite Scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1500 >=
      document.documentElement.offsetHeight
    ) {
      setHasScrollDown(true);
    }
    return;
  };

  // Enabling Infinite Scroll by calculating the width
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video Container
  return (
    <div className="flex flex-wrap justify-evenly md:gap-x-2">
      {videosList.length === 0 ? (
        <ShimmerVideoContainer />
      ) : (
        videosList.map((video, index) => (
          <Link key={video?.id + index} to={"/watch?v=" + video?.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
