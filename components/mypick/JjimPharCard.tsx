import { FC } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";

const JjimPharCard = () => {
  return (
    <>
      <div className="mb-[16px] flex flex-col relative w-full p-2 border-box border-[2px] rounded-xl border-coolgray2">
        <div className="mb-[7.5px] flex items-center justify-start">
          <div className="flex flex-col justify-start w-[25%]">
            <span className="font-bold text-[14px]">한성준 약사</span>
          </div>
          <div className="flex  flex-col justify-between  w-[45%]">
            <span className="font-bold text-[10px]">애옹애옹약국</span>
          </div>
        </div>
        <div className="flex item-center w-[100%] justify-between">
          <div className="flex flex-col justify-start ">
            <span className="font-bold text-[16px]">
              무더위, 에너지가 없다면?
            </span>
          </div>
          <div className="flex item-center">
            <Image alt="" src={fullHeart} />
          </div>
        </div>
        <div>
          <span className="text-coolgray4 text-[12px]">
            무더위로 인해 체력이 많이 떨어지는 날에는 보양식들을 많이 찾는데요,
            비타민계에서 보양식에 해당하는 것은 바로 비타민 C입니다. 비타민 C는
            우리몸에 필요한 필수 영양소로
          </span>
        </div>
      </div>
    </>
  );
};

export default JjimPharCard;
