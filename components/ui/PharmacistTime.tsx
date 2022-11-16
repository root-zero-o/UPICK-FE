import React from "react";
import downArrow from "../../assets/images/icons/downArrow.svg";
import Image from "next/image";
import ChatStatusChip from "components/ChatStatusChip";
import { useRouter } from "next/router";

const PharmacistTime = ({
  name,
  pharmacy,
  time,
  location,
  isActive,
  id,
}: {
  name: string;
  pharmacy: string;
  time: string;
  location: string;
  isActive: boolean;
  id: number;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/neighborhood/detail/${id}`)}
      className="w-full px-4 flex justify-between py-5 hover:cursor-pointer hover:bg-white transition-all rounded-lg"
    >
      <div className="flex flex-col space-y-1">
        <div className="flex items-center">
          <span className="text-md text-darkblue2 font-bold mr-2">{name}</span>
          <span className="text-sm text-coolgray4 font-light">{pharmacy}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-coolgray4 font-light mr-4">
            상담가능시간
          </span>
          <span className="text-sm text-black font-medium">{time}</span>
        </div>
        <ChatStatusChip available={isActive} />
      </div>
      <div>
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center">
            <span className="mr-2 text-sm text-coolgray4 leading-5 block font-light">
              {location}
            </span>
            <Image alt="downArrow" src={downArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PharmacistTime;
