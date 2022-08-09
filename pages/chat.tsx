import Header from "components/Header";
import React from "react";
import Image from "next/image";
import sendWhite from "../assets/images/icons/sendWhite.svg";

const chat = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full px-8  bg-lightGray pt-20 flex flex-col relative">
        <Header title="" home={false} isWhite={false} icon={false} />
        <div className="mb-4 border-b-[1px] border-gray flex items-end justify-end">
          <span className="text-[12px] text-gray font-sdg-l mr-2 mb-[2px]">
            잘생김 약국
          </span>
          <span className="text-[16px] text-navy font-sdg-b mr-2">
            차은우 약사
          </span>
          <div className="w-[51px] h-[51px] rounded-full border-white border-[3px] bg-gray shadow-md mb-2"></div>
        </div>
        <div className="bg-lightBlue rounded-[27px] px-6 py-3 relative max-w-full">
          <span className="text-[12px] text-navy font-sdg-m">
            약사님 잘생겼어요
          </span>
          <div className="w-[20px] h-[30px] absolute right-0 bottom-[-20px] rounded-tr-full shadow-chatBlue" />
        </div>
        <div className="bg-white rounded-[27px] px-6 py-3 my-4 relative max-w-full">
          <span className="text-[12px] text-black font-sdg-m">감사합니다</span>
          <div className="w-[20px] h-[30px] absolute left-0 bottom-[-20px] rounded-tl-full shadow-chatWhite" />
        </div>
      </div>
      <div className="w-full h-[60px] sticky bottom-[0px] flex justify-evenly items-center bg-[#F7FAFF] z-40">
        <div className="w-[40px] h-[40px] rounded-full bg-white shadow-md flex items-center justify-center hover:cursor-pointer hover:shadow-lg">
          <span className="text-[12px] text-gray font-sdg-b">종료</span>
        </div>
        <input
          type="text"
          className="w-[60%] h-[65%] rounded-full border-2 border-gray shadow-md px-3 placeholder:text-gray placeholder:font-sdg-b font-sdg-m"
          placeholder="TEXT"
        />
        <div className="w-[40px] h-[40px] rounded-full bg-gray shadow-md flex items-center justify-center hover:cursor-pointer hover:shadow-lg">
          <Image alt="" src={sendWhite} />
        </div>
      </div>
    </div>
  );
};

export default chat;
