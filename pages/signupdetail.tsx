import SignInput from "components/SignInUp/SignInput";
import DisablePW from "assets/images/icons/DisablePW.svg";
import ErrorPW from "assets/images/icons/ErrorPW.svg";
import Arrow from "assets/images/icons/Arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const SignupDetail = () => {
  const [pw, setPw] = useState<string | undefined>();
  const [pwTwo, setPwTwo] = useState<string | undefined>();
  const [progress, setProgress] = useState<number>(50);
  const onDisableHandler = () => {
    if (pw && pwTwo && pw === pwTwo) return false;
    return true;
  };
  useEffect(() => {
    if (pw) setProgress(75);
    else if (!pw) setProgress(50);
    if (pw && pwTwo && pw === pwTwo) setProgress(100);
    else if (!pw && !pwTwo && pw !== pwTwo) setProgress(75);
  }, [pw, pwTwo]);
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="relative w-full h-[208px] bg-blue1 rounded-b-[101px]">
        <span className="absolute text-white text-[26px] font-bold left-[40px] top-[50px]">
          회원가입
        </span>
        <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[295px] h-[44px]">
          <div className="flex items-center w-[295px] h-[44px] bg-coolgray1 rounded-[22px] pl-[15px] mb-[20px] border-[1px] border-coolgray3">
            <span>이름값(수정불가)</span>
          </div>
          <div className="flex items-center w-[295px] h-[44px] bg-coolgray1 rounded-[22px] pl-[15px] mb-[20px] border-[1px] border-coolgray3">
            <span>이메일값(수정불가)</span>
          </div>
          <SignInput
            type="password"
            placeholder="영문+숫자+특수문자 8~20자리"
            showButton={true}
            src={DisablePW}
            error={false}
            onchange={setPw}
          />
          {pw !== pwTwo && pwTwo?.length ? (
            <SignInput
              type="password"
              placeholder="비밀번호 확인"
              showButton={true}
              src={ErrorPW}
              error={true}
              onchange={setPwTwo}
            />
          ) : (
            <SignInput
              type="password"
              placeholder="비밀번호 확인"
              showButton={true}
              src={DisablePW}
              error={false}
              onchange={setPwTwo}
            />
          )}
          {pw !== pwTwo && pwTwo?.length ? (
            <div className="w-full flex justify-center text-error">
              <span className=" mt-[12px]">양식이 올바르지 않아요!</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex items-center justify-end w-[calc(100%-56px)] h-[110px] mb-[16px]">
        <div className="progressBarBlock">
          <div className="progressBar" />
        </div>
        <div className="relative w-[80px] h-[80px] rounded-full bg-white">
          <button
            disabled={onDisableHandler()}
            className="absolute flex items-center justify-center w-[55px] h-[55px] z-1 rounded-full bg-blue2 z-1 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
          >
            <Image src={Arrow} alt="" />
          </button>
        </div>
      </div>
      <style jsx>{`
        .inputBox {
          position: absolute;
          right: 0;
        }
        .progressBarBlock {
          height: 3px;
          width: 70%;
          background-color: #e2f0fb;
        }
        .progressBar {
          width: ${progress}%;
          height: 3px;
          background-color: #00b7f0;
          transition: width 1s;
        }
        button:disabled {
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default SignupDetail;
