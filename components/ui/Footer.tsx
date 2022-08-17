import React from "react";
import behance from "../../assets/images/behance.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-darkblue1 flex flex-col items-start px-8 py-10 text-white space-y-6">
      <span className="text-md font-bold">PROJECT</span>
      <div className="text-xs flex flex-col">
        <span className="text-sm">Team A</span>
        <span className="mt-1">PM : 안지선</span>
        <span>Desiginer : 안지선</span>
        <span>FE : 김근영, 김준호, 이윤</span>
        <span>BE : 고승준</span>
      </div>
      <div className="text-xs flex flex-col">
        <span className="text-sm">ETC</span>
        <span className="mt-1">공지사항</span>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
        <span>FAQ</span>
      </div>
      <div className="text-xs flex flex-col">
        <span className="text-sm">CONTACT</span>
        <span className="mt-1">문의 : </span>
        <span>깃허브 : </span>
      </div>
      <div className="border-t-2 border-white w-full py-5 flex items-center justify-between px-4">
        <Image alt="" src={behance} />
        <Image alt="" src={behance} />
        <Image alt="" src={behance} />
      </div>
      <div className="w-full flex justify-center text-sm">
        Copyright ©Team A. All rights reserved
      </div>
    </div>
  );
};
export default Footer;
