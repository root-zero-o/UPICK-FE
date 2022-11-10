import React, { useState } from "react";
import { cls } from "../../lib/utils";

import BannerOne from "../../assets/images/banners/Banner_1.png";
import BannerTwo from "../../assets/images/banners/Banner_2.png";
import BannerThree from "../../assets/images/banners/Banner_3.png";
import Image from "next/image";
import useClickRoute from "hooks/useClickRoute";

const AdSlide = () => {
  const [move, setMove] = useState(0);
  const [clicked, setClicked] = useState("first");
  const onLinkBanner1 = useClickRoute({ link: "/article/detail/9" });
  const onLinkBanner2 = useClickRoute({ link: "/" });
  const onLinkBanner3 = () =>
    window.open(
      "https://daisycom.notion.site/Design-Guide-0a594501d9034d76984f35c9fe2f3e13"
    );

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    if (id === "first") {
      setMove(0);
      setClicked("first");
    } else if (id === "second") {
      setMove(-33);
      setClicked("second");
    } else if (id === "third") {
      setMove(-67);
      setClicked("third");
    }
  };
  return (
    <div className="relative h-[130px] pt-2 ">
      <div className="slide transition-transform">
        <div
          onClick={onLinkBanner1}
          className="w-[26%] h-[130px] ml-11 mr-12 rounded-xl relative cursor-pointer"
        >
          <Image src={BannerOne} alt="banner-1" />
        </div>
        <div
          onClick={onLinkBanner2}
          className="w-[26%] h-[130px] mx-12  rounded-xl relative cursor-pointer"
        >
          <Image src={BannerTwo} alt="banner-2" />
        </div>
        <div
          onClick={onLinkBanner3}
          className="w-[26%] h-[130px] mx-12 rounded-xl relative cursor-pointer"
        >
          <Image src={BannerThree} alt="banner-3" />
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] flex space-x-[8px] transition-all">
        <div
          id="first"
          onClick={onClick}
          className={cls(
            "h-[10px] bg-white rounded-full shadow-lg hover:cursor-pointer",
            clicked === "first" ? "w-[20px]" : "w-[10px]"
          )}
        />
        <div
          id="second"
          onClick={onClick}
          className={cls(
            "h-[10px] bg-white rounded-full shadow-lg hover:cursor-pointer",
            clicked === "second" ? "w-[20px]" : "w-[10px]"
          )}
        />
        <div
          id="third"
          onClick={onClick}
          className={cls(
            "h-[10px] bg-white rounded-full shadow-lg hover:cursor-pointer",
            clicked === "third" ? "w-[20px]" : "w-[10px]"
          )}
        />
      </div>
      <style jsx>{`
        .slide {
          display: flex;
          width: 300%;
          transform: translateX(${move}%);
        }
      `}</style>
    </div>
  );
};
export default AdSlide;
