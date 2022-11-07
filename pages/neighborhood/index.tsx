import HeaderBG from "components/HeaderBG";
import React from "react";
import { SearchInput } from "../../components/SearchInput";
import best from "../../assets/images/icons/best.svg";
import BlurBtn from "components/ui/BlurBtn";
import location from "../../assets/images/icons/Location.svg";
import chat from "../../assets/images/icons/chat.svg";
import CategoryTitle from "components/ui/CategoryTitle";
import PharmacistProfile from "components/ui/PharmacistProfile";
import Seo from "components/Seo";
import Layout from "components/Layout";
import NavBar from "components/NavBar";
import CategoryBar from "components/CategoryBar";
import PharmacistTime from "components/ui/PharmacistTime";

import { samplePharmacistData } from "../../lib/sampleData";

const index = () => {
  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="home" />
      <div className=" w-full flex flex-col items-center">
        <HeaderBG
          fullWidth="100%"
          fullHeight="350px"
          fullTop="-200px"
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
        <SearchInput top="2%" width={70} />
        <div className="home-section-wrapper z-40 pb-4">
          <div className="flex w-full justify-evenly">
            <BlurBtn src={best} text="인기순" />
            <BlurBtn src={location} text="거리순" />
            <BlurBtn src={chat} text="약사상담" />
          </div>
        </div>
        <div className="flex flex-col items-center w-[60%] py-6">
          <span className="text-lg text-darkblue2 font-bold mb-2">
            울동네약사
          </span>
          <span className="text-sm text-coolgray4 leading-5 block font-light">
            우리지역 약사님들과의 비대면 온라인 상담으로
          </span>
          <span className="text-sm text-coolgray4 leading-5 block font-light">
            나에게 딱 맞는 영양제를 골라보세요.
          </span>
        </div>
        <div className="home-section-wrapper py-4">
          <CategoryTitle title="가장 인기많은 약사순" subtitle="" link="/" />
          <div className="flex w-full justify-evenly py-4">
            {samplePharmacistData.map((v, i) => {
              return (
                <PharmacistProfile
                  key={i}
                  pharmacist={v.name}
                  pharmacy={v.pharmacy_name}
                  link={`/neighborhood/detail/${v.id}`}
                  meter={v.meter}
                />
              );
            })}
          </div>
          <div className="w-full h-[9px] bg-coolgray2" />
        </div>
        <CategoryBar />
        <div className="flex flex-col w-full divide-y-[1px] divide-blue3 px-6 pb-10">
          <PharmacistTime
            name="차은우"
            pharmacy="잘생김"
            time="22:00 ~ 24:00"
            location="청주시 금천동"
            distance={365}
            isActive={true}
          />
          <PharmacistTime
            name="차은우"
            pharmacy="잘생김"
            time="22:00 ~ 24:00"
            location="청주시 금천동"
            distance={365}
            isActive={false}
          />
        </div>
      </div>

      <NavBar location="neighborhood" />
    </Layout>
  );
};

export default index;
