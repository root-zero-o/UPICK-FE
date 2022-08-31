import React, { useState } from "react";
import { cls } from "../../lib/utils";

const AdSlide = () => {
  const [move, setMove] = useState(0);
  const [clicked, setClicked] = useState("none");
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    if (id === "first") {
      setMove(0);
      setClicked("first");
    } else if (id === "second") {
      setMove(-33);
      setClicked("second");
    } else if (id === "third") {
      setMove(-67);
      setClicked("third");
    }
  };
  return (
    <div className="relative h-[130px] pt-2 ">
      <div className="slide transition-transform">
        <div className="w-[26%] h-[130px] ml-11 mr-12  bg-yellow1 rounded-xl relative"></div>
        <div className="w-[26%] h-[130px] mx-12  bg-blue2 rounded-xl relative"></div>
        <div className="w-[26%] h-[130px] mx-12 bg-green rounded-xl relative"></div>
      </div>
      <div className="absolute bottom-0  w-full h-[130px] flex justify-center"></div>
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] flex space-x-[8px] transition-all">
        <div
          id="first"
          onClick={onClick}
          className={cls(
            "h-[10px] bg-white rounded-full shadow-lg hover:cursor-pointer",
            clicked === "first" ? "w-[20px]" : "w-[10px]"
          )}
        />
        <div
          id="second"
          onClick={onClick}
          className={cls(
            "h-[10px] bg-white rounded-full shadow-lg hover:cursor-pointer",
            clicked === "second" ? "w-[20px]" : "w-[10px]"
          )}
        />
        <div
          id="third"
          onClick={onClick}
          className={cls(
            "h-[10px] bg-white rounded-full shadow-lg hover:cursor-pointer",
            clicked === "third" ? "w-[20px]" : "w-[10px]"
          )}
        />
      </div>
      <style jsx>{`
        .slide {
          display: flex;
          width: 300%;
          transform: translateX(${move}%);
        }
      `}</style>
    </div>
  );
};
export default AdSlide;
