import HeaderBG from "components/HeaderBG";
import React from "react";
import { SearchInput } from "../../components/SearchInput";
import Header from "components/Header";
import best from "../../assets/images/icons/best.svg";
import BlurBtn from "components/ui/BlurBtn";
import location from "../../assets/images/icons/Location.svg";
import chat from "../../assets/images/icons/chat.svg";
import CategoryTitle from "components/ui/CategoryTitle";
import PharmacistProfile from "components/ui/PharmacistProfile";

const index = () => {
  return (
    <div className=" w-full bg-lightGray">
      <div className="w-full h-[270px] relative flex flex-col items-center">
        <HeaderBG
          fullWidth="100%"
          fullHeight="350px"
          fullTop="-40%"
          innerWidth="504px"
          innerHeight="504px"
          innerTop="15%"
          innerLeft="-12%"
          outerWidth="504px"
          outerHeight="504px"
          outerTop="-28.57%"
          outerLeft="-31.73%"
          showInnerDIv={true}
          showOuterDiv={false}
          rot={80}
          bgFlag={false}
        />

        <SearchInput top="48%" />
        <div className="home-section-wrapper z-40 absolute bottom-[-4%]">
          <BlurBtn src={best} text="인기순" />
          <BlurBtn src={location} text="거리순" />
          <BlurBtn src={chat} text="약사상담" />
        </div>
      </div>
      <Header home={false} title="울동네약사" isWhite={true} />
      <CategoryTitle title="가장 가까운 거리순" subtitle="" link="/" />
      <div className="home-section-wrapper">
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={true}
          meter={123}
        />
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={true}
          meter={123}
        />
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={true}
          meter={123}
        />
      </div>
      <CategoryTitle title="우리 동네 약사 상담" subtitle="" link="/" />
    </div>
  );
};

export default index;
