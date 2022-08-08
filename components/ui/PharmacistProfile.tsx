import React from "react";

const PharmacistProfile = ({
  pharmacist,
  pharmacy,
}: {
  pharmacist: string;
  pharmacy: string;
}) => {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-[77px] h-[77px] rounded-full shadow-sm bg-gray" />
      <span className="text-[14px] font-sdg-b text-[#212121] mt-2">
        {pharmacist} 약사
      </span>
      <span className="text-[12px] font-sdg-l text-gray">{pharmacy} 약국</span>
    </div>
  );
};
export default PharmacistProfile;
