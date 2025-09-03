import React from "react";
import { FaApple, FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="text-text-p [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-primary [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-2xl  w-full flex-center flex-col  overflow-y-auto pt-20 h-screen bg-tertiary ">
      <div className="flex-center flex-col max-w-[360px]">
        <FaSpotify className="text-3xl mb-3" />
        <p className="text-5xl mb-8 leading-14  font-bold text-center ">
          Sign up to start listening
        </p>
        <form className="flex flex-col w-full">
          <p className="text-sm mb-1">Email adress</p>
          <input
            className="border px-2 p-3 w-full rounded-sm border-text/60"
            type="email"
            placeholder="name@domain.com"
          />
          <button
            className="bg-green-500 py-3 my-4 rounded-3xl text-black font-semibold cursor-pointer hover:brightness-110 duration-100"
            type="submit"
          >
            Next
          </button>
        </form>
        <p className="font-medium mb-4">or</p>
        <div className="w-full space-y-2.5">
          {/* google */}
          <div className="cursor-pointer border hover:border-text/100 hover:brightness-200 hover:shadow flex items-center gap-16 px-8 w-full py-3 rounded-3xl border-text/60">
            <FcGoogle className="text-2xl" />{" "}
            <p className="text-[16px] font-bold ">Sign up with Google</p>
          </div>
          {/* apple */}
          <div className="border flex items-center hover:brightness-200 hover:shadow gap-16 px-8 w-full py-3 hover:border-text/100 cursor-pointer rounded-3xl border-text/60">
            <FaApple className="text-2xl" />{" "}
            <p className="text-[16px] font-bold ">Sign up with Apple</p>
          </div>
        </div>
        <div className="flex-center flex-col gap-3 py-8 text-sm">
          <p>Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="font-black hover:scale-102 duration-100 px-8 cursor-pointer"
          >
            Log in
          </button>
        </div>
        <p className="text-[11px] text-center max-w-[325px] mb-6">
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

export default Signup;
