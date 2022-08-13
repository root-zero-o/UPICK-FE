import React from "react";
import Image from "next/image";
import sendWhite from "../assets/images/icons/sendWhite.svg";
import Layout from "components/Layout";

const chat = () => {
  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <div className=" w-full flex flex-col px-8 absolute top-[60px]">
        <div className="mb-4 pb-2 border-b-[1px] border-coolgray3 flex items-end justify-end">
          <span className="text-sm text-coolgray3 mr-2 font-medium">
            잘생김 약국
          </span>
          <span className="text-md text-darkblue1 font-bold mr-2">
            차은우 약사
          </span>
          <div className="w-[51px] h-[51px] rounded-full border-white border-[3px] bg-coolgray3 shadow-md"></div>
        </div>
      </div>
      <div className="px-8 space-y-4 flex flex-col mt-6">
        <div className="bg-blue3 rounded-[27px] px-6 py-3 relative max-w-full flex justify-end">
          <span className="text-sm text-darkblue1">
            약사님 잘생겼어요약사님 잘생겼어요약사님 잘생겼어요약사님
            잘생겼어요약사님 잘생겼어요약사님 잘생겼어요약사님 잘생겼어요약사님
            잘생겼어요약사님 잘생겼어요약사님 잘생겼어요약사님 잘생겼어요
          </span>
          <div className="w-[20px] h-[30px] absolute right-0 bottom-[-20px] rounded-tr-full shadow-chatBlue" />
        </div>
        <div className="bg-blue3 rounded-[27px] px-6 py-3 relative max-w-full flex justify-end">
          <span className="text-sm text-darkblue1">약사님 잘생겼어요</span>
          <div className="w-[20px] h-[30px] absolute right-0 bottom-[-20px] rounded-tr-full shadow-chatBlue" />
        </div>
        <div className="bg-blue3 rounded-[27px] px-6 py-3 relative max-w-full flex justify-end">
          <span className="text-sm text-darkblue1">약사님 잘생겼어요</span>
          <div className="w-[20px] h-[30px] absolute right-0 bottom-[-20px] rounded-tr-full shadow-chatBlue" />
        </div>
        <div className="bg-white rounded-[27px] px-6 py-3 my-4 relative max-w-full flex ">
          <span className="text-sm text-black">감사합니다</span>
          <div className="w-[20px] h-[30px] absolute left-0 bottom-[-20px] rounded-tl-full shadow-chatWhite" />
        </div>
        <div className="flex flex-col text-xs text-coolgray3 font-thin justify-center items-center">
          <span>
            <span className="font-medium">차은우 약사</span>와의 상담이
            종료되었습니다.
          </span>
          <span>15:53:11</span>
        </div>
      </div>
      <div className="w-full h-[60px] fixed bottom-0 max-w-[420px] flex justify-evenly items-center bg-coolgray1 z-40">
        <div className="w-[40px] h-[40px] rounded-full bg-white shadow-md flex items-center justify-center hover:cursor-pointer hover:shadow-lg">
          <span className="text-sm text-coolgray3 font-medium">종료</span>
        </div>
        <input
          type="text"
          className="w-[60%] h-[65%] rounded-full border-2 border-coolgray3 shadow-md px-3 placeholder:text-coolgray3 text-sm"
          placeholder="TEXT"
        />
        <div className="w-[40px] h-[40px] rounded-full bg-coolgray3 shadow-md flex items-center justify-center hover:cursor-pointer hover:shadow-lg">
          <Image alt="" src={sendWhite} />
        </div>
      </div>
    </Layout>
  );
};

export default chat;
