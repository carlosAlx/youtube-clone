import { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { WatchCard } from "../components/WatchCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";

export const Watch = () => {
  const iconGray =
    "flex items-center gap-1 cursor-pointer bg-gray-100 rounded-full px-2 py-1";
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
            <Navbar />
          </div>
          <div className="flex w-full h-[92.5vh]">
            <div className="flex gap-y-10 gap-x-5 p-7 mx-20 mr-0 w-full overflow-auto">
              <div className="w-full">
                <iframe
                  width="1280"
                  height="720"
                  src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="mt-5">
                  <p className="text-xl">{currentPlayng.videoTitle}</p>

                  <div className="flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                    <div className="flex items-center gap-5 mt-4 justify-between">
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

                        <div className="flex flex-row gap-1 items-center">
                          <button className="bg-gray-100 rounded-full p-2 text-sm tracking-wide">
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
                            <BiLike className="text-xl" />
                            <strong>{currentPlayng.videoLikes}</strong>
                          </div>
                          <div className={iconGray}>
                            <BiDislike className="text-xl" />
                            <strong>dislike</strong>
                          </div>
                          <div className={iconGray}>
                            <FaShare className="text-xl" />
                            <strong>share</strong>
                          </div>
                          <div className={iconGray}>
                            <HiScissors className="text-xl" />
                            <strong>clip</strong>
                          </div>
                          <div className={iconGray}>
                            <MdOutlinePlaylistAdd className="text-xl" />
                            <strong>save</strong>
                          </div>
                          <div className={iconGray}>
                            <BsThreeDots className="text-xl" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-sm bg-gray-100 rounded-2xl p-2">
                        <span className="after:content-['•'] after:mx-1">
                          {currentPlayng.videoViews} views
                        </span>
                        <span> {currentPlayng.videoAge} ago</span>
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
              <div className="mr-24 flex flex-col gap-3">
                {getRecommendedVideos.length &&
                  recommendedVideos.map((item) => (
                    <WatchCard data={item} key={item.videoId} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
