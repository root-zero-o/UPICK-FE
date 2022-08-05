import SignBG from "../components/SignBG";
import Image from "next/image";
import Hand from "../assets/imgs/Hand.svg";
import Arrow from "../assets/imgs/Arrow.svg";
import DisablePW from "../assets/imgs/DisablePW.svg";

const signin = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full font-sdg-b">
      <SignBG />
      {/* 반갑습니다&손바닥 div */}
      <div className="relative flex items-center justify-start w-full z-9 ml-[40px] mt-[90px]">
        <span className="text-white text-[26px] leading-[36px] z-50 tracking-wide">
          반갑습니다
        </span>
        <div className="absolute left-[75px] bottom-[-45px] z-40">
          <Image src={Hand} width="91.76px" height="101.93px" alt="" />
        </div>
      </div>
      {/* 로그인 input div */}
      <div className="w-[317px] h-[343px] bg-lightBlue/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] shadow-sign-p-input z-10 mt-[10px] m-auto">
        {/* 로그인 헤더 */}
        <div className="flex items-center justify-center mt-[44px]">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <span className="text-white text-[20px]">로그인</span>
            <div className="w-[68px] border-[1px] border-lightGray" />
          </div>
          <div className="flex flex-col items-center justify-center ml-[91px] cursor-pointer">
            <span className="text-darkGray text-[20px] opacity-[0.4]">
              회원가입
            </span>
          </div>
        </div>
        {/* 로그인 input */}
        <div className="flex flex-col justify-start items-center w-full h-full mt-[40.5px]">
          <div className="inputDiv">
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputDiv">
            <input type="password" placeholder="Password" />
            <button className="flex items-center justify-center ml-2">
              <Image src={DisablePW} width="18px" height="17px" alt="" />
            </button>
          </div>
          {/* 아이디 비번 찾기 */}
          <div className="find mt-[28px]">
            <span>
              <strong>이메일/비밀번호</strong>를 잊으셨나요?
            </span>
          </div>
        </div>

        {/* Arrow 버튼  */}
        <div className="absolute w-[80px] h-[80px] rounded-full bg-white z-1 right-1/2 bottom-[-80px] translate-x-1/2 -translate-y-1/2">
          <button className="flex items-center justify-center absolute w-[55px] h-[55px] rounded-full bg-cyan z-1 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2">
            <Image src={Arrow} width="11px" height="21px" alt="" />
          </button>
        </div>
      </div>
      {/* 하단 텍스트 */}
      <div className="flex items-center justify-center w-[230px] h-[21px] text-[14px] leading-[21px] mb-[48px] m-auto">
        <span className="text-darkGray">혹시 유픽 첫방문이라면?</span>
        <span className="text-cyan ml-[10px]">회원가입</span>
      </div>
      <style jsx>
        {`
          input {
            background-color: transparent;
            margin-left: 20px;
            width: 227.34px;
            line-height: 23px;
          }
          input::placeholder {
            color: #cacaca;
          }
          .inputDiv {
            display: flex;
            align-items: center;
            width: calc(100% - 22px);
            height: 44px;
            background-color: #f7faff;
            border: 1px solid #b1c2d0;
            border-radius: 22px;
          }
          .inputDiv:first-of-type {
            margin-bottom: 20px;
          }
          .find {
            font-size: 14px;
            line-height: 21px;
            color: #808e99;
          }
        `}
      </style>
    </div>
  );
};

export default signin;
