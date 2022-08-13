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
  icon,
}: {
  home: boolean;
  title?: string;
  isWhite: boolean;
  icon: boolean;
}) => {
  return (
    <div className="w-full px-7 absolute top-[3%] flex items-center justify-between z-40">
      {home ? (
        <div className="w-[80%] h-full flex items-center ">
          <h4 className="text-white text-lg font-light">
            여덟글자여덟글자약국
          </h4>
          <Image alt="" src={down} />
        </div>
      ) : (
        <div className="w-[70%] h-full flex items-center ">
          <BackBtn isWhite={isWhite} />
          {isWhite ? (
            <h2 className="text-white ml-6 drop-shadow-sm">{title}</h2>
          ) : (
            <h2 className="ml-6 drop-shadow-sm">{title}</h2>
          )}
        </div>
      )}
      {icon ? (
        <div className="w-[31%]  flex justify-evenly items-center">
          <div className="flex items-center h-[50px] mr-[-5px] relative">
            <Image alt="" src={shopIcon} />
            <div className="w-[14px] h-[14px] bg-blue1 rounded-full absolute right-[32%] top-[5%] flex items-center justify-center px-[4px] pt-[2px]">
              <span className="text-white text-[10px] font-sdg-l">2</span>
            </div>
          </div>
          <div>
            <Image alt="" src={notification} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Header;
