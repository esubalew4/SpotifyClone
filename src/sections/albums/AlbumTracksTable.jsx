import React, { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoPlay, IoTimeOutline } from "react-icons/io5";
import { songs } from "../../assets/assets";
import { SlOptions } from "react-icons/sl";
import { FiPlusCircle } from "react-icons/fi";
import Explicit from "../../components/shared/Explicit";
import { useNavigate } from "react-router-dom";
import LogForPlay from "../../components/shared/LogForPlay";

const AlbumTracksTable = ({
  isTop10,
  playlist = false,
  items = albumTracks,
}) => {
  const navigate = useNavigate();
  const [idContainer, setIdContainer] = useState(null);
  const [isLogOpened, setIsLogOpened] = useState(false);
  const isClicked = (track) => {
    setIdContainer(track.id);
  };
  const contRef = useRef();
  useEffect(() => {
    const handleClose = (e) => {
      if (contRef.current && !contRef.current.contains(e.target)) {
        setIsLogOpened(false);
      }
    };
    window.addEventListener("mousedown", handleClose);
    return () => window.removeEventListener("mousedown", handleClose);
  }, []);
  return (
    <div>
      {isLogOpened && (
        <div className="fixed inset-0 flex-center bg-neutral-950/97 z-10 p-0 sm:p-1 flex flex-col gap-6 md:pt-10">
          <LogForPlay
            ref={contRef}
            isLogOpened={isLogOpened}
            setIsLogOpened={setIsLogOpened}
          />
          <p
            onClick={() => setIsLogOpened(false)}
            className=" hidden md:block hover:scale-104 font-bold duration-100 hover:brightness-150 cursor-pointer"
          >
            Close
          </p>
        </div>
      )}
      <div className="px-4 sm:pl-8 sm:pr-4">
        <table className="w-full">
          <thead>
            <tr className="group border-b border-b-text/40">
              <th className="py-2 w-10 px-1 text-start">#</th>
              <th className="py-2 px-1 text-start">Title</th>
              {playlist && (
                <>
                  <th className="hidden sm:block group-hover:opacity-100 opacity-0 hover:brightness-150 px-3 ">
                    |
                  </th>
                  <th className=" hidden sm:block py-2 px-1 text-start">
                    {isTop10 ? "Popularity" : "Album"}
                  </th>
                </>
              )}
              <th className="hidden sm:block group-hover:opacity-100 opacity-0 hover:brightness-150 text-start ">
                |
              </th>
              {/* add liked */}
              <th className="hidden sm:block py-2 w-16 px-3 text-start">
                <IoTimeOutline className="text-lg" />
              </th>
              <th className="py-2 group-hover:opacity-100 opacity-0 hover:brightness-150  w-10 px-1 text-start">
                <BiSolidDownArrow className="text-sm" />
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((track, index) => (
              <tr
                onDoubleClick={() => setIsLogOpened(true)}
                onClick={() => isClicked(track)}
                className={`${
                  idContainer === track.id
                    ? "bg-neutral-700"
                    : "hover:bg-primary"
                } group  duration-100`}
                key={track.id}
              >
                <td className="px-2 py-2.5">
                  <span
                    className={`${
                      idContainer === track.id ? "hidden" : "group-hover:hidden"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <IoPlay
                    onClick={() => setIsLogOpened(true)}
                    className={`${
                      idContainer === track.id ? "block text-text-p" : "hidden"
                    } group-hover:block cursor-pointer hover:text-text-p`}
                  />
                </td>
                <td className="px-2 py-2.5">
                  <span className="flex flex-col group-hover:text-text-p w-fit">
                    <span className="hover:underline text-text-p text-sm sm:text-[15px]">
                      {track.title}
                    </span>
                    <span className="hover:underline text-xs sm:text-sm">
                      {track.explicit && <Explicit />}
                      <span
                        className={`${
                          idContainer === track.id ? " text-text-p" : ""
                        }`}
                        onClick={() => navigate(`/artist/${track.artistId}`)}
                      >
                        {track.artist}
                      </span>
                    </span>
                  </span>
                </td>
                {playlist && (
                  <>
                    <td className="hidden sm:block"></td>
                    {isTop10 ? (
                      <td className="hidden sm:block py-2 px-9 text-sm ">
                        {track.popularity}
                      </td>
                    ) : (
                      <td className="hidden sm:block py-2 px-1 text-sm text-start">
                        {track.album.trim().toLowerCase() === "single"
                          ? track.duration
                          : track.album}
                      </td>
                    )}
                  </>
                )}
                <td className="hidden sm:block px-4 w-[60px] py-2.5">
                  <FiPlusCircle
                    className={` ${
                      idContainer === track.id ? "text-text-p block" : "hidden"
                    }  group-hover:block text-lg cursor-pointer hover:text-text-p duration-100 hover:scale-103`}
                  />
                </td>
                <td className="hidden sm:block px-2 py-2.5">
                  {track.duration}
                </td>
                <td className="px-2 py-2.5">
                  <SlOptions
                    className={`text-sm ${
                      idContainer === track.id ? "text-text-p block" : "hidden"
                    } group-hover:block hover:text-text-p duration-100 cursor-pointer`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlbumTracksTable;
