import { useEffect, useRef, useState } from "react";
import { FaListUl, FaPlus } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import SpecificArtistSongs from "../../components/common/SpecificArtistSongs";
import SelectedPopular from "../songs/SelectedPopular";
import MainRightFooter from "../mainRight/MainRightFooter";
import AlbumTracksTable from "./AlbumTracksTable";
import { songs } from "../../assets/assets";
import {
  convertToSecond,
  formatDuration,
} from "../../utils/albumTracksDurations";

const AlbumContents = ({ item }) => {
  const albumTracks = songs.filter((t) => t.albumId === item.id);

  const totalSeconds = albumTracks.reduce(
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
      className={` relative flex-1 rounded-md min-w-72  overflow-y-hidden flex flex-col gap-4 sm:mr-2 mt-10 sm:mt-0`}
    >
      {" "}
      <div
        className={` ${
          isScrolled ? "opacity-100" : "opacity-0"
        } absolute w-full h-16 bg-gray-800 shadow-lg shadow-text/5 top-2 sm:top-0 left-0 sm:-left-3 flex items-center px-4 sm:pl-6 gap-4 z-2`}
      >
        {/* scroll header */}{" "}
        <div className=" z-2 cursor-pointer size-fit p-2 py-2.5 pl-3 rounded-full bg-green-600 text-black flex-center transition-all duration-200 hover:scale-104 hover:brightness-125">
          <IoIosPlay className="text-2xl" />
        </div>
        <p className="text-lg sm:text-2xl font-bold text-text-p line-clamp-2">
          {item.title}{" "}
        </p>
      </div>
      <div
        ref={containerRef}
        className="bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto sm:[&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col gap-4"
      >
        {/* header */}{" "}
        <div className="flex gap-6 pb-40 sm:items-end bg-gradient-to-t from-transparent flex-col sm:flex-row  via-gray-800 via-40% to-blue-500 py-10 px-4 sm:px-6">
          {/* image */}
          <div className="self-center hover:scale-104 duration-200 size-30 lg:size-40 sm:hidden lg:block rounded-sm overflow-hidden shadow shrink-0">
            <img src={item.cover} className="size-full object-cover" alt="" />
          </div>
          <div className="font-bold text-sm flex flex-col gap-3">
            <p className="hidden sm:block text-text-p">album</p>
            <p className="text-lg sm:text-5xl md:text-6xl  text-text-p font-bold">
              {item.title}
            </p>
            <div className="flex gap-1 flex-col sm:flex-row">
              {/* small image */}
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full overflow-hidden shadow">
                  <img
                    src={item.cover}
                    className="size-full object-cover"
                    alt=""
                  />
                </div>
                <p className="text-text-p">
                  <span className="hover:underline">{item.artist}</span>
                  <span className="text-text hidden sm:block"> &#xb7;</span>
                </p>
              </div>
              <div className="flex items-center">
                <p>{item.releaseYear} &#xb7;</p>
                <p>
                  {albumTracks.length}{" "}
                  <span>{albumTracks.length <= 1 ? "song" : "songs"},</span>
                </p>
                {totalDuration}
              </div>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="bg-secondary/30 -mt-32 h-[600px] shrink-0">
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

          <AlbumTracksTable items={albumTracks} />
          <SelectedPopular item={item} />
          <div className="pb-20">
            <MainRightFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumContents;
