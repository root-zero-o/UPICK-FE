import HeaderBG from "components/HeaderBG";
import SignBottom from "components/SignInUp/SignBottom";
import SignInput from "components/SignInUp/SignInput";
import SignArrow from "components/SignInUp/SignArrow";
import SignHeader from "components/SignInUp/SignHeader";
import SignInputBottom from "components/SignInUp/SignInputBottom";
import Seo from "components/Seo";
import Image from "next/image";
import DisablePW from "assets/images/icons/DisablePW.svg";
import Hand from "assets/images/Hand.svg";

const signin = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full font-sdg-b">
      <Seo title="로그인" />
      <HeaderBG
        fullWidth="100%"
        fullHeight="643px"
        fullTop="-37.56%"
        innerWidth="504px"
        innerHeight="504px"
        innerTop="75.78%"
        innerLeft="-6.4%"
        outerWidth="504px"
        outerHeight="504px"
        outerTop="10%"
        outerLeft="-31.73%"
        showInnerDIv={true}
        showOuterDiv={true}
        rot={0}
        bgFlag={true}
      />
    </div>
  );
};

export default signin;
