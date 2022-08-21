import SignHeader from "components/SignInUp/SignHeader";
import SignInput from "components/SignInUp/SignInput";
import SignArrow from "components/SignInUp/SignArrow";
import { useState } from "react";
import HeaderBG from "components/HeaderBG";
import Kakao from "assets/images/logos/Kakao_logo.svg";
import Naver from "assets/images/logos/Naver_logo.svg";
import Google from "assets/images/logos/Google_logo.svg";
import Image from "next/image";
import useClickRoute from "hooks/useClickRoute";

const Signup = () => {
  const [isDup, setIsDup] = useState(true);
  const onLink = useClickRoute({ link: "/home" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col items-center justify-between bg-lightGray">
      <HeaderBG
        fullWidth="100%"
        fullHeight="600px"
        fullTop="-37.56%"
        innerWidth="504px"
        innerHeight="504px"
        innerTop="75.78%"
        innerLeft="-6.4%"
        outerWidth="504px"
        outerHeight="504px"
        outerTop="10%"
        outerLeft="-30%"
        showInnerDIv={true}
        showOuterDiv={true}
        rot={150}
        bgFlag={false}
      />
      <div className="InnerBox relative bg-lightBlue/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] shadow-sign-p-input">
        <SignHeader
          signInFlag={false}
          link="/signin"
          error={isDup}
          first={false}
        />
        <div className="flex flex-col justify-start items-center mt-[40.5px]">
          <SignInput
            type="text"
            placeholder="이름"
            showButton={false}
            src=""
            error={false}
            onchange={setName}
          />
          <SignInput
            type="email"
            placeholder="이메일"
            showButton={false}
            src=""
            error={isDup}
            onchange={setEmail}
          />
          <span className="ErrorText text-error mt-[8px] mb-[92px]">
            이미 해당 메일이 쓰인 계정이 있어요
          </span>
        </div>
        <SignArrow signup={true} input1={name} input2={email} />
      </div>
      <div className="flex flex-col items-center justify-start w-[164px] h-[141px] mt-[134px] mb-[40px]">
        <span className="bottomTxt">간편 회원가입</span>
        <div className="flex justify-center gap-[20px] mt-[16px]">
          <div className="social bg-kakao">
            <Image src={Kakao} alt="" />
          </div>
          <div className="social bg-naver">
            <Image src={Naver} alt="" />
          </div>
          <div className="social bg-white">
            <Image src={Google} alt="" />
          </div>
        </div>
        <span className="bottomTxt mt-[36px]">
          회원가입 없이
          <strong className="cursor-pointer" onClick={onLink}>
            &nbsp;둘러보기
          </strong>
        </span>
      </div>
      <style jsx>
        {`
          .InnerBox {
            width: calc(100% - 58px);
            margin-top: 138px;
          }
          .ErrorText {
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
          }
          .social {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            cursor: pointer;
          }
          .bottomTxt {
            font-size: 14px;
            line-height: 21px;
            color: #808e99;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
