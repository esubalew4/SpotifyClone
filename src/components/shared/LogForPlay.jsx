import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { albums, songs } from "../../assets/assets";

const LogForPlay = ({ ref, setIsLogOpened }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const itemS = songs.find((a) => a.id === id);
  const itemA = albums.find((a) => a.id === id);
  const item = location.pathname.includes("song") ? itemS : itemA;
  return (
    <>
      <div
        ref={ref}
        className="bg-gradient-to-b from-[#4a0f0f] via-[#4a0f0f] to-[#2e2d2d] size-full sm:w-96 md:w-[740px] md:h-[420px] rounded-lg flex flex-col md:flex-row items-center justify-center  md:justify-between gap-4 md:gap-12 md:p-16"
      >
        {" "}
        {/* cover */}
        <div className="size-48 md:size-72 rounded-md overflow-hidden shrink-0 mb-8">
          <img src={item.cover} className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-4 items-center md:mb-6 md:w-full">
          <p className="font-bold text-2xl text-center max-w-96">
            Start listening with a free Spotify account
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-500 font-bold hover:scale-105 duration-75 cursor-pointer text-black px-6 py-3 rounded-full"
          >
            Sign up free
          </button>
          <button className="border border-text/50 font-bold hover:scale-105 hover:brightness-150 hover:border-text/100 duration-75 cursor-pointer px-6 py-3 rounded-full">
            Download app
          </button>
          <p className="text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="underline text-text-p font-medium cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>
        <p
          onClick={() => setIsLogOpened(false)}
          className="md:hidden hover:scale-104 font-bold duration-100 hover:brightness-150 cursor-pointer"
        >
          Close
        </p>
      </div>
    </>
  );
};

export default LogForPlay;
