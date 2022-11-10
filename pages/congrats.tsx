import useClickRoute from "hooks/useClickRoute";
import LogoMedi from "../assets/images/logos/LogoMedi.svg";
import Image from "next/image";

const Congrats = () => {
  // 링크이동 임시파일입니다.
  const onLink = useClickRoute({ link: "/signin" });
  return (
    <div className="relative h-screen flex items-start justify-center bg-gradient-five overflow-hidden">
      <span className="absolute top-[50px] left-[32px] text-white text-[26px] font-bold z-30">
        가입을 축하해요!
      </span>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-three top-[-15%] left-[-40%]" />
      <div className="absolute w-[80px] h-[80px] rounded-full bg-gradient-one top-[433px] left-[10px] z-10 blur-[8px]" />
      <div className="absolute w-[285px] h-[285px] rounded-full bg-gradient-one top-[500px] left-[150px] z-10 blur-[8px] rotate-[-30deg]" />
      <div
        className="basicText w-[calc(100%-58px)] h-[335px] bg-blue3/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[51px] z-20 mt-[181px] flex items-center justify-center flex-col"
        onClick={onLink}
      >
        <p>유픽에서는</p>
        <p>나에게 딱 맞는 영양제를</p>
        <p className="mb-[33px]">추천받을 수 있어요</p>
        <Image alt="" src={LogoMedi} />
      </div>
      <style jsx>{`
        .basicText {
          width:font-weight: 500;
          font-size: 16px;
          line-height: 21px;
          color: #F7FAFF;
        }
      `}</style>
    </div>
  );
};

export default Congrats;
