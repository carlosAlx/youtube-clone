import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

const mainLinks = [
  {
    icon: <MdHomeFilled className="text-xl" />,
    name: "Home",
  },
  {
    icon: <FaRegCompass className="text-xl" />,
    name: "Explore",
  },
  {
    icon: <MdOutlineSlowMotionVideo className="text-xl" />,
    name: "Shorts",
  },
  {
    icon: <MdSubscriptions className="text-xl" />,
    name: "Subscriptions",
  },
];

const secondaryLinks = [
  {
    icon: <MdOutlineVideoLibrary className="text-xl" />,
    name: "Library",
  },
  {
    icon: <MdHistory className="text-xl" />,
    name: "History",
  },
  {
    icon: <MdOutlineSmartDisplay className="text-xl" />,
    name: "Your Videos",
  },
  {
    icon: <MdOutlineWatchLater className="text-xl" />,
    name: "Watch Later",
  },
  {
    icon: <MdThumbUpOffAlt className="text-xl" />,
    name: "Liked Videos",
  },
];

const subscriptionLinks = [
  {
    icon: <TbMusic className="text-xl" />,
    name: "Music",
  },
  {
    icon: <MdOutlineSportsVolleyball className="text-xl" />,
    name: "Sport",
  },
  {
    icon: <TbDeviceGamepad2 className="text-xl" />,
    name: "Gaming",
  },
  {
    icon: <GiFilmStrip className="text-xl" />,
    name: "Films",
  },
];

const helpLinks = [
  {
    icon: <MdSettings className="text-xl" />,
    name: "Settings",
  },
  {
    icon: <MdOutlineFlag className="text-xl" />,
    name: "Report history",
  },
  {
    icon: <MdOutlineHelpOutline className="text-xl" />,
    name: "Help",
  },
  {
    icon: <MdOutlineFeedback className="text-xl" />,
    name: "Send feedback",
  },
];

const textLinks = [
  [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creator",
    "Advertise",
    "Developers",
  ],
  [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ],
];
export const Sidebar = () => {
  return (
    <div className="pr-5 overflow-auto pb-8 sidebar max-w-[14%]">
      {/* main link menu */}
      <ul className="flex flex-col border-b-2">
        {mainLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`pl-6 py-3 hover:bg-stone-100 rounded-xl ${
              name === "Home" ? "bg-stone-100" : ""
            }`}
          >
            <a href="" className="flex items-center gap-5">
              <i>{icon}</i>
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      {/* secondary link menu */}
      <ul className="flex flex-col border-b-2">
        {secondaryLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`pl-6 py-3 hover:bg-stone-100 rounded-xl ${
              name === "Home" ? "bg-stone-100" : ""
            }`}
          >
            <a href="" className="flex items-center gap-5">
              <i>{icon}</i>
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      {/* subiscrition link menu */}
      <ul className="flex flex-col border-b-2">
        {subscriptionLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`pl-6 py-3 hover:bg-stone-100 rounded-xl ${
              name === "Home" ? "bg-stone-100" : ""
            }`}
          >
            <a href="" className="flex items-center gap-5">
              <i>{icon}</i>
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      {/* help link menu */}
      <ul className="flex flex-col border-b-2">
        {helpLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`pl-6 py-3 hover:bg-stone-100 rounded-xl ${
              name === "Home" ? "bg-stone-100" : ""
            }`}
          >
            <a href="" className="flex items-center gap-5">
              <i>{icon}</i>
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
        {/* text link menu */}
      <ul className="flex gap-2 flex-wrap text-sm p-4">
        {textLinks[0].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4">
        {textLinks[1].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <span className="px-4 text-sm">&copy;2023 Google LLC</span>
      <br />
      <p className="px-4 pt-4 text-md">This is clone YouTube site</p>
    </div>
  );
};
