import React, { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import Search from "../../assets/images/icons/Search.svg";

interface IProps {
  placeholder: string;
  setState: Dispatch<SetStateAction<string>>;
}

const MedSearchInput: FC<IProps> = ({ placeholder, setState }) => {
  return (
    <>
      <div className="w-[100%] h-[48px] relative bg-searchInput rounded-[24px] backdrop-blur flex items-center pl-2 mx-auto">
        <Image src={Search} alt="" className="absolute" />
        <input
          type="text"
          onChange={(v) => setState(v.target.value)}
          className="placeholder-coolgray3 absolute w-[100%] bg-coolgray1 bg-opacity-0 z-40 border-[1px] border-coolgray3 h-[48px] rounded-[24px] pl-12 focus:outline-none text-coolgray5 text-[16px] font-sdg-m"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default MedSearchInput;
