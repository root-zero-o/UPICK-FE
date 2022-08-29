import React from "react";

const CategoryBar = () => {
  return (
    <div className="home-section-wrapper z-40 pb-4">
      <div className="flex justify-end px-8 text-sm text-coolgray3">
        <span className="hover:cursor-pointer">상담가능</span>
        <span className="px-2">|</span>
        <span className="hover:cursor-pointer">인기순</span>
        <span className="px-2">|</span>
        <span className="hover:cursor-pointer text-darkblue2 font-bold">
          신규
        </span>
      </div>
    </div>
  );
};

export default CategoryBar;
