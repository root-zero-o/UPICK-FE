import React from "react";
import Image from "next/image";
import useClickRoute from "hooks/useClickRoute";

const HomeCategoryBtn = ({
  src,
  text,
  link,
}: {
  src: string;
  text: string;
  link: string;
}) => {
  const onLink = useClickRoute({ link: link });

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={onLink}
        className="w-[56px] h-[56px] bg-lightGray rounded-full flex items-center justify-center shadow-home-p-category-btn hover:cursor-pointer hover:bg-white transition-colors"
      >
        <Image alt="" src={src} />
      </div>
      <span className="text-[13px] text-gray font-sdg-m mt-[12px]">{text}</span>
    </div>
  );
};

export default HomeCategoryBtn;
