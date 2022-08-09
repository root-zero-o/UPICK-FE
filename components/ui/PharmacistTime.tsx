import React, { useState, useEffect } from "react";
import time from "../../assets/images/icons/time.svg";
import Image from "next/image";
import send from "../../assets/images/icons/send.svg";

const PharmacistTime = ({
  name,
  able,
  startTime,
  endTime,
}: {
  name: string;
  able: boolean;
  startTime: string;
  endTime: string;
}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (able) {
      setActive(true);
    }
  }, [able]);
  return (
    <div className="flex mx-5 items-center justify-evenly py-4 relative">
      <span className="text-[16px] text-[#212222] font-sdg-b">{name} 약사</span>
      {active ? (
        <div className="bg-skyblue text-white w-[50.23px] h-[20px] rounded-[13px] text-[10px] font-sdg-l flex items-center justify-center">
          상담가능
        </div>
      ) : (
        <div className="border-[1px] border-gray text-gray w-[50.23px] h-[20px] rounded-[13px] text-[10px] font-sdg-l flex items-center justify-center ">
          상담불가
        </div>
      )}

      <div className=" flex items-center h-full">
        <Image alt="" src={time} />
        <span className="text-[10px] text-gray font-sdg-l ml-1 pt-1">
          {startTime} ~ {endTime}
        </span>
      </div>
      <div className="w-[30px] h-[30px] rounded-full bg-white shadow-md flex items-center justify-center hover:cursor-pointer hover:shadow-lg">
        <Image alt="" src={send} />
      </div>
    </div>
  );
};
export default PharmacistTime;
