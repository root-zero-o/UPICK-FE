import React from "react";
import Image from "next/image";
import Search from "../assets/images/icons/Search.svg";
import useClickRoute from "hooks/useClickRoute";

export const SearchInput = ({
  top,
  width,
  link,
}: {
  top: string;
  width: number;
  link: string;
}) => {
  const onLink = useClickRoute({ link: `${link}` });
  return (
    <>
      <div
        onClick={onLink}
        className="w-[100%] h-[48px] bg-searchInput rounded-[24px] backdrop-blur flex items-center pl-2 mx-auto border-[1px] border-coolgray2 cursor-pointer z-100"
      >
        <Image src={Search} alt="" className="ml-5" />
      </div>

      <style jsx>
        {`
          div {
            position: absolute;
            top: ${top};
            width: ${width}%;
            z-index: 100;
          }
        `}
      </style>
    </>
  );
};
