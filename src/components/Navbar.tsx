import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { BsYoutube, BsCameraVideo } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { useMenuContext } from "../context/MenuContext";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const [searchIcon, setSearchIcon] = useState<boolean>(false);
  const { dispatchAction, state } = useMenuContext();

  const handleSeatch = () => {
    if (location.pathname !== "/search" && searchTerm !== "")
      navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };
  /* verifica se o menu toggle esta open na pagina watch, se tiver ele fecha */
  useEffect(() => {
    if ((matchPath("/watch/:id", location.pathname)) && !state.isOpen){
      dispatchAction({ type: "TOGGLE" });
    }
  }, [navigate, location]);

  return (
    <nav className="flex justify-between items-center px-4 sticky top-0 z-50 py-4 flex-wrap">
      {/* menu and logo */}
      <div className="flex gap-6 items-center text-2xl">
        <i className="rounded-full hover:bg-stone-200 p-2 items-start">
          <RxHamburgerMenu
            onClick={() => {
              dispatchAction({ type: "TOGGLE" });
            }}
          />
        </i>
        <Link to={"/"}>
          <i className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </i>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        {/* search icons, input*/}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchTerm !== "") {
              handleSeatch();
            }
          }}
        >
          <div className="flex items-center h-10 ">
            <div className="flex gap-2 items-center rounded-full border overflow-hidden">
               {/* search icons*/}
              <i
                className={`bg-white p-2 pr-1 rounded-l-full -z-10 ${
                  !searchIcon ? "hidden" : ""
                }`}
              >
                <AiOutlineSearch className="text-2xl" />
              </i>
               {/* input*/}
              <input
                type="text"
                className="outline-none lg:w-96 border-none ml-2"
                value={searchTerm}
                onFocus={() => setSearchIcon(true)}
                onBlur={() => setSearchIcon(false)}
                onChange={(e) => {
                  dispatch(changeSearchTerm(e.target.value));
                }}
              />
               {/* close icons*/}
              {searchTerm && (
                <i className="hover:bg-stone-200 rounded-full p-2">
                  <AiOutlineClose
                    className="text-xl cursor-pointer"
                    onClick={() => dispatch(clearSearchTerm())}
                  />
                </i>
              )}

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
