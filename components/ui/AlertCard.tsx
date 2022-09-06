import React from "react";
import Image from "next/image";
import ChatBlue from "../../assets/images/icons/chatBlue.svg";

const AlertCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="px-6">
      <div className="relative w-full  h-[130px] rounded-2xl shadow-alert flex p-4 items-center">
        <div className="w-[11px] h-[11px] rounded-full bg-blue2 absolute -top-[2px] right-4" />
        <div className="w-[60px] h-[60px] rounded-full bg-white shadow-lg flex justify-center items-center ">
          <Image alt="" src={ChatBlue} />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-md text-darkblue2 font-bold mb-2">{title}</span>
          <span className="text-sm text-coolgray4 leading-5 block font-light">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
