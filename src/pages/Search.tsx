import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SearchCards } from "../components/SearchCards";
import { Sidebar } from "../components/Sidebar";
import { SidebarMin } from "../components/SidebarMin";
import { Spinner } from "../components/Spinner";
import { useMenuContext } from "../context/MenuContext";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { HomePageVideos } from "../Type";
import useMediaQuery from "../utils/useMediaQuery";

export const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const { state, dispatchAction } = useMenuContext();
  const mediaQuery = useMediaQuery("(min-width:960px)");

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate]);

  return (
    <div className="max-h-screen overflow-hidden relative">
      <div className="h-[7.5vh]">
        <Navbar />
      </div>
      <div className="flex h-[92.5vh] w-full mb-4">

        {mediaQuery ? !state.isOpen ? <Sidebar /> : <SidebarMin /> : <Sidebar />}

        <div className="w-full">
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
                  <SearchCards data={item} key={item.videoId} />
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};
