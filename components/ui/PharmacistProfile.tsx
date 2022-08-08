import useClickRoute from "hooks/useClickRoute";
import React from "react";

const PharmacistProfile = ({
  pharmacist,
  pharmacy,
  link,
}: {
  pharmacist: string;
  pharmacy: string;
  link: string;
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
    </div>
  );
};
export default PharmacistProfile;
