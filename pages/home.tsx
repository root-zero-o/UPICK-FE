import React from "react";
import { SearchInput } from "../components/SearchInput";
import Image from "next/image";
import hiHand from "../assets/images/Hi hand 1.svg";
import HeaderBG from "../components/HeaderBG";
import Header from "../components/Header";
import pharmacist from "../assets/images/icons/pharmacist.svg";
import people from "../assets/images/icons/people.svg";
import pharmacy from "../assets/images/icons/pharmacy.svg";
import myPick from "../assets/images/icons/myPick.svg";
import HomeCategoryBtn from "../components/ui/HomeCategoryBtn";
import CategoryTitle from "components/ui/CategoryTitle";
import TextCard from "components/TextCard";
import fullHeart from "../assets/images/icons/fullHeart.svg";

const home = () => {
  return (
    <div className="  w-full h-full bg-lightGray">
      <div className="w-full h-[270px] relative flex flex-col items-center">
        <HeaderBG
          fullWidth="100%"
          fullHeight="350px"
          fullTop="-40%"
          innerWidth="504px"
          innerHeight="504px"
          innerTop="-35.21%"
          innerLeft="-32%"
          outerWidth="504px"
          outerHeight="504px"
          outerTop="-28.57%"
          outerLeft="-31.73%"
          showInnerDIv={true}
          showOuterDiv={false}
          rot={150}
          bgFlag={false}
        />
        <h1 className="font-sdg-b z-40 text-white text-[23px] absolute top-[60%] left-[10%]">
          김준호님, 반가워요
        </h1>
        <div className="absolute top-[40%] left-[40%]">
          <Image alt="" src={hiHand} />
        </div>
        <SearchInput top="78%" />
      </div>
      <Header />
      <div className="w-full z-40 px-4 pt-4 pb-6 flex justify-evenly">
        <HomeCategoryBtn src={pharmacist} text="약사픽" />
        <HomeCategoryBtn src={people} text="대중픽" />
        <HomeCategoryBtn src={pharmacy} text="울동네약사" />
        <HomeCategoryBtn src={myPick} text="마이픽" />
      </div>
      <CategoryTitle title="약사픽" subtitle="가장 추천하는 약" />
      <TextCard
        title="무더위, 에너지가 없다면?"
        text="무더위로 인해 체력이 많이 떨어지는 날에는 보양식들을 많이 찾는데요,
            비타민계에서 보양식에 해당하는 것은 바로"
        likes={354}
      />
      <CategoryTitle title="대중픽" subtitle="가장 인기좋은 구독제" />
      <div className="w-full px-4 flex justify-evenly py-6 ">
        <div className="w-[131px] h-[155px] rounded-[15px] bg-gray shadow-lg flex flex-col">
          <div className="w-full h-1/4 flex justify-end px-2">
            <Image alt="" src={fullHeart} />
          </div>
          <div className="w-full h-3/4 bg-home-popularPick-card rounded-[15px] flex flex-col items-center justify-end">
            <span className="w-full flex justify-start px-4 text-[15px] font-sdg-b">
              복합 징코플러스
            </span>
            <div className="flex space-x-1 pb-2 ml-2">
              <div className="pt-[4px] px-[10px] bg-navy text-white font-sdg-m flex rounded-[29px] text-[12px]">
                고함량
              </div>
              <div className="pt-[4px] px-[10px] bg-navy text-white font-sdg-m flex rounded-[29px] text-[12px]">
                가성비
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-[131px] h-[155px] rounded-[15px] bg-gray shadow-lg flex flex-col">
          <div className="w-full h-1/4 flex justify-end px-2">
            <Image alt="" src={fullHeart} />
          </div>
          <div className="w-full h-3/4 bg-home-popularPick-card rounded-[15px] flex flex-col items-center justify-end">
            <span className="w-full text-[15px] font-sdg-b flex justify-start px-4">
              바소플러스
            </span>
            <div className="flex space-x-1 pb-2 ml-2">
              <div className="pt-[4px] px-[10px] bg-navy text-white font-sdg-m flex rounded-[29px] text-[12px]">
                다기능
              </div>
              <div className="pt-[4px] px-[10px] bg-navy text-white font-sdg-m flex rounded-[29px] text-[12px]">
                고함량
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
