import React from "react";
import Image from "next/image";
import fullHeart from "../assets/images/icons/fullHeart.svg";

const TextCard = ({
  title,
  text,
  likes,
}: {
  title: string;
  text: string;
  likes: number;
}) => {
  return (
    <div className="w-full  flex flex-col items-center space-y-2 relative">
      <div className="w-[322px] bg-lightGray rounded-[15px] shadow-md px-6 py-2 relative">
        <div className="w-full py-2 border-b-[1px] border-gray flex justify-between">
          <h2 className="text-[16px] font-sdg-b text-navy ">{title}</h2>
          <Image alt="" src={fullHeart} />
        </div>
        <div className="px-1 pt-2">
          <span className="text-[12px] text-darkGray font-sdg-l leading-5 block">
            {text} ...
          </span>
        </div>
        <div className="w-full flex space-x-4 justify-end">
          <div className="w-[51px] h-[55px] bg-white rounded-[9px] border-[1px] border-[#E6EFF7]"></div>
          <div className="w-[51px] h-[55px] bg-white rounded-[9px] border-[1px] border-[#E6EFF7]"></div>
          <div className="w-[51px] h-[55px] bg-white rounded-[9px] border-[1px] border-[#E6EFF7]"></div>
        </div>
        <div className="w-[54px] h-[54px] rounded-full bg-gray absolute bottom-[-13%] left-[10%]"></div>
      </div>
      <div className="w-full flex justify-end relative items-center pt-4">
        <div className="w-[22.17px] h-[22.17px] bg-gray rounded-full border-2 border-lightGray absolute right-[45%]"></div>
        <div className="w-[22.17px] h-[22.17px] bg-gray rounded-full border-2 border-lightGray absolute right-[38%]"></div>
        <div className="w-[22.17px] h-[22.17px] bg-gray rounded-full border-2 border-lightGray absolute right-[31%] z-40"></div>
        <div className="w-[22.17px] h-[22.17px] bg-gray rounded-full border-2 border-lightGray absolute right-[28%] z-30"></div>
        <div className="w-[22.17px] h-[22.17px] bg-gray rounded-full border-2 border-lightGray absolute right-[25%] z-20"></div>
        <div className="text-[10.35px] text-gray font-sdg-l absolute right-[18%]">
          +{likes}
        </div>
        <div className="w-[29.57px] h-[29.57px] bg-white rounded-full absolute right-[8%]"></div>
      </div>
    </div>
  );
};

export default TextCard;
