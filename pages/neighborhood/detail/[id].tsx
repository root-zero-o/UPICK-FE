import React, { useEffect } from "react";
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
import ChatStatusChip from "components/ChatStatusChip";
import { useRouter } from "next/router";
import { samplePharmacistData } from "../../../lib/sampleData";
import CategoryTitle from "components/ui/CategoryTitle";
import useClickRoute from "hooks/useClickRoute";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import {
  selectPharmacists,
  __getPharmacists,
} from "store/modules/pharmacistsSlice";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const pharmacists = useAppSelector(selectPharmacists);
  const data = Array.from(pharmacists?.pharmacists).find(
    (v) => v.id === Number(id)
  );
  console.log(data?.Image[0].url);
  const onLinkChat = useClickRoute({ link: "/chat" });

  useEffect(() => {
    dispatch(__getPharmacists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout home={false} isWhite={false} icon={true}>
      <div className="w-full h-[340px] desktop:h-[430px] bg-map-header rounded-t-xl z-30" />
      <KakaoMap />
      <div className="bg-coolgray1 h-full w-full rounded-t-[50px] flex flex-col items-center relative -top-16 z-40 shadow-map-header">
        <div className="flex flex-col items-center relative -top-12 z-40 space-y-2">
          <div className="w-[104px] h-[104px] rounded-full border-[5px] border-white shadow-lg ">
            {data && (
              <Image
                src={data?.Image[0].url}
                width={`104px`}
                height={`104px`}
                unoptimized={true}
                style={{ borderRadius: "50%" }}
                alt=""
              />
            )}
          </div>
          <span className="text-2xl font-black text-darkblue2">
            {data?.userName}
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
          <span className="text-md font-bold text-coolgray4">
            {data?.pharmacyName}
          </span>
          <div className="flex items-center">
            <Image alt="location" src={location} />
            <span className="text-sm font-light text-coolgray4 ml-1 mr-2">
              {data?.pharmacyAddress}
            </span>
            <div className="flex hover:cursor-pointer">
              <Image alt="copy" src={copy} />
              <span className="text-sm font-light text-blue2 ml-1">복사</span>
            </div>
          </div>
        </div>
        <div className="relative -top-7 w-[90%] shadow-lg rounded-md flex flex-col items-center p-4 space-y-3">
          <div className="flex flex-col items-center space-y-1">
            <span className="text-md font-bold text-darkblue2">
              {data?.userName}님의 상담가능시간
            </span>
            <div className="flex items-center">
              <ChatStatusChip available />
              <Image alt="time" src={time} />
              <div className="text-[14px] text-blue2">
                {data?.counselingStartTime} ~ {data?.counselingEndTime}
              </div>
            </div>
            <span className="text-sm font-light text-coolgray4 ml-1 mr-2">
              다른 시간은 약사님께서 답장이 늦을 수 있어요.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-1 py-[2px] bg-blue3 text-darkblue1 text-sm font-medium rounded-full ">
              1
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <CategoryTitle title={`${data?.userName}` + "픽"} link="/article" />
          <div className="w-[380px] h-[84px] rounded-md shadow-lg mx-auto my-4 p-4 flex flex-col">
            <span className="text-[13px] font-bold">
              무더위, 에너지가 없다면?
            </span>
            <span className="text-sm text-coolgray4 mt-2">어쩌고저쩌고</span>
          </div>
        </div>
        <div className="max-w-[420px] w-full fixed bottom-0 h-[6%] min-h-[50px] bg-coolgray1 flex items-center justify-evenly py-2">
          <div className="w-[40px] h-[40px] rounded-full bg-coolgray1 shadow-home-p-category-btn flex items-center justify-center hover:cursor-pointer hover:bg-white transition-all">
            <Image alt="heart" src={favorite} />
          </div>
          <div
            onClick={onLinkChat}
            className="w-[70%] h-[40px] rounded-full flex justify-center items-center text-white bg-coolgray4 shadow-lg text-[14px] hover:cursor-pointer font-bold transition-all"
          >
            상담하기
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
