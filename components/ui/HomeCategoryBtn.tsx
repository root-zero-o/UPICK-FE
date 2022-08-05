import React from "react";
import Image from "next/image";

const HomeCategoryBtn = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[56px] h-[56px] bg-lightGray rounded-full flex items-center justify-center shadow-home-p-category-btn">
        <Image alt="" src={src} />
      </div>
      <span className="text-[13px] text-gray font-sdg-b mt-[12px]">{text}</span>
    </div>
  );
};

export default HomeCategoryBtn;
