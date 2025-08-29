import React from "react";

const Footer = () => {
  return (
    <div className="cursor-pointer py-4 flex items-center justify-between px-4 gap-8 mt-2 h-[75px] bg-gradient-to-l from-indigo-400 via-purple-500 to-pink-400">
      <div className="text-sm text-text-p font-medium">
        <p className="font-bold">Preview of Spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <button className="bg-text-p px-6 py-3 rounded-full font-bold tracking-tight text-nowrap hover:scale-104 cursor-pointer hover:brightness-95 duration-100">
        Sign up free
      </button>
    </div>
  );
};

export default Footer;
