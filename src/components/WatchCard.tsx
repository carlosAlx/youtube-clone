import React from "react";
import { Link } from "react-router-dom";
import { RecommendedVideos } from "../Type";

export const WatchCard = ({ data }: { data: RecommendedVideos }) => {
  return (
    <div className="flex gap-2">
      <div className="relative w-44 h-30 min-w-fit">
        <span className="absolute bottom-3 right-2 text-sm bg-gray-900 px-2 py-0.5 z-10 text-white rounded-md">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            className="w-44 rounded-xl"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3>
          <a href="" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>

        <div className="text-gray-500">
          <a href="" className="text-xs">
            {data.channelInfo.name}
          </a>
        </div>
        <div className="text-sm text-gray-500">
          <span className="after:content-['•'] after:mx-1">
            {data.videoViews} views
          </span>
          <span>{data.videoAge}</span>
        </div>
      </div>
    </div>
  );
};
