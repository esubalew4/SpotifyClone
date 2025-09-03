import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoPlay, IoTimeOutline } from "react-icons/io5";
import { songs } from "../../assets/assets";
import { SlOptions } from "react-icons/sl";
import { FiPlusCircle } from "react-icons/fi";

const AlbumTracksTable = ({
  isTop10,
  playlist = false,
  items = albumTracks,
}) => {
  return (
    <div>
      <div className="pl-8 pr-4">
        <table className="w-full">
          <thead>
            <tr className="group border-b border-b-text/40">
              <th className="py-2 w-10 px-1 text-start">#</th>
              <th className="py-2 px-1 text-start">Title</th>
              <th className=" group-hover:opacity-100 opacity-0 hover:brightness-150 px-3 ">
                |
              </th>
              {playlist && (
                <th className="py-2 px-1 text-start">
                  {isTop10 ? "Popularity" : "Album"}
                </th>
              )}
              <th className=" group-hover:opacity-100 opacity-0 hover:brightness-150 text-start ">
                |
              </th>
              {/* add liked */}
              <th className="py-2 w-16 px-3 text-start">
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
                className={`group hover:bg-primary duration-100`}
                key={track.id}
              >
                <td className="px-2 py-2.5">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <IoPlay className="hidden group-hover:block cursor-pointer hover:text-text-p" />
                </td>
                <td className="px-2 py-2.5">
                  <span className="flex flex-col group-hover:text-text-p w-fit">
                    <span className="hover:underline text-text-p text-[15px]">
                      {track.title}
                    </span>
                    <span className="hover:underline text-sm">
                      {track.artist}
                    </span>
                  </span>
                </td>
                <td></td>
                {playlist && (
                  <>
                    {isTop10 ? (
                      <td className="py-2 px-9 text-sm ">{track.popularity}</td>
                    ) : (
                      <td className="py-2 px-1 text-sm text-start">
                        {track.album.trim().toLowerCase() === "single"
                          ? track.duration
                          : track.album}
                      </td>
                    )}
                  </>
                )}
                <td className="px-4 w-[60px] py-2.5">
                  <FiPlusCircle className="hidden group-hover:block text-lg cursor-pointer hover:text-text-p duration-100 hover:scale-103" />
                </td>
                <td className="px-2 py-2.5">{track.duration}</td>
                <td className="px-2 py-2.5">
                  <SlOptions className="text-sm hidden group-hover:block hover:text-text-p duration-100 cursor-pointer" />
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
