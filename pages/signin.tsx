import SignHeader from "components/SignInUp/SignHeader";
import SignInput from "components/SignInUp/SignInput";
import SignArrow from "components/SignInUp/SignArrow";
import DisablePW from "assets/images/icons/DisablePW.svg";
import SignInputBottom from "components/SignInUp/SignInputBottom";
import Kakao from "assets/images/logos/Kakao_logo.svg";
import Naver from "assets/images/logos/Naver_logo.svg";
import Google from "assets/images/logos/Google_logo.svg";
import Image from "next/image";
import useClickRoute from "hooks/useClickRoute";
import HeaderBG from "components/HeaderBG";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store/configStore";
import { __signIn } from "store/modules/userSlice";
import { useEffect, useState } from "react";
import { emailRegCheck, passwordRegCheck } from "shared/LoginCheck";
import { RootState } from "store/modules";
import { KAKAO_AUTH_URL } from "shared/SocialAuth";
import Router from "next/router";

const Signin = () => {
  const onHomeLink = useClickRoute({ link: "/home" });
  const onKakao = useClickRoute({ link: `${KAKAO_AUTH_URL}` });
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.user.userInfo);

  // button disable handler
  const onDisableHandler = () => {
    if (passwordRegCheck(pw) && emailRegCheck(email)) return false;
    return true;
  };

  // 회원가입 버튼 이벤트
  const onClickHandler = () => {
    // dispatch(__signIn({ email, password: pw }));
    Router.push("/home");
  };

  useEffect(() => {
    if (isLogin) {
      onHomeLink();
    }
  }, [isLogin, onHomeLink]);

  return (
    <div className="relative flex flex-col items-center justify-between bg-lightGray">
      <HeaderBG
        fullWidth="100%"
        fullHeight="650px"
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
      <span className="absolute top-[50px] left-[32px] text-white text-[26px] font-bold">
        건기식 고를 땐, 유픽!
      </span>
      <div className="InnerBox relative bg-blue3/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] shadow-sign-p-input">
        <SignHeader
          signInFlag={true}
          link="/signup"
          error={false}
          first={true}
        />
        <div className="flex flex-col justify-start items-center mt-[30px]">
          <SignInput
            type="text"
            placeholder="이메일"
            showButton={false}
            src=""
            error={false}
            onchange={setEmail}
          />
          <SignInput
            type="password"
            placeholder="패스워드"
            showButton={true}
            src={DisablePW}
            error={false}
            onchange={setPw}
          />
          <SignInputBottom
            textOne="이메일/비밀번호"
            textTwo="를 잊으셨나요?"
            link=""
          />
          <div className="flex flex-col items-center justify-between w-[164px] h-[81px] mt-[26px] mb-[75px]">
            <span className="bottomTxt">간편 로그인</span>
            <div className="flex justify-center gap-[20px]">
              <div className="social bg-kakao" onClick={onKakao}>
                <Image src={Kakao} alt="" />
              </div>
              <div className="social bg-naver">
                <Image src={Naver} alt="" />
              </div>
              <div className="social bg-white">
                <Image src={Google} alt="" />
              </div>
            </div>
          </div>
        </div>
        <SignArrow disabled={onDisableHandler()} onClick={onClickHandler} />
      </div>
      <span className="bottomTxt mt-[175px]">
        회원가입 없이
        <strong className="cursor-pointer" onClick={onHomeLink}>
          &nbsp;둘러보기
        </strong>
      </span>
      <style jsx>
        {`
          .InnerBox {
            width: calc(100% - 40px);
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
            box-shadow: -10px 4px 10px rgba(0, 0, 0, 0.04);
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

export default Signin;
