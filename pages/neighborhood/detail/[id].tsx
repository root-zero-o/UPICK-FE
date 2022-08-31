import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import KakaoMap from "components/KakaoMap";
import heartWhite from "../../../assets/images/icons/fullHeartWhite.svg";
import chat from "../../../assets/images/icons/smallChat.svg";
import Image from "next/image";

const detail: NextPage = () => {
  return (
    <Layout home={false} isWhite={false} icon={true}>
      <div className="w-full h-[340px] desktop:h-[430px] bg-map-header rounded-t-xl z-30" />
      <KakaoMap />
      <div className="bg-white w-full rounded-t-[50px] flex flex-col items-center relative -top-16 z-40 shadow-map-header">
        <div className="flex flex-col items-center relative -top-12 z-40 space-y-2">
          <div className="w-[104px] h-[104px] bg-coolgray4 rounded-full border-[5px] border-white shadow-lg "></div>
          <span className="text-2xl font-black text-darkblue2">
            차은우 약사
          </span>
          <div className="flex w-[120px] h-[24px] rounded-[12px] bg-coolgray3 shadow-md pt-[2px] justify-evenly">
            <div className="flex items-center">
              <Image alt="" src={heartWhite} />
              <span className="text-coolgray1 text-sm ml-1">2.3K</span>
            </div>
            <div className="flex items-center">
              <Image alt="" src={chat} />
              <span className="text-coolgray1 text-sm ml-1">100+</span>
            </div>
          </div>
          <span className="text-md font-bold text-coolgray4">잘생김 약국</span>
          <span className="text-sm font-light text-coolgray4">
            충청북도 청주시 상당구 중고개로
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default detail;
