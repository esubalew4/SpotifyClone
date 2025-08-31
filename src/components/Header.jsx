import { useState } from "react";
import { BiLinkExternal, BiMenu, BiX } from "react-icons/bi";
import { BsSpotify } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { HiArchive } from "react-icons/hi";

const Header = () => {
  const [menuBarOpen, setMenuBarOpen] = useState(false);
  return (
    <>
      <header className=" min-h-16  justify-between text-text w-full top-0 right-0 left-0 h-16 bg-neutral flex items-center pl-7 pr-2">
        {/* left side */}
        <div className="flex-center">
          <BsSpotify
            title="Spotify"
            className="text-[32px] text-text-p cursor-pointer"
          />
          <div
            title="Home"
            className="rounded-full p-3.5 ml-6 mr-2 bg-secondary cursor-pointer hover:scale-105 duration-150 hover:brightness-125 "
          >
            <GrHomeRounded className="text-[22px]" />
          </div>
          <div className="flex-1 relative lg:min-w-[400px] max-w-[500px] mr-4 border hover:border-text/30 border-transparent duration-300 rounded-full hover:brightness-125">
            <input
              type="search"
              placeholder="What do you want to play?"
              className="flex-1 bg-secondary py-3 pl-12 pr-15 rounded-full focus:outline-1 outline-text w-full "
            />
            <CiSearch
              title="Search"
              className="text-3xl absolute top-1/2 -translate-1/2 left-6  cursor-pointer hover:scale-105 duration-150"
            />
            <p className="absolute top-1/2 -translate-y-1/2 right-12 text-3xl text-text/50">
              |
            </p>
            <HiArchive
              title="Browse"
              className="text-3xl absolute top-1/2 -translate-1/2 right-0 cursor-pointer hover:scale-105 duration-150"
            />
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* small screen */}

          {menuBarOpen && (
            <div className="text-neutral-100 cursor-default fixed top-13 right-2 bg-primary rounded-sm flex-col w-[200px] px-1 py-1 flex-center md:hidden gap-2 text-[13px] font-bold z-1">
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
          <div className="select-none hidden md:flex-center gap-2 text-[15px] font-bold">
            <p className="cursor-pointer p-hover py-2">Premium</p>
            <p className="cursor-pointer p-hover py-2">Support</p>
            <p className="cursor-pointer p-hover py-2">Download</p>
          </div>
          <p className="text-3xl hidden md:block text-text-p">|</p>
          <div className="flex-center gap-2 p-hover cursor-pointer">
            <FaRegArrowAltCircleDown className="text-lg" />
            <p className="text-nowrap md:text-wrap text-[13px] font-bold">
              Install App
            </p>
          </div>
          <p className="text-nowrap md:text-wrap text-[13px] font-bold cursor-pointer p-hover py-1">
            Sign up
          </p>
          <p className="text-nowrap text-[16px] hover:brightness-95 bg-text-p text-black px-6 font-bold cursor-pointer p-hover py-3 rounded-full">
            Log in
          </p>
        </div>
        {menuBarOpen ? (
          <BiX
            onClick={() => setMenuBarOpen(false)}
            className="md:hidden text-3xl ml-3 cursor-pointer bg-primary rounded-lg"
          />
        ) : (
          <BiMenu
            onClick={() => setMenuBarOpen(true)}
            className="md:hidden text-3xl ml-3 cursor-pointer hover:bg-primary rounded-lg shrink-0"
          />
        )}
      </header>
    </>
  );
};

export default Header;
