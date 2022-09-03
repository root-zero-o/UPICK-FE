import useClickRoute from "hooks/useClickRoute";

const Tos = () => {
  const onLink = useClickRoute({ link: "/signupdetail" });
  return (
    <div className="relative h-screen flex flex-col items-center justify-between">
      <div className="relative flex w-full h-[208px] bg-sign-p-one rounded-b-[101px] overflow-hidden">
        <div className="absolute w-[440px] h-[415px] rounded-full bg-sign-p-two top-[-184px] left-[-93px] z-10" />
        <div className="absolute w-[504px] h-[415px] rounded-full bg-sign-p-two top-[82px] left-[6px]" />
        <span className="text-white text-[26px] font-bold ml-[40px] mt-[50px] z-20">
          이용약관
        </span>
      </div>
      <div className="overflow-scroll max-h-[500px] w-[90%]">
        <span>
          이용약관 텍스트 들어올곳 스크롤 테스트||| 이용약관 텍스트
          들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관
          텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳
          ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관
          텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트
          들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관
          텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳
          ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관
          텍스트 들어올곳 스크롤 테스트||| 이용약관 텍스트 들어올곳이용약관
          텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳
          ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관
          텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트
          들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관
          텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳
          ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관
          텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 이용약관 텍스트
          들어올곳 스크롤 테스트||| 이용약관 텍스트 들어올곳이용약관 텍스트
          들어올곳 ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳 |||
          이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트
          들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관
          텍스트 들어올곳 ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳
          ||| 이용약관 텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관
          텍스트 들어올곳이용약관 텍스트 들어올곳 ||| 이용약관 텍스트
          들어올곳이용약관 텍스트 들어올곳 ||| 이용약관
        </span>
      </div>
      <button className="confirmBtn" onClick={onLink}>
        모두 확인
      </button>
      <style jsx>{`
        .confirmBtn {
          width: calc(100% - 54px);
          height: 42px;
          background: #1576fb;
          border-radius: 22px;
          margin-bottom: 28px;
          font-size: 14px;
          line-height: 14px;
          color: #f7faff;
        }
      `}</style>
    </div>
  );
};

export default Tos;
