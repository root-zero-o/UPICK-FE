import React from "react";
import Image from "next/image";
import Search from "../../assets/images/icons/Search.svg";

const MedSearchInput = () => {
  return (
    <>
      <div className="w-[100%] h-[48px] relative bg-searchInput rounded-[24px] backdrop-blur flex items-center pl-2 mx-auto">
        <Image src={Search} alt="" className="absolute left-[20px]" />
        <input
          type="text"
          className="absolute w-[100%] bg-coolgray1 bg-opacity-0 z-40 border-[1px] border-coolgray3 h-[48px] rounded-[24px] pl-12 focus:outline-none text-coolgray3 text-[18px] font-sdg-m"
        />
      </div>
    </>
  );
};

export default MedSearchInput;
