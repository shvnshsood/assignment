import React from "react";
import icon from "../assets/icon.png";

const Topbar = () => {
  return (
    <>
      <div className="flex sticky top-0  bg-white flex-row w-full h-[107px] p-10 justify-between mt-0 ml-1 mb-1">
        <div className="">
          <button
            type="button"
            class="text-white bg-[#4375FB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Complete Profile
          </button>
        </div>
        <div>
          <img src={icon} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Topbar;
