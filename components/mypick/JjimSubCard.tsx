import { FC } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";

const JjimSubCard = () => {
  return (
    <div className=" relative w-full p-2 border-box ">
      <div className="flex items-center justify-start">
        <div className="w-[51px] m-4 h-[51px] shadow-md rounded-full bg-blue1 flex justify-center items-center">
          d
        </div>
        <div className="flex flex-col justify-start w-[25%]">
          <span className="font-bold text-[16px]">한성준 약사</span>
        </div>
        <div className="flex  flex-col justify-between  w-[45%]">
          <span className="font-bold text-[12px]">애옹애옹약국</span>
        </div>
        <div className="h-[60px] flex item-center">
          <Image alt="" src={fullHeart} />
        </div>
      </div>
    </div>
  );
};

export default JjimSubCard;
