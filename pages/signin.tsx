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

const Signin = () => {
  const onLink = useClickRoute({ link: "/home" });
  return (
    <div className="flex flex-col items-center justify-between bg-lightGray">
      <div className="InnerBox relative bg-lightBlue/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] shadow-sign-p-input">
        <SignHeader signInFlag={true} link="/signup" error={false} />
        <div className="flex flex-col justify-start items-center mt-[40.5px]">
          <SignInput
            type="text"
            placeholder="이름"
            showButton={false}
            src=""
            error={false}
          />
          <SignInput
            type="password"
            placeholder="패스워드"
            showButton={true}
            src={DisablePW}
            error={false}
          />
          <SignInputBottom
            textOne="이메일/비밀번호"
            textTwo="를 잊으셨나요?"
            link=""
          />
          <div className="flex flex-col items-center justify-between w-[164px] h-[81px] mt-[16px] mb-[75px]">
            <span className="bottomTxt">간편 로그인</span>
            <div className="flex justify-center gap-[20px]">
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
          </div>
        </div>
        <SignArrow />
      </div>
      <span className="bottomTxt mt-[175px] mb-[30px]">
        회원가입 없이
        <strong className="cursor-pointer" onClick={onLink}>
          &nbsp;둘러보기
        </strong>
      </span>
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
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: #808e99;
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
};

export default Signin;
