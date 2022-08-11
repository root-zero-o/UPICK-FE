import Image from "next/image";
import Logo from "assets/images/Logo.svg";
import Seo from "components/Seo";

const welcome = () => {
  return (
    <div className="w-full h-screen bg-green overflow-hidden">
      <Seo title="welcome" />
      <div className="relative w-full h-full">
        <div className="w-[285.8px] h-[285.8px] absolute bg-welcome-p-one blur-[10px] rounded-full top-[-60px] left-[200px]" />
        <div className="w-[756px] h-[739px] absolute bg-welcome-p-two rounded-full top-[222px] left-[-249px]" />
        <div className="w-[288.39px] h-[288.39px] absolute bg-welcome-p-one blur-[10px] rounded-full top-[607.19px] left-[-130px]" />
        <div className="w-[70.79px] h-[70.79px] absolute bg-welcome-p-one blur-[10px] rounded-full top-[438.39px] left-[321.43px]" />
        <div className="flex flex-col items-center justify-start w-full h-full mt-[296px] absolute">
          <span className="font-sdg-b text-white text-[18px] leading-[36px] z-10 mb-[20px]">
            나에게 딱 맞는 건강기능식품
          </span>

          <Image src={Logo} width="234.29px" height="71px" alt="" />
        </div>
      </div>
    </div>
  );
};

export default welcome;
