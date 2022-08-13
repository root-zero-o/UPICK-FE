import React from "react";
import Image from "next/image";
import pathWhite from "../assets/images/icons/PathWhite.svg";
import pathBlue from "../assets/images/icons/PathBlue.svg";
import { useRouter } from "next/router";

const BackBtn = ({ isWhite }: { isWhite: boolean }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="hover:cursor-pointer">
      {isWhite ? (
        <Image alt="" src={pathWhite} />
      ) : (
        <Image alt="" src={pathBlue} />
      )}
    </div>
  );
};

export default BackBtn;
