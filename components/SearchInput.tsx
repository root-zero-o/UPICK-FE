import React from "react";
import Image from "next/image";
import Search from "../assets/images/icons/Search.svg";
import useClickRoute from "hooks/useClickRoute";

export const SearchInput = ({ top, width }: { top: string; width: number }) => {
  const onLink = useClickRoute({ link: "/search" });
  return (
    <>
      <div
        onClick={onLink}
        className=" h-[48px] bg-searchInput rounded-[24px] backdrop-blur flex items-center pl-2 mx-auto border-[1px] border-coolgray2 cursor-pointer"
      >
        <Image src={Search} alt="" className="ml-5" />
      </div>

      <style jsx>
        {`
          div {
            position: absolute;
            top: ${top};
            width: ${width}%;
          }
          input {
            position: absolute;
            top: ${top};
            width: ${width}%;
          }
        `}
      </style>
    </>
  );
};
