import React, { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import Search from "../../assets/images/icons/Search.svg";
import axios from "axios";

interface IProps {
  placeholder: string;
  setState: Dispatch<SetStateAction<any[]>>;
}

const MedSearchInput: FC<IProps> = ({ placeholder, setState }) => {
  const response = async (value: any) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/taking-medicine?keyword=${value}`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      if (result?.data?.data?.length > 5) {
        const newData = result?.data?.data?.slice(0, 4);
        setState(newData);
      } else {
        setState(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-[100%] h-[48px] relative bg-searchInput rounded-[24px] backdrop-blur flex items-center mx-auto">
        <div className="absolute top-1 left-1">
          <Image src={Search} alt="" />
        </div>
        <input
          type="text"
          onChange={(v) => response(v.target.value)}
          className="placeholder-coolgray3 absolute w-[100%] bg-coolgray1 bg-opacity-0 z-40 border-[1px] border-coolgray3 h-[48px] rounded-[24px] pl-12 focus:outline-none text-coolgray5 text-[16px] font-sdg-m"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default MedSearchInput;
