import React from "react";
import { BiPlus } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";

const MainLeft = () => {
  return (
    <div className=" select-none overflow-hidden flex flex-col bg-primary flex-1 max-w-80 rounded-md min-w-64 ml-2">
      {/* library */}
      <div className="flex-1 max-h-18 bg-tertiary flex justify-between items-center px-4 pb-4">
        <p className="cursor-default text-text-p font-bold">Your Library</p>
        <BiPlus
          title="Create playlist or folder"
          className="text-4xl duration-150 text-text/70 hover:bg-secondary rounded-full p-1.5 cursor-pointer"
        />
      </div>
      {/* playlist */}
      <div className="flex-1  bg-tertiary px-2 py-4 cursor-default overflow-y-auto space-y-6 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary ">
        <div className="bg-primary rounded-md p-4 space-y-3">
          <p className="text-sm font-black text-text-p">
            Create your first playlist
          </p>
          <p className="text-xs font-bold text-text-p">
            It's easy, we'll help you
          </p>
          <button className=" mt-2  cursor-pointer bg-white py-2 px-4 text-xs text-black font-bold rounded-full hover:scale-105 duration-75 hover:brightness-95">
            Create playlist
          </button>
        </div>
        <div className="bg-primary rounded-md p-4 space-y-3">
          <p className="text-sm font-black text-text-p">
            Let's find some products to follow
          </p>
          <p className="text-xs font-bold text-text-p">
            We'll keep you updated on new episodes
          </p>
          <button className=" mt-2  cursor-pointer bg-white py-2 px-4 text-xs text-black font-bold rounded-full hover:scale-105 duration-75 hover:brightness-95">
            Browse podcasts
          </button>
        </div>
      </div>
      {/* info */}
      <div className="flex-1 min-h-56 bg-tertiary py-6 px-6">
        <div className="text-[11px] flex gap-4 flex-wrap">
          <p className="cursor-pointer">Legal</p>
          <p className="cursor-pointer">Safety & Privacy Center</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Cookies</p>
          <p className="cursor-pointer">About Ads</p>
          <p className="cursor-pointer">Accessibility</p>
        </div>
        <p className="text-text-p text-xs cursor-pointer hover:underline mt-4 w-fit pr-3">
          Cookies
        </p>
        <button className="mt-7 flex-center gap-2 font-black border border-text px-2.5 py-1 rounded-full cursor-pointer hover:scale-103 duration-75 hover:border-text-p text-text-p">
          <FiGlobe className="text-lg" />
          <span className="text-[13px]">English</span>
        </button>
      </div>
    </div>
  );
};

export default MainLeft;
