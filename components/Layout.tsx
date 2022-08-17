import React from "react";
import Image from "next/image";
import shopIcon from "../assets/images/icons/shopIcon.svg";
import notification from "../assets/images/icons/nofication.svg";
import down from "../assets/images/icons/down.svg";
import BackBtn from "./BackBtn";

interface LayoutProps {
  title?: string;
  home?: boolean;
  isWhite: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

const Layout = ({ home, title, isWhite, icon, children }: LayoutProps) => {
  return (
    <div className="w-full flex flex-col pt-3 relative">
      <div className="w-full flex items-center justify-between px-6 z-40">
        {home ? (
          <div className="flex items-center w-[80%]">
            <h4 className="text-white text-lg font-light">
              여덟글자여덟글자약국
            </h4>
            <Image alt="" src={down} />
          </div>
        ) : (
          <div className="flex items-center">
            <BackBtn isWhite={isWhite} />
            {isWhite ? (
              <h2 className="text-white ml-6 drop-shadow-sm text-2xl mb-2 font-bold">
                {title}
              </h2>
            ) : (
              <h2 className="ml-6 drop-shadow-sm">{title}</h2>
            )}
          </div>
        )}
        {icon ? (
          <div className="flex justify-evenly items-center ">
            <div className="flex items-center relative">
              <div>
                <Image alt="" src={shopIcon} />
              </div>
              <div className="w-[14px] h-[14px] bg-blue1 rounded-full absolute right-[32%] top-[29%] flex items-center justify-center ">
                <span className="text-white text-xs">2</span>
              </div>
            </div>
            <div>
              <Image alt="" src={notification} />
            </div>
          </div>
        ) : (
          <div className="h-[110px]"></div>
        )}
      </div>

      {children}
    </div>
  );
};
export default Layout;
