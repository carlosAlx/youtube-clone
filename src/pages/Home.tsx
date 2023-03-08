import React, { useEffect } from "react";
import { BsFullscreen } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Spinner } from "../components/Spinner";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/geHomePageVideos";
import { HomePageVideos } from "../Type";

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <Navbar />
      </div>
      <div className="flex h-[92.5vh]">
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={900}
          >
            <div className="grid grid-cols-4 gap-y-14 gap-x-8 p-8">
              {videos.map((item: HomePageVideos) => (
                <Cards data={item} key={item.videoId} />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
