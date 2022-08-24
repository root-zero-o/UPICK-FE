import SignInput from "components/SignInUp/SignInput";
import DisablePW from "assets/images/icons/DisablePW.svg";
import ErrorPW from "assets/images/icons/ErrorPW.svg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/modules";
import ProgressBar from "components/ui/ProgressBar";
import { passwordRegCheck } from "shared/LoginCheck";
import useClickRoute from "hooks/useClickRoute";
import { __signUp } from "store/modules/userSlice";
import { AppDispatch } from "store/configStore";

const SignupDetail = () => {
  const [pw, setPw] = useState("");
  const [pwTwo, setPwTwo] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const onSuccessLink = useClickRoute({ link: "/congrats" });
  const onReloadLink = useClickRoute({ link: "/signup" });
  const { savedEmail, savedName } = useSelector(
    (state: RootState) => state.user.userInfo
  );

  // 회원가입 버튼 이벤트
  const onClickHandler = () => {
    dispatch(
      __signUp({ email: savedEmail, password: pw, username: savedName })
    );
    onSuccessLink();
  };

  const reg = () => {
    // 통과된경우
    if (passwordRegCheck(pw) || pw === "") return true;
    // 실패한경우
    return false;
  };

  useEffect(() => {
    if (savedEmail === "" || savedName === "") {
      onReloadLink();
    }
  }, [savedEmail, savedName, onReloadLink]);

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
          {/* 1차 비밀번호 */}
          {reg() ? (
            <SignInput
              type="password"
              placeholder="영문+숫자+특수문자 8~20자리"
              showButton={true}
              src={DisablePW}
              error={false}
              onchange={setPw}
            />
          ) : (
            <SignInput
              type="password"
              placeholder="영문+숫자+특수문자 8~20자리"
              showButton={true}
              src={ErrorPW}
              error={true}
              onchange={setPw}
            />
          )}
          {/* 2차 비밀번호 */}
          {(pw !== pwTwo && pwTwo) ||
          (pwTwo?.length && !passwordRegCheck(pwTwo)) ? (
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
          {(pw !== pwTwo && pwTwo) || !reg() ? (
            <div className="w-full flex justify-center text-error">
              <span className=" mt-[12px]">양식이 올바르지 않아요!</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <ProgressBar
        initial={50}
        text1={pw}
        text2={pwTwo}
        onClick={onClickHandler}
      />
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
