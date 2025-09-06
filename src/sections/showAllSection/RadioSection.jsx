import React from "react";
import MainLeft from "../MainLeft";
import { albums, artists, radios, songs } from "../../assets/assets";
import { IoIosPlay } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Explicit from "../../components/shared/Explicit";

const RadioSection = () => {
  const navigate = useNavigate();
  const fixedRadio = radios.filter((a) => a.id != "top10");
  return (
    <div className=" text-text flex gap-2 flex-1 min-h-[430px]">
      <MainLeft />
      <div
        className={`py-16 sm:py-0 sm:mr-2 bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto overflow-x-hidden sm:[&::-webkit-scrollbar]:w-3 sm:[&::-webkit-scrollbar-track]:bg-transparent sm:[&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col p-8 gap-4`}
      >
        <p className="text-lg sm:text-4xl font-bold ">Popular Radios</p>
        <div className="flex flex-wrap gap-1">
          {fixedRadio.map((item) => (
            <Link key={item.id} to={`/playlist/${item.id}`}>
              <div className="max-w-28 sm:max-w-[168px] group flex flex-col p-3 cursor-pointer hover:bg-primary rounded-md duration-150 h-fit">
                {/*cover box */}
                <div className=" relative size-24 sm:size-36 rounded-md overflow-hidden">
                  <img
                    src={item.cover}
                    className="size-full object-cover"
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

                <p className="text-sm line-clamp-2 mt-3">
                  With {item.artists.join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioSection;
