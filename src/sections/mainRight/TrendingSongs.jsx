import { useRef } from "react";
import { songs } from "../../assets/assets";
import { IoIosPlay } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import NavigationIcon from "../../components/common/NavigationIcon";
import Explicit from "../../components/shared/Explicit";

const TrendingSongs = ({ title_text = "Trending songs", searchedSong }) => {
  const navigate = useNavigate();
  const containerRef = useRef();
  const trending_songs = songs
    .filter((song) => song.tags.includes("trending"))
    .sort((a, b) => b.popularity - a.popularity);

  const items = searchedSong ? searchedSong : trending_songs;

  return (
    <div className=" pt-7 relative bg-gradient-to-b from-primary/50 via-primary/50 to-secondary">
      <NavigationIcon containerRef={containerRef} />
      {/* title */}
      <div className="relative flex justify-between px-8">
        <p className="text-2xl font-medium text-text-p hover:underline cursor-pointer">
          {title_text}
        </p>
        <button
          onClick={() => navigate(`/section/trendings`)}
          className="text-sm hover:underline cursor-pointer"
        >
          Show all
        </button>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-y-hidden px-8 [&::-webkit-scrollbar]:hidden z-1 "
      >
        {items.slice(0, 8).map((track) => (
          <div
            key={track.id}
            onClick={() => navigate(`/song/${track.id}`)}
            className="group flex flex-col p-3 cursor-pointer hover:bg-gradient-to-t from-primary via-primary to-transparent rounded-md duration-150 h-fit max-w-[168px]"
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
            {/* title */}
            <p className="hover:underline text-text-p mt-3 line-clamp-2">
              {track.title}
            </p>
            <Link to={`/artist/${track.artistId}`}>
              <p
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-sm hover:underline line-clamp-2 "
              >
                {track.explicit && <Explicit />} {track.artist}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSongs;
