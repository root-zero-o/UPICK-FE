import useClickRoute from "hooks/useClickRoute";
import React from "react";

const ProductProfile = ({
  company,
  name,
  link,
}: {
  company: string;
  name: string;
  link: string;
}) => {
  const onLink = useClickRoute({ link });
  return (
    <div
      onClick={onLink}
      className="flex flex-col items-center text-center break-normal px-4 max-w-[95px] hover:cursor-pointer hover:-translate-y-1 transition-all"
    >
      <div className="w-[76px] h-[76px] rounded-full bg-gray" />
      <span className="text-[8px] text-gray font-sdg-l mt-2">{company}</span>
      <span className="text-[14px] text-[#212121] font-sdg-eb mt-1 break-words">
        {name}
      </span>
    </div>
  );
};
export default ProductProfile;
