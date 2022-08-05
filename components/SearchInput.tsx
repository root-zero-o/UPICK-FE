import React from "react";
import Image from "next/image";
import Search from "../assets/images/icons/Search.svg";

export const SearchInput = ({ top }: { top: string }) => {
  return (
    <>
      <div className="w-[333px] h-[48px] bg-searchInput rounded-[24px] backdrop-blur flex items-center pl-2">
        <Image src={Search} alt="" className="ml-5" />
      </div>
      <input
        type="text"
        className="bg-lightBlue bg-opacity-0 z-40 border-[1px] border-[#E4E5E6] w-[333px] h-[48px] rounded-[24px] pl-12 focus:outline-none text-white text-[18px] font-sdg-m"
      />
      <style jsx>
        {`
          div {
            position: absolute;
            top: ${top};
          }
          input {
            position: absolute;
            top: ${top};
          }
        `}
      </style>
    </>
  );
};
