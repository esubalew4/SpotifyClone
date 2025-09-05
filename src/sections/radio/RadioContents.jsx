import { useEffect, useRef, useState } from "react";
import { songs } from "../../assets/assets";
import { IoIosPlay } from "react-icons/io";
import { FaListUl, FaPlus } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import MainRightFooter from "../mainRight/MainRightFooter";
import AlbumTracksTable from "../albums/AlbumTracksTable";
import {
  convertToSecond,
  formatDuration,
} from "../../utils/albumTracksDurations";
import { useLocation } from "react-router-dom";
import { getRadio } from "../../hooks/getRadio";

const RadioContents = ({ radio: ir }) => {
  const location = useLocation();
  const isTop10 = location.pathname.includes("top10");

  const radio = getRadio(isTop10 ? "top10" : ir.id, ir);

  const normalizeRadio = (rd) => {
    return rd
      .toLowerCase()
      .split(" ")
      .map((a) => a.trim())
      .filter(Boolean);
  };
  const radioN = normalizeRadio(radio.genres.join(" "));

  const collections = radio.songs
    ? radio.songs
    : songs.filter((song) => {
        const normalizedSong = normalizeRadio(song.genre);
        const hasCommon = radioN.some((a) => normalizedSong.includes(a));
        return hasCommon;
      });

  const totalSeconds = collections.reduce(
    (acc, track) => acc + convertToSecond(track.duration),
    0
  );
  const totalDuration = formatDuration(totalSeconds);

  const containerRef = useRef();
  const [isScrolled, setIsScrolled] = useState();

  const checkEdge = () => {
    const { scrollTop } = containerRef.current;
    setIsScrolled(scrollTop > 100);
  };
  useEffect(() => {
    containerRef.current.addEventListener("scroll", checkEdge);
    checkEdge();
  });

  return (
    <div
      className={` relative flex-1 rounded-md min-w-72  overflow-y-hidden flex flex-col gap-4 mr-2`}
    >
      {" "}
      <div
        className={` ${
          isScrolled ? "opacity-100" : "opacity-0"
        } absolute w-full h-16 bg-gray-800 shadow-lg shadow-text/5 top-0 -left-3 flex items-center pl-6 gap-4 z-3`}
      >
        {/* scroll header */}{" "}
        <div className=" z-2 cursor-pointer size-fit p-2 py-2.5 pl-3 rounded-full bg-green-600 text-black flex-center transition-all duration-200 hover:scale-104 hover:brightness-125">
          <IoIosPlay className="text-2xl" />
        </div>
        <p className="text-2xl font-bold text-text-p">{radio.title}</p>
      </div>
      <div
        ref={containerRef}
        className="bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col gap-4"
      >
        {/* header */}{" "}
        <div className="flex gap-6 pb-32 items-end relative py-6 lg:pt-12 lg:pb-36 px-6">
          <div className="z-1 w-full h-[120%] absolute left-0 shadow">
            <img
              src={radio.cover}
              className="size-full blur-2xl brightness-50 object-cover object-top"
              alt=""
            />
          </div>
          {/* image */}
          <div className="z-2 hover:scale-104 duration-200 min-w-32 size-32 rounded-sm overflow-hidden shadow">
            <img src={radio.cover} className="size-full object-cover" alt="" />
          </div>
          <div className="z-2 font-medium text-sm flex flex-col gap-1">
            <p className="text-text-p">Poblic Playlist</p>
            <p className="text-2xl lg:text-5xl  text-text-p font-bold">
              {radio.title}
            </p>
            <p className="text-sm hidden lg:block  font-bold">
              With {radio.artists.join(", ")}
            </p>
            <div className="flex gap-1">
              {/* small image */}
              <div className="size-6 rounded-full overflow-hidden shadow">
                <img
                  src="/spotify.svg"
                  className="size-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-text-p flex items-center gap-1">
                <span className="hover:underline cursor-pointer">Spotify</span>
                <span className="text-text hidden lg:block"> &#xb7;</span>
              </p>
              <p className="hidden lg:block">{radio.saves} saves &#xb7;</p>
              <p className="space-x-1 hidden lg:block">
                <span>{collections.length}</span>
                <span>{collections.length <= 1 ? "song" : "songs"},</span>
              </p>
              <span className="hidden lg:block">about {totalDuration}</span>
            </div>
            <p className="hover:underline cursor-pointer">
              About recommendations and the impact of promotion
            </p>
          </div>
        </div>
        {/* main */}
        <div className="z-2 bg-secondary/30 -mt-32 h-[600px] shrink-0">
          {/* settings (play, add, option) */}
          <div className="flex justify-between items-center pr-6">
            <div className="flex items-center gap-6 py-6 px-4">
              <div className=" cursor-pointer size-fit p-2 py-2.5 pl-3 rounded-full bg-green-600 text-black flex-center transition-all duration-200 hover:scale-104 hover:brightness-125">
                <IoIosPlay className="text-3xl" />
              </div>
              <div className="cursor-pointer border-2 hover:brightness-150 duration-100 size-fit p-1 rounded-full">
                <FaPlus className="" />
              </div>
              <SlOptions className="hover:brightness-150 duration-100 cursor-pointer text-2xl" />
            </div>
            <div className="hover:brightness-150 duration-100 flex-center gap-2 cursor-pointer text-[16px]">
              <p>List</p>
              <FaListUl />
            </div>
          </div>
          <AlbumTracksTable
            playlist={true}
            isTop10={isTop10}
            items={collections}
          />
          <div className="pb-2">
            <MainRightFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioContents;
