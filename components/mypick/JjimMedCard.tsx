import { FC } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";

interface IProps {
  src: string;
  name: string;
}

const JjimMedCard: FC<IProps> = ({ src, name }) => {
  return (
    <div className="mb-4 relative w-full border-[1px] p-3 border-box border-coolgray3 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="w-[48px] h-[60px] shadow-md rounded-[13px] bg-blue1 flex justify-center items-center">
          d
        </div>
        <div className="flex flex-col justify-between w-[75%]">
          <div className="flex  h-[60px] flex-col justify-between w-[100%]">
            <span className="mt-2 font-bold text-[12px]">{name}</span>
          </div>
          {/* <div className="flex items-center">
            <div className="flex items-center">
              <span className="font-black text-[24px]">12,600</span>
              <span className="ml-1 font-medium text-[20px]">원</span>
            </div>
            <div className="ml-3 bg-coolgray2 rounded-full flex items-center py-[2px] px-[6px] text-xs">
              <div className="bg-yellow1 rounded-full mt-[1px] w-[13px] h-[13px] mr-1.5"></div>
              <span className="font-bold">1,200P 적립</span>
            </div>
          </div> */}
        </div>
        <div className="h-[60px] flex item-center">
          <Image alt="" src={fullHeart} />
        </div>
      </div>
    </div>
  );
};

export default JjimMedCard;
