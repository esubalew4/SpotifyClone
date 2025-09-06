import React, { useEffect, useRef } from "react";
import { AboutModalCtx } from "../contexts/AboutModalContext";
import { FiExternalLink } from "react-icons/fi";

const About = () => {
  const { isPoped, setIsPoped } = AboutModalCtx();
  const contRef = useRef();
  useEffect(() => {
    const handleClick = (ev) => {
      if (contRef.current && !contRef.current.contains(ev.target)) {
        setIsPoped(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <>
      {isPoped && (
        <div className="fixed inset-0 bg-neutral/90 z-50 flex-center">
          {" "}
          <div
            ref={contRef}
            className="bg-primary shadow-lg size-full sm:w-[400px] sm:h-[90vh] flex flex-col px-8 sm:px-6 text-text justify-around sm:rounded-md"
          >
            <div className=" text-sm p-1 mt-4 flex flex-col gap-6 ">
              <p className="text-center text-xl font-medium">
                About This Project
              </p>
              <hr className=" opacity-20" />
              <p>
                This is a Spotify clone built by Esubalew Hussen as a personal
                project to practice frontend development using React.js,
                Tailwind CSS, and Framer Motion.
              </p>
              <p>
                All logos, branding, and music content belong to Spotify. This
                project is for educatipotional purposes only and is not
                affiliated with or endorsed by Spotify.
              </p>
            </div>
            <div className="text-sm">
              Want to see more of my projects? Check out my
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://esubel.vercel.app/"
                className="ml-1 sm:no-underline cursor-pointer underline sm:hover:underline text-text-p"
              >
                portfolio
                <FiExternalLink className="inline-block ml-1" />
              </a>
            </div>
            <p
              onClick={() => setIsPoped(false)}
              className="text-center text-lg cursor-pointer duration-100 w-fit self-center px-3 hover:brightness-150"
            >
              Close
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
