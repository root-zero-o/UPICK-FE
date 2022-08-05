import React from "react";
import { SearchInput } from "../components/SearchInput";
import Image from "next/image";
import hiHand from "../assets/images/Hi hand 1.svg";
import HeaderBG from "../components/HeaderBG";

const home = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-lightGray relative">
      <HeaderBG
        fullWidth="100%"
        fullHeight="350px"
        fullTop="-15%"
        innerWidth="504px"
        innerHeight="504px"
        innerTop="-35.21%"
        innerLeft="-32%"
        outerWidth="504px"
        outerHeight="504px"
        outerTop="-28.57%"
        outerLeft="-31.73%"
        showInnerDIv={true}
        showOuterDiv={false}
        rot={150}
        bgFlag={false}
      />
      <h1 className="font-sdg-b z-40 text-white text-[23px] absolute top-[18%] left-[10%]">
        김준호님, 반가워요
      </h1>
      <div className="absolute top-[12%] left-[39%]">
        <Image alt="" src={hiHand} />
      </div>

      <SearchInput top={200} />
    </div>
  );
};

export default home;
