import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navigate } from "react-router-dom";
import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { SidebarMin } from "../components/SidebarMin";
import { Spinner } from "../components/Spinner";
import { useMenuContext } from "../context/MenuContext";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/geHomePageVideos";
import { HomePageVideos } from "../Type";
import useMediaQuery from "../utils/useMediaQuery";

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const { state } = useMenuContext();
  const mediaQuery = useMediaQuery("(min-width:960px)");

  useEffect(() => {
    dispatch(clearVideos());
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden relative">
      <div className="h-[7.5vh]">
        <Navbar />
      </div>
      <div className="flex h-[92.5vh]">
        {mediaQuery ? (
          !state.isOpen ? (
            <Sidebar />
          ) : (
            <SidebarMin />
          )
        ) : (
          <Sidebar />
        )}

        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={900}
          >
            <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-14 gap-x-5 p-8 ">
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
