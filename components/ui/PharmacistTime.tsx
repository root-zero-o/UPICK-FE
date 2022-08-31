import React from "react";
import downArrow from "../../assets/images/icons/downArrow.svg";
import Image from "next/image";

const PharmacistTime = ({
  name,
  pharmacy,
  time,
  location,
  distance,
  isActive,
}: {
  name: string;
  pharmacy: string;
  time: string;
  location: string;
  distance: number;
  isActive: boolean;
}) => {
  return (
    <div className="w-full px-4 flex justify-between py-5 hover:cursor-pointer hover:bg-white transition-all rounded-lg">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center">
          <span className="text-md text-darkblue2 font-bold mr-2">
            {name} 약사
          </span>
          <span className="text-sm text-coolgray4 font-light">
            {pharmacy} 약국
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-coolgray4 font-light mr-4">
            상담가능시간
          </span>
          <span className="text-sm text-black font-medium">{time}</span>
        </div>
        {isActive ? (
          <div className="w-[60px] h-[20px] rounded-full bg-blue2 flex justify-center items-center font-light">
            <span className="text-xs text-white">상담가능</span>
          </div>
        ) : (
          <div className="w-[60px] h-[20px] rounded-full bg-coolgray3 flex justify-center items-center font-light">
            <span className="text-xs text-white">상담불가</span>
          </div>
        )}
      </div>
      <div>
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center">
            <span className="mr-2 text-sm text-coolgray4 leading-5 block font-light">
              {location}
            </span>
            <Image alt="downArrow" src={downArrow} />
          </div>
          <span className="text-sm text-darkblue2 leading-5 block font-medium">
            {distance} m
          </span>
        </div>
      </div>
    </div>
  );
};
export default PharmacistTime;
