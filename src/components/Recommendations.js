import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { VIDEO_RECOMMENDATIONS_API } from "../utils/Constants";
import RecommendationVideo from "./RecommendationVideo";
import ShimmerRecommendations from "./ShimmerRecommendations";

const Recommendations = () => {
  const channelId = useSelector((store) => store?.channelIdSlice?.channelId);
  const [recommendationList, setRecommendationList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(VIDEO_RECOMMENDATIONS_API + channelId);
    const json = await data.json();
    setRecommendationList(json?.items);
  };

  return recommendationList == null ? (
    <div>
      <ShimmerRecommendations />
      <ShimmerRecommendations />
      <ShimmerRecommendations />
      <ShimmerRecommendations />
      <ShimmerRecommendations />
      <ShimmerRecommendations />
      <ShimmerRecommendations />
      <ShimmerRecommendations />
      <ShimmerRecommendations />
    </div>
  ) : (
    <div>
      {recommendationList.map((recVideo, index) => (
        <Link
          to={"/watch?v=" + recVideo?.contentDetails?.upload?.videoId}
          key={index}
        >
          <RecommendationVideo data={recVideo} />
        </Link>
      ))}
    </div>
  );
};

export default Recommendations;
