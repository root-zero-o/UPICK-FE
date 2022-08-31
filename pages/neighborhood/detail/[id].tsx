import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import KakaoMap from "components/KakaoMap";
import heartWhite from "../../../assets/images/icons/fullHeartWhite.svg";
import chat from "../../../assets/images/icons/smallChat.svg";
import location from "../../../assets/images/icons/LocationGray.svg";
import copy from "../../../assets/images/icons/Copy.svg";
import time from "../../../assets/images/icons/time.svg";
import favorite from "../../../assets/images/icons/Favorite.svg";
import Image from "next/image";

const detail: NextPage = () => {
  return (
    <Layout home={false} isWhite={false} icon={true}>
      <div className="w-full h-[340px] desktop:h-[430px] bg-map-header rounded-t-xl z-30" />
      <KakaoMap />
      <div className="bg-coolgray1 h-full w-full rounded-t-[50px] flex flex-col items-center relative -top-16 z-40 shadow-map-header">
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
          <div className="flex items-center">
            <Image alt="location" src={location} />
            <span className="text-sm font-light text-coolgray4 ml-1 mr-2">
              충청북도 청주시 상당구 중고개로
            </span>
            <div className="flex hover:cursor-pointer">
              <Image alt="copy" src={copy} />
              <span className="text-sm font-light text-blue2 ml-1">복사</span>
            </div>
          </div>
        </div>
        <div className="relative -top-7 w-[90%] h-[170px] shadow-lg rounded-md flex flex-col items-center p-4 space-y-3">
          <div className="w-full flex justify-evenly text-[14px] text-darkblue1 font-bold">
            <span>#다음에도 상담받고 싶은</span>
            <span>#친절한</span>
            <span>#꼼꼼한</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-md font-bold text-darkblue2">
              차은우 약사님의 상담가능시간
            </span>
            <div className="flex items-center">
              <div className="py-[2px] px-3 bg-blue2 text-white text-sm rounded-full mr-2">
                상담가능
              </div>
              <Image alt="time" src={time} />
              <div className="text-[14px] text-blue2">13:00 ~ 16:00</div>
            </div>
            <span className="text-sm font-light text-coolgray4 ml-1 mr-2">
              다른 시간은 약사님께서 답장이 늦을 수 있어요.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-1 py-[2px] bg-blue3 text-darkblue1 text-sm font-medium rounded-full ">
              영유아어린이영양제
            </div>
            <div className="px-1 py-[2px] bg-blue3 text-darkblue1 text-sm font-medium rounded-full ">
              근처소아과
            </div>
            <div className="px-1 py-[2px] bg-blue3 text-darkblue1 text-sm font-medium rounded-full ">
              주말오전영업
            </div>
          </div>
        </div>
        <div className="max-w-[420px] w-full fixed bottom-0 h-[6%] min-h-[50px] bg-coolgray1 flex items-center justify-evenly py-2">
          <div className="w-[40px] h-[40px] rounded-full bg-coolgray1 shadow-home-p-category-btn flex items-center justify-center hover:cursor-pointer hover:bg-white transition-all">
            <Image alt="heart" src={favorite} />
          </div>
          <div className="w-[70%] h-[40px] rounded-full flex justify-center items-center text-white bg-coolgray4 shadow-lg text-[14px] hover:cursor-pointer font-bold transition-all">
            상담하기
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default detail;
