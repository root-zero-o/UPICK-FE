import React from "react";
import Image from "next/image";

const BlurBtn = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="w-[80px] h-[80px] rounded-[13px] bg-coolgray1/30 backdrop-blur border-[1px] border-white flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all">
      <Image alt="" src={src} />
      <span className="text-sm text-darkblue1 mt-1">{text}</span>
    </div>
  );
};
export default BlurBtn;
