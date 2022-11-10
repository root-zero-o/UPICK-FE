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
import { useRouter } from "next/router";

const index = () => {
  const pharList = [
    {
      name: "은우",
      address: "냥냥 약국",
      distance: "1231m",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHgAXbtHL7mOVPtbxbuMVt7JTfgH24VETfA&usqp=CAU",
    },
    {
      name: "정현규",
      address: "연애 약국",
      distance: "122m",
      url: "data:image/jpeg;base64,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",
    },
    {
      name: "정헝구",
      address: "환승 약국",
      distance: "777m",
      url: "data:image/jpeg;base64,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",
    },
  ];

  const Router = useRouter();
  const handleTabMenu = (menu: number) => {
    switch (menu) {
      case 1:
        Router.push("/mypick/jjim/med");
        return;
      case 2:
        Router.push("/mypick/pickup");
        return;
      case 3:
        Router.push("/chat");
        return;
      default:
        return;
    }
  };

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
            <BlurBtn func={() => handleTabMenu(3)} src={chat} text="약사상담" />
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
            {pharList?.map((v, i) => {
              return (
                <PharmacistProfile
                  key={i}
                  pharmacist={v.name}
                  url={v.url}
                  pharmacy={v.address}
                  link={`/`}
                  meter={v.distance}
                />
              );
            })}
          </div>
          <div className="w-full h-[9px] bg-coolgray2" />
        </div>
        <CategoryBar />
        <div className="flex flex-col w-full divide-y-[1px] divide-blue3 px-6 pb-10">
          <PharmacistTime
            name="은우"
            pharmacy="냥냥"
            time="22:00 ~ 24:00"
            location="청주시 금천동"
            distance={1231}
            isActive={true}
          />
          <PharmacistTime
            name="정현규"
            pharmacy="환승"
            time="22:00 ~ 24:00"
            location=""
            distance={777}
            isActive={false}
          />
        </div>
      </div>

      <NavBar location="neighborhood" />
    </Layout>
  );
};

export default index;
