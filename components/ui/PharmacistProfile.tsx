import useClickRoute from "hooks/useClickRoute";
import React from "react";
import Image from "next/image";
import LocationBlue from "../../assets/images/icons/LocationBlue.svg";

const PharmacistProfile = ({
  pharmacist,
  pharmacy,
  link,
  url,
}: {
  pharmacist: string;
  pharmacy: string;
  link: string;
  url: string;
}) => {
  const onLink = useClickRoute({ link });
  return (
    <div
      onClick={onLink}
      className="flex flex-col items-center py-1 hover:cursor-pointer hover:-translate-y-1 transition-all"
    >
      <div className="w-[77px] h-[77px] rounded-full shadow-sm bg-coolgray2">
        <Image
          src={url}
          alt=""
          width={`77px`}
          height={`77px`}
          unoptimized={true}
          className="rounded-full"
        ></Image>
      </div>
      <span className="text-[14px] font-sdg-b text-darkblue1 mt-2 font-bold">
        {pharmacist}
      </span>
      <span className="text-[12px] font-sdg-l text-coolgray3 font-medium">
        {pharmacy}
      </span>
    </div>
  );
};
export default PharmacistProfile;
