import { FC } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";
import Router from "next/router";

interface IProps {
  name: string;
  at: string;
  contents: string;
  title: string;
  id: number;
}
const JjimPharCard: FC<IProps> = ({ name, at, contents, title, id }) => {
  const goItem = () => {
    Router.push(`/article/detail/${id}`);
  };

  return (
    <>
      <div
        onClick={goItem}
        className="mb-[16px] flex flex-col relative w-full p-2 border-box border-[2px] rounded-xl border-coolgray2"
      >
        <div className="mb-[7.5px] flex items-center justify-start">
          <div className="flex flex-col justify-start w-[25%]">
            <span className="font-bold text-[14px]">{name} 약사</span>
          </div>
          <div className="flex  flex-col justify-between  w-[45%]">
            <span className="font-bold text-[10px]">{at}약국</span>
          </div>
        </div>
        <div className="flex item-center w-[100%] justify-between">
          <div className="flex flex-col justify-start ">
            <span className="font-bold text-[16px]">{title}</span>
          </div>
          <div className="flex item-center">
            <Image alt="" src={fullHeart} />
          </div>
        </div>
        <div>
          <span className="text-coolgray4 text-[12px]">{contents}</span>
        </div>
      </div>
    </>
  );
};

export default JjimPharCard;
