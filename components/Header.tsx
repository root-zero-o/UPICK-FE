import React from "react";
import Image from "next/image";
import shopIcon from "../assets/images/icons/shopIcon.svg";
import notification from "../assets/images/icons/nofication.svg";
import down from "../assets/images/icons/down.svg";

const Header = () => {
  return (
    <div className="w-full h-[50px]  absolute top-[7%] px-6 flex items-center justify-between">
      <div className="w-[40%] h-full flex items-center ">
        <span className="text-white text-[18px] font-sdg-m">애옹애옹약국</span>
        <Image alt="" src={down} />
      </div>
      <div className="w-[38%]  flex justify-evenly items-center">
        <div className="flex items-center h-[50px] mr-[-15px] relative">
          <Image alt="" src={shopIcon} />
          <div className="w-[14px] h-[14px] bg-navy rounded-full absolute right-[32%] top-[5%] flex items-center justify-center px-[4px] pt-[2px]">
            <span className="text-white text-[10px] font-sdg-l">2</span>
          </div>
        </div>
        <div>
          <Image alt="" src={notification} />
        </div>
      </div>
    </div>
  );
};
export default Header;
