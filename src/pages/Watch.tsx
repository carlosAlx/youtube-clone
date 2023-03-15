import { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiOutlineScissors, HiScissors } from "react-icons/hi";
import { RiDownloadLine } from "react-icons/ri";
import { TbShare3 } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { WatchCard } from "../components/WatchCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { Spinner } from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { getHomePageVideos } from "../store/reducers/geHomePageVideos";

type stateVi = {
  sidebarT: boolean;
};

export const Watch = ({ sidebarT }: stateVi) => {
  const iconGray =
    "flex items-center gap-1 cursor-pointer bg-gray-100 rounded-full px-2 py-1 hover:bg-gray-300";
  const [showMoreStats, setShowMoreStatus] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlayng = useAppSelector(
    (state) => state.youtubeApp.currentPlayng
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtubeApp.recommendedVideos
  );
  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus;
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlayng && id) dispatch(getRecommendedVideos(id));
  }, [currentPlayng, dispatch, id]);

  return (
    <>
      {currentPlayng && currentPlayng?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div className="h-[7.5vh]">
            <Navbar clickSideMenu={() => {}} />
          </div>
          <div className="flex w-full h-[92.5vh]">
            <div className="flex gap-y-10 gap-x-5 p-7 xl:mx-20 w-full overflow-auto lg:flex-row flex-col">
              <div className="w-full">
                <div className="relative overflow-hidden w-full pt-[56%]">
                  <iframe
                  className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-5">
                  <p className="text-xl">{currentPlayng.videoTitle}</p>

                  <div className="flex gap-4 flex-col pb-3 border-l-transparent border-r-transparent">
                    <div className="flex items-center gap-5 mt-4 justify-between flex-wrap">
                      <div className="flex gap-5 items-center">
                        <img
                          src={currentPlayng.channelInfo.image}
                          alt=""
                          className="rounded-full h-12 w-12 "
                        />

                        <div className="w-5/6">
                          <h5 className="text-sm">
                            <strong>{currentPlayng.channelInfo.name}</strong>
                          </h5>
                          <h6 className="text-gray-400 text-xs">
                            {currentPlayng.channelInfo.subscribers} subscribers
                          </h6>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                          <button className="bg-gray-100 rounded-full p-2 text-sm tracking-wide whitespace-nowrap ">
                            be a member
                          </button>
                          <button className="bg-black rounded-full p-2 text-sm tracking-wider text-white">
                            subscribe
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between mt-1">
                        <div className="flex items-center gap-4">
                          <div className={iconGray}>
                            <i>
                              <BiLike className="text-xl" />
                            </i>
                            <strong className="px-1">
                              {currentPlayng.videoLikes}
                            </strong>
                            <i className="pl-2 border-l-2 border-gray-200 ">
                              {" "}
                              <BiDislike className="text-xl" />
                            </i>
                          </div>
                          <div className={iconGray}>
                            <TbShare3 className="text-xl" />
                            <strong>share</strong>
                          </div>
                          <div className={iconGray}>
                            <RiDownloadLine className="text-xl" />
                            <strong>Download</strong>
                          </div>
                          <div className={iconGray}>
                            <HiOutlineScissors className="text-xl" />
                            <strong>clip</strong>
                          </div>
                          <div className={iconGray}>
                            <BsThreeDots className="text-xl" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-sm bg-gray-100 rounded-2xl p-3">
                        <span className="after:content-['•'] after:mx-1 font-medium">
                          {currentPlayng.videoViews} views
                        </span>
                        <span className="font-medium">
                          {" "}
                          {currentPlayng.videoAge} ago
                        </span>
                        <div
                          className={`${
                            !showMoreStats ? "max-h-16 overflow-hidden" : ""
                          } text-sm w-11/12`}
                        >
                          <pre className="whitespace-pre-wrap font-[Roboto]">
                            {currentPlayng.videoDescription}
                          </pre>
                        </div>
                        <div>
                          <button
                            className="uppercase text-sm cursor-pointer"
                            onClick={() => setShowMoreStatus(!showMoreStats)}
                          >
                            Show {showMoreStats ? "less" : "more"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:mr-24 flex flex-col gap-3 lg:w-[30%]">
                {getRecommendedVideos.length ? (
                   <InfiniteScroll
                   dataLength={getRecommendedVideos.length}
                   next={() => dispatch(getHomePageVideos(true))}
                   hasMore={getRecommendedVideos.length < 500}
                   loader={<Spinner />}
                 >{recommendedVideos.map((item) => (
                    <WatchCard data={item} key={item.videoId} />
                  ))}
                  </InfiniteScroll>):(
                    <Spinner />

                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
