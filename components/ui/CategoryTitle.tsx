import React from "react";
import Image from "next/image";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import useClickRoute from "hooks/useClickRoute";

const CategoryTitle = ({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}) => {
  const onLink = useClickRoute({ link: link });
  return (
    <div className="w-full z-40 flex px-8 pt-10 pb-6 justify-between items-center">
      <div className="flex mt-1">
        <h2 className="font-sdg-b text-navy text-[16px]">{title}</h2>
        <h3 className="font-sdg-l text-navy text-[16px] ml-1">{subtitle}</h3>
      </div>
      <div
        onClick={onLink}
        className="flex items-center hover:cursor-pointer hover:drop-shadow-md"
      >
        <span className="text-[10px] font-sdg-m text-gray mr-1 mt-1 ">
          더보기
        </span>
        <Image alt="" src={rightArrow} />
      </div>
    </div>
  );
};

export default CategoryTitle;
