import { useRef } from "react";
import NavigationIcon from "../../components/common/NavigationIcon";
import { IoIosPlay } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { albums, songs } from "../../assets/assets";

const PopularAlbums = ({
  title_text = "Popular albums and singles",
  searchedSong,
}) => {
  const singles = songs.map((pr) => ({ ...pr, type: "single" }));
  const albumWithType = albums.map((pr) => ({ ...pr, type: "album" }));
  const merged = [...singles, ...albumWithType];
  const allCollections = merged.sort((a, b) => b.popularity - a.popularity);

  const items = searchedSong ? searchedSong : allCollections;
  const containerRef = useRef();
  const navigate = useNavigate();
  return (
    <div className=" pt-7 relative bg-secondary">
      <NavigationIcon containerRef={containerRef} />
      {/* title */}
      <div className="relative flex justify-between px-8 mb-4">
        <p className="text-2xl font-medium text-text-p hover:underline cursor-pointer">
          {title_text}
        </p>
        <button className="text-sm hover:underline cursor-pointer">
          Show all
        </button>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-y-hidden px-8 [&::-webkit-scrollbar]:hidden z-1 "
      >
        {items.map((itemc) => {
          const linkTo =
            itemc.type === "single"
              ? `/song/${itemc.id}`
              : `/album/${itemc.id}`;
          return (
            <div
              key={itemc.id}
              onClick={() => navigate(linkTo)}
              className="group flex flex-col p-4 cursor-pointer hover:bg-primary rounded-md duration-150 h-fit"
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
              <p className="hover:underline text-text-p mt-3">{itemc.title}</p>
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
  );
};

export default PopularAlbums;
