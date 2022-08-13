import React from "react";
import Image from "next/image";
import fullHeart from "../assets/images/icons/fullHeart.svg";
import useClickRoute from "hooks/useClickRoute";

const TextCard = ({
  title,
  text,
  likes,
  link,
}: {
  title: string;
  text: string;
  likes: number;
  link: string;
}) => {
  const onLink = useClickRoute({ link: link });

  return (
    <div className="w-full  flex flex-col items-center space-y-2 relative">
      <div
        onClick={onLink}
        className="w-[80%] bg-coolgray1 rounded-[15px] shadow-md px-6 py-4 relative hover:shadow-lg hover:cursor-pointer transition-all"
      >
        <div className="w-full py-2 border-b-[1px] border-coolgray3 flex justify-between">
          <h2 className="text-md text-darkblue2 font-bold">{title}</h2>
          <Image alt="" src={fullHeart} />
        </div>
        <div className="pt-2">
          <span className="text-sm text-coolgray4 leading-5 block font-light">
            {text} ...
          </span>
        </div>
        <div className="w-full flex space-x-4 justify-end">
          <div className="w-[51px] h-[55px] bg-white rounded-[9px] border-[1px] border-[#E6EFF7]"></div>
          <div className="w-[51px] h-[55px] bg-white rounded-[9px] border-[1px] border-[#E6EFF7]"></div>
          <div className="w-[51px] h-[55px] bg-white rounded-[9px] border-[1px] border-[#E6EFF7]"></div>
        </div>
        <div className="w-[54px] h-[54px] rounded-full bg-coolgray3 absolute bottom-[-13%] left-[10%]"></div>
      </div>
    </div>
  );
};

export default TextCard;
