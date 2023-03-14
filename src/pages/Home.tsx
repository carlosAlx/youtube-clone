import React, { useEffect, useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdSubscriptions,
} from "react-icons/md";
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
  const [sidebar, setSidebar] = useState<boolean>(true);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  const clickSideMenu = (menuSidebar: boolean) => {
    setSidebar(menuSidebar);
  };

  const iconSideMin =
    "flex flex-col py-4 px-4 m-0 hover:bg-stone-100 rounded-xl items-center max-w-max";

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <Navbar clickSideMenu={clickSideMenu} />
      </div>
      <div className="flex h-[92.5vh]">
        {sidebar ? (
          <Sidebar />
        ) : (
          <div className="m-0 flex p-1 flex-col items-center">
            <a href="" className={iconSideMin}>
              <i>
                <MdHomeFilled className="text-xl" />
              </i>
              <span className="text-[0.55rem] tracking-wider">Home</span>
            </a>
            <a href="" className={iconSideMin}>
              <i>
                <MdOutlineSlowMotionVideo className="text-xl" />
              </i>
              <span className="text-[0.55rem] tracking-wider">Shorts</span>
            </a>
            <a href="" className={iconSideMin}>
              <i>
                <MdSubscriptions className="text-xl" />
              </i>
              <span className="text-[0.55rem] tracking-wider">
                Subscriptions
              </span>
            </a>
            <a href="" className={iconSideMin}>
              <i>
                <MdOutlineVideoLibrary className="text-xl" />
              </i>
              <span className="text-[0.55rem] tracking-wider">Library</span>
            </a>
          </div>
        )}

        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={900}
          >
            <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-14 gap-x-5 p-8">
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
