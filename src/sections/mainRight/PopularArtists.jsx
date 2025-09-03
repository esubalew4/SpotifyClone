import { useRef } from "react";
import { artists, songs } from "../../assets/assets";
import NavigationIcon from "../../components/common/NavigationIcon";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const PopularArtists = ({
  title_text = "Popular artists",
  excludeCurrent = artists,
  searchedSong,
}) => {
  const sortedByPopularity = [...excludeCurrent].sort(
    (a, b) => b.popularity - a.popularity
  );
  const items = searchedSong
    ? Array.isArray(searchedSong)
      ? searchedSong
      : [searchedSong]
    : sortedByPopularity;

  const containerRef = useRef();
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
        {items.map((item) => (
          <Link key={item.id} to={`/artist/${item.id}`}>
            <div className="group flex flex-col p-4 cursor-pointer hover:bg-primary rounded-md duration-150 h-fit">
              {/*cover box */}
              <div className=" relative size-36 rounded-full">
                <img
                  src={item.cover}
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
              <p className="hover:underline text-text-p mt-3">{item.name}</p>
              <p className="text-sm tracking-wider">Artist</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
