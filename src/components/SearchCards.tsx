import React from "react";
import { Link } from "react-router-dom";
import { HomePageVideos } from "../Type";

export const SearchCards = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="flex gap-3">
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
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="">
            <img
              src={data.channelInfo.image}
              alt=""
              className="w-9 h-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-500">
            <div>
              <a href="" className="">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
