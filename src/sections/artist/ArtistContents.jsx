import { useEffect, useRef, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import MainRightFooter from "../../sections/mainRight/MainRightFooter";
import { VscVerifiedFilled } from "react-icons/vsc";
import PopularArtists from "../mainRight/PopularArtists";
import { artists } from "../../assets/assets";

const ArtistContents = ({ artist }) => {
  const containerRef = useRef();
  const [isScrolled, setIsScrolled] = useState();

  // exclude current selected artist
  const excludeCurrent = artists.filter((i) => i.name != artist.name);

  const checkEdge = () => {
    const { scrollTop } = containerRef.current;
    setIsScrolled(scrollTop > 150);
  };
  useEffect(() => {
    containerRef.current.addEventListener("scroll", checkEdge);
    checkEdge();
  });

  return (
    <div
      className={` relative flex-1 rounded-md min-w-[500px]  overflow-y-hidden flex flex-col gap-4 mr-2 `}
    >
      <div className="absolute z-1 w-full h-[270px] -left-3">
        {artist.coverBg ? (
          <img
            src={artist.coverBg}
            className="size-full object-cover brightness-75"
            alt=""
          />
        ) : (
          <img
            src={artist.cover}
            className="size-full object-cover blur-2xl"
            alt=""
          />
        )}
      </div>{" "}
      <div
        className={` ${
          isScrolled ? "opacity-100" : "opacity-0"
        } absolute w-full h-16 bg-gray-800 shadow-lg shadow-text/5 top-0 -left-3 flex items-center pl-6 gap-4 z-3`}
      >
        {/* scroll header */}
        <div className=" z-4 cursor-pointer size-fit p-2 py-2.5 pl-3 rounded-full bg-green-600 text-black flex-center transition-all duration-200 hover:scale-104 hover:brightness-125">
          <IoIosPlay className="text-2xl" />
        </div>

        <p className="text-2xl font-bold text-text-p">{artist.name}</p>
      </div>
      <div
        ref={containerRef}
        className="bg-secondary flex-1 rounded-md min-w-[460px]  overflow-y-auto [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-600 select-none flex flex-col gap-4"
      >
        {/* header */}
        <div
          className={`flex pb-24 ${
            !artist.coverBg ? "pt-16" : "pt-24"
          } items-end  py-8 z-2 `}
        >
          {!artist.coverBg && (
            <div className="pb-10 pl-4 hover:scale-104 duration-200 size-30 lg:size-40 hidden lg:block rounded-sm overflow-hidden shadow  bg-gradient-to-t from-blue-950 via-transparent to-transparent">
              <img
                src={artist.cover}
                className="size-full object-cover"
                alt=""
              />
            </div>
          )}
          <div className=" font-bold text-sm flex flex-col w-full">
            <div className="mx-6 size-fit flex gap-2 items-center mb-4">
              <VscVerifiedFilled className="rounded-full bg-white text-cyan-600 text-2xl" />
              <p className="text-text-p">Verified Artist</p>
            </div>
            <p className="mx-6 text-5xl md:text-6xl  text-text-p font-bold">
              {artist.name}
            </p>
            <div className="flex gap-1 bg-gradient-to-t from-blue-950 to-transparent pt-4 pb-10 px-6">
              <p className="text-text-p">
                <span className="">{artist.listeners} monthly listeners</span>
              </p>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="z-2 befor bg-secondary -mt-32 h-[600px] shrink-0">
          {/* settings (play, add, option) */}
          <div className="flex bg-gradient-to-t from-transparent to-blue-600/30 items-center gap-6 py-6 px-4">
            <div className=" cursor-pointer size-fit p-2 py-2.5 pl-3 rounded-full bg-green-600 text-black flex-center transition-all duration-200 hover:scale-104 hover:brightness-125">
              <IoIosPlay className="text-3xl" />
            </div>
            <button className="text-sm cursor-pointer hover:scale-104 duration-100 hover:brightness-150 border px-3 py-1 rounded-full text-text-p border-text/50 hover:border-text">
              Follow
            </button>
            <SlOptions className="hover:brightness-150 duration-100 cursor-pointer text-2xl" />
          </div>

          <div className="p-12 bg-secondary">
            <p className="mb-4 text-xl">About</p>
            <div className="relative size-full rounded-lg overflow-hidden hover:scale-101 duration-300">
              <img
                src={artist.cover}
                className="size-full object-cover brightness-40"
                alt=""
              />{" "}
              {artist.score && (
                <div className="absolute top-10 font-medium right-6 bg-cyan-600 rounded-full size-24 flex-col flex-center text-[16px] text-text-p">
                  <p className="text-2xl font-bold">#{artist.score}</p>
                  <p className="text-[13px]">in the world</p>
                </div>
              )}
              <div className="absolute bottom-10 font-medium left-1/2 -translate-x-1/2 w-full px-12 text-[16px] text-text-p">
                <p>
                  <span className="text-lg">{artist.listeners}</span> monthly
                  listeners
                </p>
                <p className="line-clamp-4 mt-3"> {artist.about}</p>
              </div>
            </div>
          </div>
          <div className="-mb-8 pb-10 bg-secondary">
            <PopularArtists
              excludeCurrent={excludeCurrent}
              title_text="Fans also like"
            />
          </div>
          <div className="pb-2 bg-secondary">
            <MainRightFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistContents;
