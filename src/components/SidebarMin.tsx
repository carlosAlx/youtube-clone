import React from "react";
import { MdHomeFilled, MdOutlineSlowMotionVideo, MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

export const SidebarMin = () => {
  const iconSideMin =
    "flex flex-col py-4 px-4 hover:bg-stone-100 rounded-xl items-center w-16";
  return (
    <div className="lg:flex flex-col items-center hidden">
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
        <span className="text-[0.55rem] tracking-wider">Subscriptions</span>
      </a>
      <a href="" className={iconSideMin}>
        <i>
          <MdOutlineVideoLibrary className="text-xl" />
        </i>
        <span className="text-[0.55rem] tracking-wider">Library</span>
      </a>
    </div>
  );
};
