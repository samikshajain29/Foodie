import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

function Nav() {
  const { userData } = useSelector((state) => state.user);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="w-full h-20 flex items-center justify-between md:justify-center gap-7.5 px-5 fixed top-0 z-9999 bg-[#fff9f6] overflow-visible">
      <h1 className="text-3xl font-bold mb-2 text-[#ff4d2d]">Foodie</h1>
      <div className="md:w-[60%] lg:w-[40%] h-17.5 bg-white shadow-xl rounded-lg items-center gap-5 hidden md:flex">
        <div className="flex items-center w-[30%] overflow-hidden gap-2.5 px-2.5 border-r-2 border-gray-400">
          <FaLocationDot size={25} className="text-[#ff4d2d]" />
          <div className="w-[80%] truncate text-gray-600">Arrah</div>
        </div>
        <div className="w-[80%] flex items-center gap-2.5">
          <IoIosSearch size={25} className="text-[#ff4d2d]" />
          <input
            type="text"
            placeholder="search delicious food..."
            className="px-2.5 text-gray-700 outline-0 w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IoIosSearch size={25} className="text-[#ff4d2d] md:hidden" />
        <div className="relative cursor-pointer">
          <FiShoppingCart size={25} className="text-[#ff4d2d]" />
          <span className="absolute -right-2.25 -top-3 text-[#ff4d2d]">0</span>
        </div>
        <button className="hidden md:block px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] text-sm font-medium">
          My Orders
        </button>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff4d2d] text-white text-[18px] shadow-xl font-semibold cursor-pointer"
          onClick={() => setShowInfo((prev) => !prev)}
        >
          {userData?.fullName?.slice(0, 1)}
        </div>
        {showInfo && (
          <div className="fixed top-20 right-2.5 md:right-[10%] lg:right-[25%] w-45 bg-white shadow-2xl rounded-xl p-5 flex flex-col gap-2.5 z-9999">
            <div className="text-[17px] font-semibold">{userData.fullName}</div>
            <div className="md:hidden text-[#ff4d2d] font-semibold cursor-pointer">
              My Orders
            </div>
            <div className="text-[#ff4d2d] font-semibold cursor-pointer">
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
