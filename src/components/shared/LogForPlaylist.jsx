import React, { useEffect, useRef, useState } from "react";
import { PlaylistLogCtx } from "../../contexts/PlaylistLogContext";
import { useNavigate } from "react-router-dom";

const LogForPlaylist = () => {
  const navigate = useNavigate();
  const { isLogOpen, setIsLogOpen } = PlaylistLogCtx();
  const playlistLogRef = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        playlistLogRef.current &&
        !playlistLogRef.current.contains(event.target)
      ) {
        setIsLogOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div
      ref={playlistLogRef}
      className={`${
        isLogOpen ? "block" : "hidden"
      } absolute w-80 bg-[#62b3f5] text-black -right-80 z-3 top-1/3 -translate-y-1/2 p-4 rounded-lg before:z-3 text-sm space-y-6 before:size-3 before:bg-[#62b3f5] before:absolute before:top-1/2 before:-left-1.5 before:rotate-45`}
    >
      <div className=" space-y-2">
        <p className="font-bold">Create a playlist</p>
        <p>Log in to create and share playlists.</p>
      </div>
      <div className="flex justify-end font-semibold">
        <button
          onClick={() => setIsLogOpen(false)}
          className="hover:scale-x-102 duration-100 cursor-pointer px-4"
        >
          Not now
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-text-p px-3 py-1.5 rounded-full hover:scale-103 cursor-pointer duration-100 hover:brightness-90"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default LogForPlaylist;
