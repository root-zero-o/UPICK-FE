import useClickRoute from "hooks/useClickRoute";

const Congrats = () => {
  // 링크이동 임시파일입니다.
  const onLink = useClickRoute({ link: "/signin" });
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-five overflow-hidden">
      <span className="absolute top-[50px] left-[32px] text-white text-[26px] font-bold z-30">
        가입을 축하해요!
      </span>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-three top-[-15%] left-[-40%]" />
      <div className="absolute w-[80px] h-[80px] rounded-full bg-gradient-one top-[433px] left-[10px] z-10 blur-[8px]" />
      <div className="absolute w-[285px] h-[285px] rounded-full bg-gradient-one top-[500px] left-[150px] z-10 blur-[8px] rotate-[-30deg]" />
      <div
        className="w-[calc(100%-58px)] h-[563px] bg-blue3/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] z-20"
        onClick={onLink}
      >
        <p className="absolute top-[50px] left-[32px] text-white text-[26px] font-bold z-30">
          로그인 하러 가시쥬
        </p>
        <p className="absolute top-[150px] left-[32px] text-white text-[26px] font-bold z-30">
          임시지만 이거 클릭하면 갑니다.
        </p>
      </div>
    </div>
  );
};

export default Congrats;
