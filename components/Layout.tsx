import React from "react";
import Image from "next/image";
import notification from "../assets/images/icons/nofication.svg";
import alertBlue from "../assets/images/icons/alertBlue.svg";
import down from "../assets/images/icons/down.svg";
import BackBtn from "./BackBtn";
import useClickRoute from "hooks/useClickRoute";
interface LayoutProps {
  title?: string;
  home?: boolean;
  isWhite: boolean;
  icon?: boolean;
  children: React.ReactNode | undefined;
}

const Layout = ({ home, title, isWhite, icon, children }: LayoutProps) => {
  const onLink = useClickRoute({ link: "/alert" });

  return (
    <div className="w-full flex flex-col py-8 relative space-y-6 overflow-x-hidden">
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
            {isWhite ? <BackBtn type="white" /> : <BackBtn type="blue" />}
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
            <div onClick={onLink} className="hover:cursor-pointer">
              {isWhite ? (
                <Image alt="" src={notification} />
              ) : (
                <Image alt="" src={alertBlue} />
              )}
            </div>
          </div>
        ) : null}
      </div>

      {children}
    </div>
  );
};
export default Layout;
