import React from "react";

export const SearchInput = ({ top }: { top: number }) => {
  return (
    <>
      <input
        type="text"
        className="w-[323px] h-[50px] rounded-[24px] z-40 bg-gradientGray/50 backdrop-blur-md border-[2px] border-borderWhite pl-8 pr-4 text-white font-bold"
      />
      <style jsx>
        {`
          input {
            position: absolute;
            top: ${top}px;
          }
        `}
      </style>
    </>
  );
};
