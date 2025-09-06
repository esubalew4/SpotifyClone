import { useState } from "react";
import { BiLinkExternal, BiMenu, BiX } from "react-icons/bi";
import { BsSpotify } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { HiArchive } from "react-icons/hi";
import { searchCtx } from "../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { query, setQuery } = searchCtx();
  const navigate = useNavigate();
  const [menuBarOpen, setMenuBarOpen] = useState(false);
  return (
    <>
      <header className=" fixed z-50 sm:static justify-between text-text w-full top-0 right-0 left-0 h-12 sm:h-16 bg-neutral flex items-center pl-4 sm:pl-7 pr-2">
        {/* left side */}
        <div className="flex-center">
          <BsSpotify
            onClick={() => {
              navigate("/"), setQuery("");
            }}
            title="Spotify"
            className="text-[32px] text-text-p cursor-pointer"
          />
          {/* <p className="sm:hidden ml-2 font-semibold">Spotify</p> */}
          <div
            onClick={() => {
              navigate("/"), setQuery("");
            }}
            title="Home"
            className=" hidden sm:block rounded-full p-3.5 ml-6 mr-2 bg-secondary cursor-pointer hover:scale-105 duration-150 hover:brightness-125 "
          >
            <GrHomeRounded className="text-[22px]" />
          </div>
          <div className="flex-1 ml-2 sm:ml-0 relative max-w-[500px] mr-4 border hover:border-text/30 border-transparent duration-300 rounded-full hover:brightness-125">
            <input
              type="search"
              placeholder="What do you want to play?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-secondary py-2 pr-3 sm:py-3 pl-12 sm:pr-16 rounded-full focus:outline-1 outline-text w-full "
            />
            <CiSearch
              title="Search"
              className="text-3xl absolute top-1/2 -translate-1/2 left-6  cursor-pointer hover:scale-105 duration-150"
            />
            <p className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-12 text-3xl text-text/50">
              |
            </p>
            <HiArchive
              title="Browse"
              className="hidden sm:block text-3xl absolute top-1/2 -translate-1/2 right-0 cursor-pointer hover:scale-105 duration-150"
            />
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* small screen */}

          {menuBarOpen && (
            <div className="hidden sm:block  text-neutral-100 cursor-default fixed top-13 right-2 bg-primary rounded-sm flex-col w-[200px] px-1 py-1 flex-center lg:hidden gap-2 text-[13px] font-bold z-20">
              <div className="hover:bg-tertiary px-3 py-3 rounded-sm flex justify-between w-full group">
                <p className="group-hover:underline">Premium</p>
                <BiLinkExternal className="text-xl text-text-p" />
              </div>
              <div className="hover:bg-tertiary rounded-sm px-3 py-3 flex justify-between w-full group">
                <p className="group-hover:underline">Support</p>
                <BiLinkExternal className="text-xl text-text-p" />
              </div>
              <div className="hover:bg-tertiary px-3 flex justify-between w-full rounded-sm py-3 group">
                <p className="group-hover:underline">Download</p>
                <BiLinkExternal className="text-xl text-text-p" />
              </div>
            </div>
          )}
          {/* largre than 768px */}
          <div
            className={` select-none  ${
              menuBarOpen
                ? "top-0 bottom-0 p-10 sm:p-0 w-full right-0 sm:right-auto "
                : "-right-full"
            } fixed sm:static bg-neutral sm:bg-transparent z-10 flex-col sm:flex-row py-14 flex items-start sm:items-center lg:px-8 gap-4 `}
          >
            {" "}
            <BiX
              onClick={() => setMenuBarOpen(false)}
              className="sm:hidden absolute top-6 right-6 text-3xl ml-3 cursor-pointer bg-primary rounded-lg"
            />
            <div
              className={`flex  z-10 sm:hidden lg:flex-center gap-2 text-[15px] font-bold flex-col sm:flex-row`}
            >
              <p className="cursor-pointer p-hover py-2">Premium</p>
              <p className="cursor-pointer p-hover py-2">Support</p>
              <p className="cursor-pointer p-hover py-2">Download</p>
            </div>
            <p className="text-3xl hidden md:block text-text-p">|</p>
            <div
              onClick={() => navigate("/download")}
              className="flex-center gap-2 p-hover cursor-pointer"
            >
              <FaRegArrowAltCircleDown className="text-lg" />
              <p className="text-nowrap text-[13px] font-bold">Install App</p>
            </div>
            <p
              onClick={() => navigate("/signup")}
              className="text-nowrap text-[13px] font-bold cursor-pointer p-hover py-1"
            >
              Sign up
            </p>
            <p
              onClick={() => navigate("/login")}
              className="text-nowrap text-[16px] hover:brightness-95 bg-text-p text-black px-6 font-bold cursor-pointer p-hover py-3 rounded-full"
            >
              Log in
            </p>
          </div>
          <div className="flex items-center">
            {/* <p className="sm:hidden bg-text-p px-2 py-1 text-xs rounded-full text-black font-medium">
              Open App
            </p> */}
            <BiMenu
              onClick={() => setMenuBarOpen(true)}
              className=" sm:hidden text-3xl ml-3 cursor-pointer hover:bg-primary rounded-lg shrink-0"
            />
          </div>
        </div>
        {menuBarOpen ? (
          <BiX
            onClick={() => setMenuBarOpen(false)}
            className="hidden sm:block lg:hidden text-3xl ml-3 cursor-pointer bg-primary rounded-lg"
          />
        ) : (
          <BiMenu
            onClick={() => setMenuBarOpen(true)}
            className="hidden sm:block lg:hidden text-3xl ml-3 cursor-pointer hover:bg-primary rounded-lg shrink-0"
          />
        )}
      </header>
    </>
  );
};

export default Header;
