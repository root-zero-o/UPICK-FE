import useClickRoute from "hooks/useClickRoute";
import React from "react";
import Image from "next/image";
import LocationBlue from "../../assets/images/icons/LocationBlue.svg";

const PharmacistProfile = ({
  pharmacist,
  pharmacy,
  link,
  location,
  meter,
}: {
  pharmacist: string;
  pharmacy: string;
  link: string;
  location: boolean;
  meter?: number;
}) => {
  const onLink = useClickRoute({ link });
  return (
    <div
      onClick={onLink}
      className="flex flex-col items-center py-1 hover:cursor-pointer hover:-translate-y-1 transition-all"
    >
      <div className="w-[77px] h-[77px] rounded-full shadow-sm bg-gray" />
      <span className="text-[14px] font-sdg-b text-[#212121] mt-2">
        {pharmacist} 약사
      </span>
      <span className="text-[12px] font-sdg-l text-gray">{pharmacy} 약국</span>
      {location ? (
        <div className="flex items-center mt-[-6px]">
          <div className="mb-2">
            <Image alt="" src={LocationBlue} />
          </div>
          <span className="text-[12px] text-navy font-sdg-m ml-1">
            {meter}m
          </span>
        </div>
      ) : null}
    </div>
  );
};
export default PharmacistProfile;
