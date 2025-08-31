import { useEffect, useRef } from "react";
import { Trending_songs } from "../../assets/assets";
import NavigationIcon from "../../components/common/NavigationIcon";
import { FaPlay } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";

const PopularRadio = () => {
  const containerRef = useRef();
  return (
    <div className=" pt-7 relative bg-secondary">
      <NavigationIcon containerRef={containerRef} />
      {/* title */}
      <div className="relative flex justify-between px-8 mb-4">
        <p className="text-2xl font-medium text-text-p hover:underline cursor-pointer">
          Popular radio
        </p>
        <button className="text-sm hover:underline cursor-pointer">
          Show all
        </button>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-y-hidden px-8 [&::-webkit-scrollbar]:hidden z-1 "
      >
        {Trending_songs.map((track) => (
          <div
            className="group flex flex-col p-4 cursor-pointer hover:bg-primary rounded-md duration-150 h-fit"
            key={track.id}
          >
            {/*cover box */}
            <div className=" relative size-36 rounded-md overflow-hidden">
              <img
                src={track.cover}
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
              {track.artists.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRadio;
