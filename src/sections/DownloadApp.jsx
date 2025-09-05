import React from "react";
import MainLeft from "./MainLeft";
import { FaSpotify } from "react-icons/fa";
import MainRightFooter from "./mainRight/MainRightFooter";

const DownloadApp = () => {
  return (
    <div className=" text-text flex gap-2 flex-1 min-h-[430px]">
      <MainLeft />
      <div
        className={` bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col gap-4`}
      >
        <div className="text-black bg-gradient-to-b from-[#69b3ab] to-[#c487c2] p-10">
          <div className="bg-gradient-to-t from-[#69b3ab] to-[#c487c2] p-10 pt-20 pb-10">
            <div className="flex items-center gap-1">
              <FaSpotify className="text-3xl" />
              <p className="text-lg font-bold">Spotify</p>
            </div>
            <p className="text-3xl font-bold my-8">
              Download Spotify for Windows
            </p>
            <p className="font-semibold text-lg mb-8">
              Enjoy high-quality audio and offline playback, plus Windows Game
              Bar integration and a friend activity feed that lets you see what
              your friends are listening to in real time.
            </p>
            <img
              src="https://get.microsoft.com/images/en-us%20dark.svg"
              className="w-48 cursor-pointer"
              alt="Microsoft Store"
            />
            <p className="text-xs hover:underline cursor-pointer my-6 w-fit font-semibold">
              Download directly from Spotify
            </p>
            <img
              src="https://open.spotifycdn.com/cdn/images/download-page-image.781553a2.png"
              className="w-[800px] "
              alt="Microsoft Store"
            />
          </div>
        </div>

        <MainRightFooter />
      </div>
    </div>
  );
};

export default DownloadApp;
