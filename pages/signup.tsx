import SignBG from "../components/SignInUp/SignBG";
import SignBottom from "../components/SignInUp/SignBottom";
import SignInput from "../components/SignInUp/SignInput";
import SignArrow from "../components/SignInUp/SignArrow";
import SignHeader from "../components/SignInUp/SignHeader";
import SignInputBottom from "../components/SignInUp/SignInputBottom";
import Image from "next/image";
import DisablePW from "../assets/images/DisablePW.svg";
import Hand from "../assets/images/Hand.svg";

const signup = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full font-sdg-b">
      <SignBG />
      <div className="relative flex items-center justify-start w-full z-9 ml-[40px] mt-[90px]">
        <span className="text-white text-[26px] leading-[36px] z-50 tracking-wide">
          반갑습니다
        </span>
        <div className="absolute left-[75px] bottom-[-45px] z-40">
          <Image src={Hand} width="91.76px" height="101.93px" alt="" />
        </div>
      </div>
      {/* 로그인 input div */}
      <div className="w-[317px] h-[455px] bg-lightBlue/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] shadow-sign-p-input z-10 mt-[10px] m-auto">
        <SignHeader signInFlag={false} />
        {/* 로그인 input */}
        <div className="flex flex-col justify-start items-center w-full h-full mt-[40.5px]">
          <SignInput type="text" placeholder="Name" showButton={false} src="" />
          <SignInput
            type="email"
            placeholder="Email"
            showButton={false}
            src=""
          />
          <SignInput
            type="password"
            placeholder="Password"
            showButton={true}
            src={DisablePW}
          />
          <SignArrow />
          {/* 아이디 비번 찾기 */}
          <SignInputBottom textOne="이용약관" textTwo="에 동의하시나요?" />
        </div>
      </div>
      <SignBottom
        firstText="혹시 유픽 계정이 있다면?"
        secondText="로그인"
        link="/signin"
      />
    </div>
  );
};

export default signup;
