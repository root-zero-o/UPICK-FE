const congrats = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-five overflow-hidden">
      <span className="absolute top-[50px] left-[32px] text-white text-[26px] font-bold z-30">
        가입을 축하해요!
      </span>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-sign-p-two top-[-15%] left-[-40%]" />
      <div className="absolute w-[80px] h-[80px] rounded-full bg-welcome-p-one top-[433px] left-[10px] z-10 blur-[8px]" />
      <div className="absolute w-[285px] h-[285px] rounded-full bg-welcome-p-one top-[500px] left-[150px] z-10 blur-[8px] rotate-[-30deg]" />
      <div className="w-[calc(100%-58px)] h-[563px] bg-blue3/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] z-20"></div>
    </div>
  );
};

export default congrats;
