import React, { useEffect } from "react";
import Image from "next/image";
import pathWhite from "../assets/images/icons/PathWhite.svg";
import pathGray from "../assets/images/icons/PathGray.svg";
import pathBlue from "../assets/images/icons/PathBlue.svg";
import { useRouter } from "next/router";

const BackBtn = ({ type, myPick }: { type: string; myPick?: boolean }) => {
  const router = useRouter();
  const newType = () => {
    switch (type) {
      case "white":
        return <Image alt="" src={pathWhite} />;
      case "gray":
        return <Image alt="" src={pathGray} />;
      case "blue":
        return <Image alt="" src={pathBlue} />;
      default:
        return;
    }
  };
  return (
    <div
      onClick={() => {
        myPick ? router.push("/mypick") : router.back();
      }}
      className="hover:cursor-pointer"
    >
      {newType()}
    </div>
  );
};

export default BackBtn;
