import React, { useEffect } from "react";
import { BsFullscreen } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Spinner } from "../components/Spinner";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/geHomePageVideos";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { HomePageVideos } from "../Type";

export const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
      if (searchTerm === null) navigate("/");
      else {
        dispatch(getSearchPageVideos(false));
      }
    };
  }, [dispatch, navigate, searchTerm]);

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
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={900}
          >
            <div className="flex flex-col my-8 w-full gap-5">
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
