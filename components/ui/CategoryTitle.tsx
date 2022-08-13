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
    <div className="w-full z-40 flex px-10 pt-10 pb-6 justify-between items-center">
      <div className="flex mt-1">
        <h2 className="text-darkblue1 text-md font-black">{title}</h2>
        <h3 className="text-darkblue1 text-md ml-1 font-medium">{subtitle}</h3>
      </div>
      <div
        onClick={onLink}
        className="flex items-center hover:cursor-pointer hover:drop-shadow-md"
      >
        <span className="text-xs text-coolgray3 mr-1 ">더보기</span>
        <Image alt="" src={rightArrow} />
      </div>
    </div>
  );
};

export default CategoryTitle;
