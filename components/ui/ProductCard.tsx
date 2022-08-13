import React from "react";
import Image from "next/image";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import useClickRoute from "hooks/useClickRoute";

const ProductCard = ({
  title,
  keyword1,
  keyword2,
  link,
}: {
  title: string;
  keyword1: string;
  keyword2: string;
  link: string;
}) => {
  const onLink = useClickRoute({ link });
  return (
    <div
      onClick={onLink}
      className="w-[131px] h-[155px] rounded-[15px] bg-coolgray2 shadow-lg flex flex-col hover:cursor-pointer hover:-translate-y-1 transition-all"
    >
      <div className="w-full h-1/4 flex justify-end px-2">
        <Image alt="" src={fullHeart} />
      </div>
      <div className="w-full h-3/4 bg-home-popularPick-card rounded-[15px] flex flex-col items-center justify-end">
        <span className="w-full flex justify-start px-3 text-[14px] py-1 font-bold text-darkblue1">
          {title}
        </span>
        <div className="flex space-x-1 pb-2 ml-2">
          <div className="py-[2px] px-[10px] bg-darkblue1 text-white flex rounded-[29px] text-sm">
            {keyword1}
          </div>
          <div className="py-[2px] px-[10px] bg-darkblue1 text-white flex rounded-[29px] text-sm">
            {keyword2}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
