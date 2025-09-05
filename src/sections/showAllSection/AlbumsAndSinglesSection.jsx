import React from "react";
import MainLeft from "../MainLeft";
import { albums, artists, songs } from "../../assets/assets";
import { IoIosPlay } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Explicit from "../../components/shared/Explicit";

const AlbumsAndSinglesSection = () => {
  const navigate = useNavigate();
  const singles = songs.filter((a) => a.album.toLowerCase() === "single");
  const uniqueAlbums = Array.from(
    new Set(
      songs.filter((a) => a.album.toLowerCase() != "single").map((b) => b.album)
    )
  ).map((albumName) => {
    return albums.find((a) => a.title === albumName);
  });
  const allCollections = [...singles, ...uniqueAlbums].sort(
    (a, b) => b.popularity - a.popularity
  );

  // TODO: exclude tracks of labum to not included inside this array if album is exist . so only get one album instead of all tracks in one album name
  // const items = searchedSong ? searchedSong : allCollections;

  return (
    <div className=" text-text flex gap-2 flex-1 min-h-[430px]">
      <MainLeft />
      <div
        className={`mr-2 bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col p-8 gap-4`}
      >
        <p className="text-4xl font-bold ">Popular Albums and Singles</p>
        <div className="flex flex-wrap gap-1">
          {allCollections.map((itemc) => {
            const linkTo =
              itemc.type === "single"
                ? `/song/${itemc.id}`
                : `/album/${itemc.id}`;
            return (
              <div
                key={itemc.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" }),
                    navigate(linkTo);
                }}
                className="group flex flex-col p-3 max-w-[168px] cursor-pointer hover:bg-primary rounded-md duration-150 h-fit"
              >
                {/*cover box */}
                <div className=" relative size-36 rounded-md overflow-hidden">
                  <img
                    src={itemc.cover}
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
                {/* title */}
                <p className="hover:underline text-text-p mt-3">
                  {itemc.title}
                </p>
                <Link to={`/artist/${itemc.artistId}`}>
                  <p
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm line-clamp-2 hover:underline"
                  >
                    {itemc.artist}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlbumsAndSinglesSection;
