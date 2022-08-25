import SignHeader from "components/SignInUp/SignHeader";
import SignInput from "components/SignInUp/SignInput";
import SignArrow from "components/SignInUp/SignArrow";
import HeaderBG from "components/HeaderBG";
import Kakao from "assets/images/logos/Kakao_logo.svg";
import Naver from "assets/images/logos/Naver_logo.svg";
import Google from "assets/images/logos/Google_logo.svg";
import Image from "next/image";
import useClickRoute from "hooks/useClickRoute";
import { emailRegCheck, nameRegCheck } from "shared/LoginCheck";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/modules";
import { AppDispatch } from "store/configStore";
import { rollBackDup, saveUserInfo, __dupCheck } from "store/modules/userSlice";
import { useState, useEffect } from "react";

const Signup = () => {
  const onHomeLink = useClickRoute({ link: "/home" });
  const onSuccessLink = useClickRoute({ link: "/tos" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { dupCheck } = useSelector((state: RootState) => state.user.userInfo);

  // button disable handler
  const onDisableHandler = () => {
    if (nameRegCheck(name) && emailRegCheck(email)) return false;
    return true;
  };

  // 회원가입 버튼 이벤트 - 중복검사 진행
  const onClickHandler = () => {
    dispatch(__dupCheck({ email }));
  };

  // 중복 아닐시에 페이지 이동
  useEffect(() => {
    if (dupCheck === false) {
      dispatch(saveUserInfo({ name, email }));
      onSuccessLink();
    }
  }, [dispatch, dupCheck, name, email, onSuccessLink]);

  // 가장 먼저 실행 -> 중복체크 원상태로
  useEffect(() => {
    dispatch(rollBackDup({ data: null }));
  }, []);

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
      <div className="InnerBox relative bg-blue3/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] shadow-sign-p-input">
        <SignHeader
          signInFlag={false}
          link="/signin"
          error={dupCheck}
          first={false}
        />
        <div className="flex flex-col justify-start items-center mt-[40.5px]">
          {/* 이름 input 유효성 */}
          {!nameRegCheck(name) && name.length !== 0 ? (
            <SignInput
              type="text"
              placeholder="이름"
              showButton={false}
              src=""
              error={true}
              onchange={setName}
            />
          ) : (
            <SignInput
              type="text"
              placeholder="이름"
              showButton={false}
              src=""
              error={false}
              onchange={setName}
            />
          )}
          {/* 이메일 input 유효성 */}
          {(!emailRegCheck(email) && email.length !== 0) || dupCheck ? (
            <SignInput
              type="email"
              placeholder="이메일"
              showButton={false}
              src=""
              error={true}
              onchange={setEmail}
            />
          ) : (
            <SignInput
              type="email"
              placeholder="이메일"
              showButton={false}
              src=""
              error={false}
              onchange={setEmail}
            />
          )}
          {/* 유효성 텍스트*/}
          {dupCheck ? (
            //  중복일경우
            <span className="ErrorText text-error mt-[8px] mb-[92px]">
              이미 해당 메일이 쓰인 계정이 있어요
            </span>
          ) : // 중복 아닐경우
          (!nameRegCheck(name) && name.length !== 0) ||
            (!emailRegCheck(email) && email.length !== 0) ? (
            <span className="ErrorText text-error mt-[8px] mb-[92px]">
              양식이 올바르지 않아요!
            </span>
          ) : (
            <span className="ErrorText text-error mt-[8px] mb-[92px] opacity-0">
              박스 사이즈용 span
            </span>
          )}
        </div>
        <SignArrow disabled={onDisableHandler()} onClick={onClickHandler} />
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
          <strong className="cursor-pointer" onClick={onHomeLink}>
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
