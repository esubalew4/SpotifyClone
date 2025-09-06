import React from "react";
import MainLeft from "../MainLeft";
import { artists, songs } from "../../assets/assets";
import { IoIosPlay } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Explicit from "../../components/shared/Explicit";

const ArtistsSection = () => {
  const navigate = useNavigate();
  const Popular_artists = artists.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className=" text-text flex gap-2 flex-1 min-h-[430px]">
      <MainLeft />
      <div
        className={`py-20 sm:py-0 sm:mr-2 bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto overflow-x-hidden sm:[&::-webkit-scrollbar]:w-3 sm:[&::-webkit-scrollbar-track]:bg-transparent sm:[&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col p-8 sm:p-8 gap-4`}
      >
        <p className="text-lg sm:text-4xl font-bold ">Popular Artists</p>
        <div className="flex flex-wrap gap-1">
          {Popular_artists.map((artist) => (
            <Link key={artist.id} to={`/artist/${artist.id}`}>
              <div className="group flex flex-col p-3 cursor-pointer max-w-40 sm:max-w-[168px] hover:bg-primary rounded-md duration-150 h-fit">
                {/*cover box */}
                <div className=" relative size-[135px] sm:size-36 rounded-full">
                  <img
                    src={artist.cover}
                    className="size-full object-cover rounded-full"
                    alt=""
                  />
                  <div
                    className="absolute right-2 bottom-2 p-2 py-2.5 pl-3 rounded-full bg-green-600 text-black flex-center opacity-0 translate-y-2
           group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-200 hover:scale-104 hover:brightness-125"
                  >
                    <IoIosPlay className="text-3xl" />
                  </div>
                </div>
                {/* title */}
                <p className="hover:underline text-text-p text-sm sm:text-[16px] line-clamp-2 mt-3">
                  {artist.name}
                </p>
                <p className="hidden sm:block text-sm tracking-wider">Artist</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsSection;
