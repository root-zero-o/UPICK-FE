import HeaderBG from "components/HeaderBG";
import React from "react";
import { SearchInput } from "../../components/SearchInput";
import Header from "components/Layout";
import best from "../../assets/images/icons/best.svg";
import BlurBtn from "components/ui/BlurBtn";
import location from "../../assets/images/icons/Location.svg";
import chat from "../../assets/images/icons/chat.svg";
import CategoryTitle from "components/ui/CategoryTitle";
import PharmacistProfile from "components/ui/PharmacistProfile";
import PharmacistTime from "components/ui/PharmacistTime";
import Seo from "components/Seo";
import Layout from "components/Layout";
import NavBar from "components/NavBar";

const index = () => {
  return (
    <Layout home={false} title="울동네약사" isWhite={true} icon={true}>
      <Seo title="home" />
      <div className=" w-full flex flex-col items-center">
        <HeaderBG
          fullWidth="100%"
          fullHeight="350px"
          fullTop="-140px"
          innerWidth="504px"
          innerHeight="504px"
          innerTop="20.21%"
          innerLeft="-30%"
          outerWidth="504px"
          outerHeight="504px"
          outerTop="-28.57%"
          outerLeft="-31.73%"
          showInnerDIv={true}
          showOuterDiv={false}
          rot={150}
          bgFlag={false}
        />
        <SearchInput top="11%" />
        <div className="home-section-wrapper z-40 pt-[55px]">
          <BlurBtn src={best} text="인기순" />
          <BlurBtn src={location} text="거리순" />
          <BlurBtn src={chat} text="약사상담" />
        </div>
        <CategoryTitle title="가장 가까운 거리순" subtitle="" link="/" />
        <div className="home-section-wrapper">
          <PharmacistProfile
            pharmacist="차은우"
            pharmacy="잘생김"
            link="/neighborhood/detail/1"
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
        <div className="home-section-wrapper z-40 pb-20">
          <div className="w-[95%] divide-y-[1px] divide-coolgray3  bg-white rounded-[15px] flex flex-col shadow-md">
            <PharmacistTime
              name="차은우"
              able={false}
              startTime="13:00"
              endTime="16:00"
              link="/chat"
            />
            <PharmacistTime
              name="차은우"
              able={true}
              startTime="13:00"
              endTime="16:00"
              link="/chat"
            />
            <PharmacistTime
              name="차은우"
              able={true}
              startTime="13:00"
              endTime="16:00"
              link="/chat"
            />
          </div>
        </div>
      </div>
      <NavBar location="neighborhood" />
    </Layout>
  );
};

export default index;
