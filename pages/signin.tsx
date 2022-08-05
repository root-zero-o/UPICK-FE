import SignHeader from "../components/SignHeader";
import Image from "next/image";
import Hand from "../assets/imgs/Hand.svg";

const signin = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full font-sdg-b">
      <SignHeader />
      {/* 반갑습니다&손바닥 div */}
      <div className="relative flex items-center justify-start w-full z-9 ml-[40px] mt-[90px]">
        <span className="text-white text-[26px] leading-[36px] z-50 tracking-wide">
          반갑습니다
        </span>
        <div className="absolute left-[80px] bottom-[-40px] z-40">
          <Image src={Hand} width="91.76px" height="101.93px" alt="" />
        </div>
      </div>
      {/* 로그인 input div */}
      <div className="w-[317px] h-[343px] bg-lightBlue backdrop-blur-sm border-[2px] border-white rounded-[51px] z-10 mt-[10px] m-auto"></div>
      {/* 하단 텍스트 */}
      <div className="flex items-center justify-center w-[230px] h-[21px] text-[14px] leading-[21px] mb-[48px] m-auto">
        <span className="text-darkGray">혹시 유픽 첫방문이라면?</span>
        <span className="text-cyan ml-[10px]">회원가입</span>
      </div>
    </div>
  );
};

export default signin;
