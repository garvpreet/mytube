import React, { useEffect, useState } from "react";
import { VIDEO_COMMENT_DETAILS_API } from "../utils/Constants";
import VideoComment from "./VideoComment";

const VideoCommentContainer = ({ videoId, commentCount }) => {
  const [commentsList, setCommentsList] = useState(null);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  // Fetching Comments
  const fetchComments = async () => {
    const data = await fetch(VIDEO_COMMENT_DETAILS_API + videoId);
    const jsonData = await data.json();
    setCommentsList(jsonData.items);
  };

  return commentsList == null ? (
    <div>Loading</div>
  ) : (
    <div>
      <p className="my-2">{commentCount} Comments</p>
      {commentsList.map((comment, index) => (
        <VideoComment key={index} data={comment} />
      ))}
    </div>
  );
};

export default VideoCommentContainer;
