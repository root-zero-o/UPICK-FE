import React from "react";
import { SearchInput } from "../components/SearchInput";
import Image from "next/image";
import hiHand from "../assets/images/Hi hand 1.svg";

const home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center relative bg-gradient-to-r from-green to-gradientBlue">
      <div />
      <div className="w-[504px] h-[504px] bg-gradient-to-r from-blue to-gradientGreen rounded-full absolute top-[-260px] left-[-130px] z-10"></div>
      <div className="w-[500px] h-full bg-lightGray absolute top-[200px] z-40 rounded-t-[30px]" />
      <div className="w-[40px] h-[90px] rounded-bl-[60px] absolute top-[110px] left-[-3px] z-30 shadow-whiteLeft"></div>
      <div className="w-[40px] h-[90px]  rounded-br-[60px] absolute top-[110px] right-[-3px] z-30 shadow-whiteRight"></div>
      <div className="absolute top-[70px] left-[150px] z-30 ">
        <Image alt="" src={hiHand} />
      </div>

      <h1 className="z-40 text-white text-lg absolute top-[120px] left-[40px] font-sdg-b">
        홍길동님, 반가워요
      </h1>
      <SearchInput top={168} />
    </div>
  );
};

export default home;
