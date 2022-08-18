import SignInput from "components/SignInUp/SignInput";
import DisablePW from "assets/images/icons/DisablePW.svg";
import ErrorPW from "assets/images/icons/ErrorPW.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/modules";
import ProgressBar from "components/ui/ProgressBar";

const SignupDetail = () => {
  const [pw, setPw] = useState<string | undefined>();
  const [pwTwo, setPwTwo] = useState<string | undefined>();
  const { savedEmail, savedName } = useSelector(
    (state: RootState) => state.user.userInfo
  );

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="relative w-full h-[208px] bg-blue1 rounded-b-[101px]">
        <span className="absolute text-white text-[26px] font-bold left-[40px] top-[50px]">
          회원가입
        </span>
        <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[295px] h-[44px]">
          <div className="flex items-center w-[295px] h-[44px] bg-coolgray1 rounded-[22px] pl-[15px] mb-[20px] border-[1px] border-coolgray3">
            <span>{savedName}</span>
          </div>
          <div className="flex items-center w-[295px] h-[44px] bg-coolgray1 rounded-[22px] pl-[15px] mb-[20px] border-[1px] border-coolgray3">
            <span>{savedEmail}</span>
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
      <ProgressBar initial={50} text1={pw} text2={pwTwo} />
      <style jsx>{`
        .inputBox {
          position: absolute;
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default SignupDetail;
