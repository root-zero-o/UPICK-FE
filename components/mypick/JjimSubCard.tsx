import { FC } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";
import badge from "../../assets/images/icons/badge.svg";
import Router from "next/router";

interface IProps {
  name: string;
  at: string;
  src: string;
  id: number;
}
const JjimSubCard: FC<IProps> = ({ name, at, src, id }) => {
  const goItem = () => {
    Router.push(`/neighborhood/detail/${id}`);
  };

  return (
    <div onClick={goItem} className=" relative w-full p-2 border-box ">
      <div className="flex items-center justify-start">
        <div className=" relative w-[51px] m-4 h-[51px] shadow-md rounded-full bg-blue1 flex justify-center items-center">
          <Image
            src={src}
            alt=""
            width={`51px`}
            height={`51px`}
            unoptimized={true}
            className="rounded-full"
          ></Image>
          <div className="absolute bottom-[-20px] right-[-5px]">
            <Image width={"25px"} src={badge} alt=""></Image>
          </div>
        </div>
        <div className="flex flex-col justify-start w-[25%]">
          <span className="font-bold text-[16px]">{name}</span>
        </div>
        <div className="flex  flex-col justify-between  w-[45%]">
          <span className="font-bold text-[12px]">{at}</span>
        </div>
        <div className="h-[60px] flex item-center">
          <Image alt="" src={fullHeart} />
        </div>
      </div>
    </div>
  );
};

export default JjimSubCard;
