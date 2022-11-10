import Seo from "components/Seo";
import useLoading from "hooks/useLoading";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Logo from "../assets/images/logos/Logo.svg";

const Welcome = () => {
  const loading = useLoading();
  const router = useRouter();
  useEffect(() => {
    if (!loading) {
      router.push(`/signin`);
    }
  }, [loading, router]);
  return (
    // <div className="w-full h-screen bg-green overflow-y-hidden">
    // <Seo title="welcome" />
    // <div className="relative w-full h-full">
    // <div className="w-[285.8px] h-[285.8px] absolute bg-gradient-one blur-[10px] rounded-full top-[-60px] left-[200px]" />
    // <div className="w-[756px] h-[739px] absolute bg-gradient-three rounded-full top-[222px] left-[-249px]" />
    // <div className="w-[288.39px] h-[288.39px] absolute bg-gradient-one blur-[10px] rounded-full top-[607.19px] left-[-130px]" />
    // <div className="w-[70.79px] h-[70.79px] absolute bg-gradient-one blur-[10px] rounded-full top-[438.39px] left-[321.43px]" />
    // <div className="flex flex-col items-center justify-start w-full h-full mt-[360px] absolute">
    //     <span className="font-sdg-b text-white text-[18px] leading-[36px] z-10 ">
    //       나에게 딱 맞는 건강기능식품
    //     </span>
    //   </div>
    // </div>
    // </div>
    <div className="absolute w-full h-full top-0 left-0 bg-green overflow-hidden">
      <Seo title="welcome" />
      {/* <div className="w-[285.8px] h-[285.8px] absolute bg-gradient-one blur-[10px] rounded-full top-[-7%] right-[-35%]" />
      <div className="w-[756px] h-[739px] absolute bg-gradient-three rounded-full top-[26%] left-[-65%]" />
      <div className="w-[288.39px] h-[288.39px] absolute bg-gradient-one blur-[10px] rounded-full bottom-[-10%] left-[-35%]" />
      <div className="w-[70.79px] h-[70.79px] absolute bg-gradient-one blur-[10px] rounded-full top-[52%] right-[0]" /> */}
      <div className="w-[285.8px] h-[285.8px] absolute bg-gradient-one blur-[10px] rounded-full top-[-60px] left-[200px]" />
      <div className="w-[756px] h-[739px] absolute bg-gradient-three rounded-full top-[222px] left-[-249px]" />
      <div className="w-[288.39px] h-[288.39px] absolute bg-gradient-one blur-[10px] rounded-full top-[607.19px] left-[-130px]" />
      <div className="w-[70.79px] h-[70.79px] absolute bg-gradient-one blur-[10px] rounded-full top-[438.39px] left-[341.43px]" />
      <div className="flex flex-col items-center justify-start w-full h-full mt-[360px] absolute">
        <span className="font-sdg-b text-white text-[18px] leading-[36px] z-10 ">
          내 손안 울동네약국
        </span>
        <Image alt="" src={Logo} />
      </div>
    </div>
  );
};

export default Welcome;
