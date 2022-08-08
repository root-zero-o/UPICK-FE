import React from "react";
import Image from "next/image";
import shopIcon from "../assets/images/icons/shopIcon.svg";
import notification from "../assets/images/icons/nofication.svg";
import down from "../assets/images/icons/down.svg";
import BackBtn from "./BackBtn";

const Header = ({
  home,
  title,
  isWhite,
}: {
  home: boolean;
  title?: string;
  isWhite: boolean;
}) => {
  return (
    <div className="w-full  absolute top-[8%] px-6 flex items-center justify-between">
      {home ? (
        <div className="w-[42%] h-full flex items-center ">
          <span className="text-white text-[18px] font-sdg-m">
            애옹애옹약국
          </span>
          <Image alt="" src={down} />
        </div>
      ) : (
        <div className="w-[42%] h-full flex items-center ">
          <BackBtn isWhite={isWhite} />
          {isWhite ? (
            <span className="text-white font-sdg-b text-[23px] ml-6">
              {title}
            </span>
          ) : (
            <span className="text-navy font-sdg-b text-[23px] ml-6">
              {title}
            </span>
          )}
        </div>
      )}

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
