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
      <div className="w-full h-[140px] z-40 p-4 flex justify-evenly">
        <HomeCategoryBtn src={pharmacist} text="약사픽" />
        <HomeCategoryBtn src={people} text="대중픽" />
        <HomeCategoryBtn src={pharmacy} text="울동네약사" />
        <HomeCategoryBtn src={myPick} text="마이픽" />
      </div>
    </div>
  );
};

export default home;
