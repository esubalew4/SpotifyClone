import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaApple, FaFacebookF, FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="text-text-p [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-primary [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-2xl  w-full flex-center flex-col  overflow-y-auto pt-24 h-screen bg-tertiary ">
      <div className="flex-center flex-col ">
        <FaSpotify className="text-3xl mb-2 mt-16" />
        <p className="text-4xl mb-6 leading-14  font-bold text-center ">
          Login to Spotify
        </p>
        <div className="w-full space-y-2 border-b border-b-text/30 mb-8">
          {/* google */}
          <div className="cursor-pointer border hover:border-text/100 hover:brightness-200 hover:shadow flex items-center justify-around gap-16 px-8 w-full py-2.5 rounded-3xl border-text/60">
            <FcGoogle className="text-2xl" />{" "}
            <p className="text-[16px] font-bold ">Continue with Google</p>
          </div>
          {/* facebook */}
          <div className="cursor-pointer border hover:border-text/100 justify-around hover:brightness-200 hover:shadow flex items-center gap-16 px-8 w-full py-2.5 rounded-3xl border-text/60">
            <FaFacebookF className="text-[22px] rounded-full pt-1 bg-cyan-600 text-white" />{" "}
            <p className="text-[16px] font-bold ">Continue with Google</p>
          </div>
          {/* apple */}
          <div className="border flex items-center hover:brightness-200 hover:shadow justify-around gap-16 px-8 w-full py-2.5 hover:border-text/100 cursor-pointer rounded-3xl border-text/60 mb-8">
            <FaApple className="text-2xl" />{" "}
            <p className="text-[16px] font-bold ">Continue with Apple</p>
          </div>
        </div>
        <form className="flex flex-col w-full gap-2">
          <p className="text-sm mb-1">Email adress</p>
          <input
            className="border px-2 p-3 w-full rounded-sm border-text/60"
            type="email"
            placeholder="name@domain.com"
          />
          <button
            className="bg-green-500 py-3 my-4 rounded-3xl text-black font-semibold cursor-pointer hover:brightness-110 hover:scale-105 duration-100"
            type="submit"
          >
            Continue
          </button>
        </form>

        <div className="flex-center flex-col gap-3 py-8 text-sm">
          <p>Don't have an account?</p>
          <button
            onClick={() => navigate("/signup")}
            className="font-bold hover:text-green-500 duration-100 px-40 cursor-pointer underline"
          >
            Sign up for Spotify
          </button>
        </div>
        <p className="text-[11px] text-center my-10">
          This site is protected by reCAPTCHA and the Google
          <span className="underline cursor-pointer">
            {" "}
            Privacy Policy
          </span> and{" "}
          <span className="underline cursor-pointer">
            Terms of Service
          </span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default Login;
