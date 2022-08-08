import React from "react";
import Image from "next/image";

const BlurBtn = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="w-[80px] h-[80px] rounded-[13px] bg-lightGray/30 backdrop-blur border-[1px] border-white flex flex-col justify-center items-center">
      <Image alt="" src={src} />
      <span className="text-[12px] font-sdg-b text-navy mt-1">{text}</span>
    </div>
  );
};
export default BlurBtn;
