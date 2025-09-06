import { IoIosPlay } from "react-icons/io";
import { songs } from "../../assets/assets";
import { useRef } from "react";
import NavigationIcon from "../../components/common/NavigationIcon";
import { Link } from "react-router-dom";

const SelectedPopular = ({ item }) => {
  const containerRef = useRef();

  const normalizeArtist = (art) => {
    return art
      .toLowerCase()
      .split(" ")
      .map((a) => a.trim())
      .filter(Boolean);
  };
  const itemArtist = normalizeArtist(item.artist);

  const selected_songs = songs
    .filter((song) => {
      const songArtist = normalizeArtist(song.artist);
      const hasCommonChar = songArtist.some((a) => itemArtist.includes(a));

      return hasCommonChar && song.title != item.title;
    })
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className=" pt-7 relative ">
      <NavigationIcon containerRef={containerRef} />
      {/* title */}
      <div className="overflow-x-auto">
        {" "}
        {selected_songs.length > 0 && (
          <div className="relative flex justify-between px-4 sm:px-8 py-4 gap-4 sm:gap-20">
            <p className=" text-lg font-medium text-text-p hover:underline cursor-pointer line-clamp-3">
              Popular Released by {item.artist}
            </p>
            <button className="text-sm hover:underline cursor-pointer text-nowrap">
              Show all
            </button>
          </div>
        )}
        <div
          ref={containerRef}
          className="flex overflow-y-hidden px-2 sm:px-8 [&::-webkit-scrollbar]:hidden z-1 "
        >
          {selected_songs.map((track) => (
            <Link key={track.id} to={`/song/${track.id}`}>
              <div className="group flex flex-col p-2 sm:p-4 cursor-pointer hover:bg-primary rounded-md duration-150 h-fit max-w-40 sm:max-w-44">
                {/*cover box */}
                <div className=" relative size-[135px] sm:size-36 rounded-md overflow-hidden">
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
                {/* title */}
                <p className="hover:underline text-sm sm:text-[16px] line-clamp-2 text-text-p mt-3">
                  {track.title}
                </p>
                <div className="flex items-center gap-1 text-xs sm:text-sm">
                  {" "}
                  <p className=" line-clamp-2">
                    {track.releaseYear} <span className="text-xl">&#xb7;</span>
                  </p>
                  <p>
                    {track.album.toLowerCase().includes("single")
                      ? "single"
                      : "track"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedPopular;
