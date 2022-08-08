import React from "react";
import Image from "next/image";
import fullHeart from "../../assets/images/icons/fullHeart.svg";

const ProductCard = ({
  title,
  keyword1,
  keyword2,
}: {
  title: string;
  keyword1: string;
  keyword2: string;
}) => {
  return (
    <div className="w-[131px] h-[155px] rounded-[15px] bg-gray shadow-lg flex flex-col">
      <div className="w-full h-1/4 flex justify-end px-2">
        <Image alt="" src={fullHeart} />
      </div>
      <div className="w-full h-3/4 bg-home-popularPick-card rounded-[15px] flex flex-col items-center justify-end">
        <span className="w-full flex justify-start px-4 text-[15px] font-sdg-b">
          {title}
        </span>
        <div className="flex space-x-1 pb-2 ml-2">
          <div className="pt-[4px] px-[10px] bg-navy text-white font-sdg-m flex rounded-[29px] text-[12px]">
            {keyword1}
          </div>
          <div className="pt-[4px] px-[10px] bg-navy text-white font-sdg-m flex rounded-[29px] text-[12px]">
            {keyword2}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
