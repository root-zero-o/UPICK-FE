import React from "react";
import Image from "next/image";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import useClickRoute from "hooks/useClickRoute";

const CategoryTitle = ({
  title,
  subtitle,
  link,
  hideIcon,
  hideSub,
}: {
  title: string;
  subtitle?: string;
  link: string;
  hideIcon?: boolean;
  hideSub?: boolean;
}) => {
  const onLink = useClickRoute({ link: link });
  return (
    <div className="w-full z-40 flex justify-between items-center px-10 ">
      <div className="flex">
        <h2 className="text-darkblue1 text-md font-black">{title}</h2>
        <h3 className="text-darkblue1 text-md ml-1 font-medium">{subtitle}</h3>
      </div>
      <div
        onClick={onLink}
        className="flex items-center hover:cursor-pointer hover:drop-shadow-md"
      >
        {!hideSub && (
          <>
            {!hideIcon ? (
              <>
                <span className="text-xs text-coolgray3 mr-1 ">더보기</span>
                <Image alt="" src={rightArrow} />
              </>
            ) : (
              <>
                <span className="text-xs text-coolgray3 mr-1 ">추가하기</span>
              </>
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryTitle;
