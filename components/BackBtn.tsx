import React from "react";
import Image from "next/image";
import pathWhite from "../assets/images/icons/PathWhite.svg";
import { useRouter } from "next/router";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <Image alt="" src={pathWhite} />
    </div>
  );
};

export default BackBtn;
