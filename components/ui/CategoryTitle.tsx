import React from "react";
import Image from "next/image";
import rightArrow from "../../assets/images/icons/rightArrow.svg";

const CategoryTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="w-full z-40 flex px-8 justify-between items-center">
      <div className="flex mt-1">
        <h2 className="font-sdg-b text-navy text-[16px]">{title},</h2>
        <h3 className="font-sdg-l text-navy text-[16px] ml-1">{subtitle}</h3>
      </div>
      <div className="flex items-center">
        <span className="text-[10px] font-sdg-m text-gray mr-1 mt-1">
          더보기
        </span>
        <Image alt="" src={rightArrow} />
      </div>
    </div>
  );
};

export default CategoryTitle;
