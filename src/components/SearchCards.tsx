import React from "react";
import { Link } from "react-router-dom";
import { HomePageVideos } from "../Type";

export const SearchCards = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 max-w-[1200px] mx-auto w-full">
      <div className="relative">
        <span className="absolute bottom-2 right-2 text-sm bg-gray-900 px-2 py-0.5 z-10 text-white rounded-md">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            className="w-full rounded-xl"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3>
          <a href="" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>
        <div className="text-sm text-gray-500">
          <span className="after:content-['•'] after:mx-1">
            {data.videoViews} views
          </span>
          <span>{data.videoAge}</span>
        </div>

        <div className="flex flex-row gap-x-4">
          <div className="min-w-fit">
            <a href="">
              <img
                src={data.channelInfo.image}
                alt=""
                className="w-5 h-5 rounded-full"
              />
            </a>
          </div>
          <div className="text-gray-500">
            <a href="" className="text-xs">
              {data.channelInfo.name}
            </a>
          </div>
        </div>
        <div>
          <span className="line-clamp-1 text-xs text-gray-500">
            {data.videoDescription}
          </span>
        </div>
      </div>
    </div>
  );
};
