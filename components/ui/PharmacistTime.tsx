import React, { useState, useEffect } from "react";
import time from "../../assets/images/icons/time.svg";
import Image from "next/image";
import send from "../../assets/images/icons/send.svg";
import useClickRoute from "hooks/useClickRoute";

const PharmacistTime = ({
  name,
  able,
  startTime,
  endTime,
  link,
}: {
  name: string;
  able: boolean;
  startTime: string;
  endTime: string;
  link: string;
}) => {
  const [active, setActive] = useState(false);
  const onLink = useClickRoute({ link });
  useEffect(() => {
    if (able) {
      setActive(true);
    }
  }, [able]);
  return (
    <div className="flex mx-5 items-center justify-evenly py-4 relative ">
      <span className="text-md text-[#212222] font-bold">{name} 약사</span>
      {active ? (
        <div className="bg-blue2 text-white w-[50.23px] h-[20px] rounded-[13px] text-xs flex items-center justify-center">
          상담가능
        </div>
      ) : (
        <div className="border-[1px] border-coolgray3 text-coolgray3 w-[50.23px] h-[20px] rounded-[13px] text-xs flex items-center justify-center ">
          상담불가
        </div>
      )}

      <div className=" flex items-center h-full">
        <Image alt="" src={time} />
        <span className="text-xs text-coolgray3 ml-1">
          {startTime} ~ {endTime}
        </span>
      </div>
      <div
        onClick={onLink}
        className="w-[30px] h-[30px] rounded-full bg-white shadow-md flex items-center justify-center hover:cursor-pointer hover:shadow-lg"
      >
        <Image alt="" src={send} />
      </div>
    </div>
  );
};
export default PharmacistTime;
