import React, { useEffect, useState } from "react";
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
  myPick?: boolean;
}

const Layout = ({
  home,
  title,
  isWhite,
  icon,
  children,
  myPick,
}: LayoutProps) => {
  const onLink = useClickRoute({ link: "/alert" });
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("authorization");
    if (token) return setIsLogin(true);
  }, []);
  return (
    <div className="w-full flex flex-col py-8 relative space-y-6 overflow-x-hidden">
      <div className="w-full flex items-center justify-between px-6 z-40">
        {home ? (
          <div className="flex items-center w-[80%]">
            {/* 로그인 안되있다는거 알려주는 알림text */}
            {isLogin ? (
              <h4 className="text-white text-lg font-light">애옹쓰약국</h4>
            ) : (
              <h4 className="text-white text-lg font-light">
                로그인하면 이용할 수 있어요
              </h4>
            )}
            <Image alt="" src={down} />
          </div>
        ) : (
          <div className="flex items-center">
            {isWhite ? (
              <BackBtn type="white" />
            ) : (
              <BackBtn type="blue" myPick={myPick} />
            )}
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
