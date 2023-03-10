import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { BsYoutube, BsCameraVideo } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

type navbarType = {
  clickSideMenu: (value: boolean) => void;
};

export const Navbar = ({ clickSideMenu }: navbarType) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const [sidebar, setSidebar] = useState<boolean>(true);

  const handleSeatch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };
  const handleClick = () => {
    setSidebar(!sidebar);
    clickSideMenu(sidebar);
  };

  return (
    <nav className="flex justify-between items-center px-4 sticky top-0 z-50 py-4">
      {/* menu and logo */}
      <div className="flex gap-6 items-center text-2xl">
        <div className="rounded-full hover:bg-stone-200 p-2 items-start">
          <i>
            <RxHamburgerMenu onClick={handleClick} />
          </i>
        </div>
        <Link to={"/"}>
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        {/* search icons, input*/}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSeatch();
          }}
        >
          <div className="flex items-center h-10 ">
            <div className="flex gap-2 items-center rounded-full border">
              <i className="bg-white p-2 rounded-l-full">
                <AiOutlineSearch className="text-2xl" />
              </i>
              <input
                type="text"
                className="outline-none w-96 border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
              <i className="hover:bg-stone-200 rounded-full p-2">
                <AiOutlineClose
                  className={`text-xl cursor-pointer ${
                    !searchTerm ? "invisible" : "visible"
                  }`}
                  onClick={() => dispatch(clearSearchTerm)}
                />
              </i>
              <button className="h-10 w-16 flex items-center justify-center bg-zinc-100 rounded-r-full">
                <AiOutlineSearch className="text-2xl" />
              </button>
            </div>
          </div>
        </form>
        <i className="p-3 hover:bg-stone-200 rounded-full">
          <FaMicrophone className="flex text-xl" />
        </i>
      </div>
      <div className="flex gap-5 items-center">
        <BsCameraVideo className="text-2xl" />
        {/*notification */}
        <div className="relative">
          <IoMdNotificationsOutline className="text-2xl" />
          <span className="absolute bottom-2.5 left-3 text-xs text-white bg-red-600 rounded-full px-1">
            3
          </span>
        </div>
        <img
          src="https://yt3.ggpht.com/yti/AHXOFjXjoVCnVrInKVveKDcLW9untGo9fapnb45113EH=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="user-logo"
          className="w-9 rounded-full"
        />
      </div>
    </nav>
  );
};
