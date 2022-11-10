import React from "react";
import Image from "next/image";
import sendWhite from "../assets/images/icons/sendWhite.svg";
import Layout from "components/Layout";
import CheckBox from "../components/chat/Checkbox";

const chat = () => {
  return (
    <Layout home={false} title="" isWhite={false} icon={true}>
      <div className=" w-full flex flex-col px-8">
        <div className="mb-4 pb-2 border-b-[1px] border-coolgray2 flex items-center justify-end">
          <span className="text-md text-coolgray3 mr-2 font-medium mt-2">
            잘생김 약국
          </span>
          <span className="text-lg text-darkblue1 font-extrabold mr-4 mt-2">
            차은우 약사
          </span>
          <div className="w-[51px] h-[51px] rounded-full border-white border-[3px] bg-coolgray3 shadow-md">
            <Image
              src={`data:image/jpeg;base64,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`}
              alt=""
              width={`51px`}
              height={`51px`}
              unoptimized={true}
              className="rounded-full"
            ></Image>
          </div>
        </div>
      </div>
      <div className="px-8 space-y-4 flex flex-col">
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
      <div className="w-full fixed bottom-0 max-w-[420px] flex flex-col">
        <CheckBox name="차은우" />
        <div className="w-full h-[60px]  flex justify-evenly items-center bg-coolgray1 z-40">
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
      </div>
    </Layout>
  );
};

export default chat;
