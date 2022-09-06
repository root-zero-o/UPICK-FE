import React, { useState } from "react";

const Word = ({ text }: { text: string }) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      {clicked ? (
        <div
          onClick={onClick}
          className="text-sm text-white bg-coolgray4 font-light border-[1px] border-coolgray4 rounded-lg px-2 py-1 mx-1 my-1 hover:cursor-pointer"
        >
          {text}
        </div>
      ) : (
        <div
          onClick={onClick}
          className="text-sm text-coolgray4 font-light border-[1px] border-coolgray3 rounded-lg px-2 py-1 mx-1 my-1 hover:cursor-pointer"
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Word;
