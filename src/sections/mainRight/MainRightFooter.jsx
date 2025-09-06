import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AboutModalCtx } from "../../contexts/AboutModalContext";

const MainRightFooter = () => {
  const { setIsPoped } = AboutModalCtx();
  return (
    <div className="select-text  sm:mb-0">
      <div className="w-[95%] mx-auto mt-8 mb-10  h-0.5 bg-text/30"></div>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-4">
        <div>
          <p className="text-text-p cursor-text text-sm my-1.5">Company</p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            About
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Jobs
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            For the Record
          </p>
        </div>
        <div>
          <p className="text-text-p cursor-text text-sm my-1.5">Communities</p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            For Artists
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Developers
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Advertising
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Investors
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Vendors
          </p>
        </div>
        <div className="text-sm">
          <p className="text-text-p cursor-text my-1.5">Useful Links</p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Support
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Free Mobile App
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Popular by Country
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Import your music
          </p>
        </div>
        <div className=" text-sm">
          <p className="text-text-p cursor-text my-1.5">Spotify Plans</p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Premium Individual
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Premium Duo
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Premium Family
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Premium Students
          </p>
          <p className="hover:underline cursor-pointer py-1 hover:text-text-p">
            Spotify Free
          </p>
        </div>
        <div className="flex text-xl gap-4">
          <div className="bg-primary size-fit p-2 hover:brightness-150 duration-150 rounded-full">
            <BsInstagram />
          </div>
          <div className="bg-primary size-fit p-2 hover:brightness-150 duration-150 rounded-full">
            <FaTwitter />
          </div>
          <div className="bg-primary size-fit p-2 hover:brightness-150 duration-150 rounded-full">
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto my-10 h-0.5 bg-text/30"></div>
      <p className="text-sm mt-2 ml-4 mb-8">
        &copy; 2025 Esubalew Hussen ·{" "}
        <span
          onClick={() => setIsPoped(true)}
          className="underline cursor-pointer hover:brightness-150 duration-100"
        >
          About
        </span>
      </p>
    </div>
  );
};

export default MainRightFooter;
