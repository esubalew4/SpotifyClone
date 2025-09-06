import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const Top10Populars = () => {
  return (
    <Link to="/playlist/top10">
      <div className="group flex flex-col p-3 cursor-pointer hover:bg-primary rounded-md duration-150 h-fit max-w-28 sm:max-w-[168px]">
        {/*cover box */}
        <div className=" relative size-24 sm:size-36 rounded-md overflow-hidden">
          <img
            src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
            className="size-full object-cover"
            alt="cover"
          />
          <div
            className="absolute right-2 bottom-2 p-2 py-2.5 pl-3 rounded-full bg-green-600 text-black flex-center opacity-0 translate-y-2
             group-hover:opacity-100 group-hover:translate-y-0
             transition-all duration-200 hover:scale-104 hover:brightness-125"
          >
            <IoIosPlay className="text-3xl" />
          </div>
        </div>

        <p className="text-sm line-clamp-2 mt-3">
          Your weekly update of the most played tracks right now - Global.
        </p>
      </div>
    </Link>
  );
};

export default Top10Populars;
