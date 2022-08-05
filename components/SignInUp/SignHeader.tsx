import React from "react";

const SignHeader = ({ signInFlag }: { signInFlag: boolean }) => {
  return (
    <>
      {/* 로그인 헤더 */}
      <div className="flex items-center justify-center mt-[44px]">
        {signInFlag ? (
          <>
            <div className="flex flex-col items-center justify-center">
              <span className="text-white text-[20px]">로그인</span>
              <div className="w-[68px] border-[1px] border-lightGray" />
            </div>
            <div className="flex flex-col items-center justify-center ml-[91px]">
              <span className="text-darkGray text-[20px] opacity-[0.4]">
                회원가입
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <span className="text-darkGray text-[20px] opacity-[0.4]">
                로그인
              </span>
            </div>
            <div className="flex flex-col items-center justify-center ml-[91px]">
              <span className="text-white text-[20px]">회원가입</span>
              <div className="w-[68px] border-[1px] border-lightGray" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SignHeader;
