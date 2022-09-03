import Layout from "components/Layout";
import Seo from "components/Seo";
import MyPickHeader from "components/mypick/MyPickHeader";
import BlurBtn from "components/ui/BlurBtn";
import fullHeart from "../../../assets/images/icons/fullHeart.svg";
import chat from "../../../assets/images/icons/chat.svg";
import CategoryTitle from "components/ui/CategoryTitle";
import HealthMarker from "components/mypick/HealthMarker";
import HealthPoints from "components/mypick/HealthPoints";
import MyMedicineList from "components/mypick/MyMedicineList";
import HxBtn from "components/mypick/HxBtn";
import Checkbox from "components/mypick/CheckBox";
import NavBar from "components/NavBar";
import RecentMed from "components/mypick/RecentMed";
import { useState } from "react";

const TemplateMyPick = () => {
  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="mypick" />
      <div className=" w-full flex flex-col items-center">
        <MyPickHeader />
        {/* 회원 정보 */}
        <div className="flex justify-between w-[90%] py-6 z-40">
          <span className="text-lg text-white font-semibold mb-2">
            홍길동님 (남자/26세)
          </span>
          <span className="text-sm text-coolgray4 leading-5 block font-light">
            아이콘
          </span>
        </div>

        <div className="w-[90%] flex justify-between z-40">
          <div className="w-[80px] h-[80px] bg-yellow1 rounded-full border-8 border-white flex justify-center items-center">
            {/* <div> */}
            <span>64점</span>
            {/* </div> */}
          </div>
          <div className="w-[70%] h-[80px] flex flex-col text-white">
            <div className="text-sm flex justify-between">
              <span>필수영양소</span>
              <span>13개</span>
            </div>
            <div className="text-xs">
              <span>12개의 부족 섭취 영양소가 있습니다.</span>
            </div>
            <div className="text-xs mt-2">
              <HealthPoints color="white" contents="면역력증진" />
              <HealthPoints color="white" contents="면역력증진" />
              <HealthPoints color="white" contents="면역력증진" />
            </div>
          </div>
        </div>
        {/* 현재 상태 버튼 */}
        <div className="z-40 bg-yellow flex text-sm">
          {["스트레스 긴장", "혈행개선", "항산화", "수면"].map(
            (value, index) => (
              <HealthMarker key={`health-marker-${index}`} contents={value} />
            )
          )}
        </div>
        {/* 찜 - 픽업 - 상담내역 버튼 */}
        <div className="w-full flex flex-col space-y-4 pt-4 z-40 pb-4">
          <div className="flex w-full justify-evenly">
            <BlurBtn src={fullHeart} text="찜" />
            <BlurBtn src={chat} text="픽업" />
            <BlurBtn src={chat} text="상담내역" />
          </div>
        </div>
        <CategoryTitle title="섭취 중인 영양제" subtitle="" link="/" />
        <div className="pt-4 mb-[20px]">
          {[
            "Bioton 5000mcg",
            "비타할로 비타민D 2000IU",
            "동아비타민C1000플러스",
            "장건강 365 프리바이오틱스 프로바이오틱스",
          ].map((value, index) => (
            <MyMedicineList
              key={`my-medicine-list-${index}`}
              contents={value}
            />
          ))}
        </div>
        {/* 나의 건강 이력 */}
        <CategoryTitle title="나의 건강 이력" subtitle="" link="/" />
        <div className="bg-blue4 mt-4 flex flex-col items-center justify-center w-[90%] h-[300px]  shadow-md rounded-lg">
          <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
            <HxBtn contents="진단여부" />
            <div className="mt-4 w-[80%] flex justify-between items-center">
              <Checkbox title="뇌졸증" active={true} />
              <Checkbox title="심장병" active={false} />
              <Checkbox title="고혈압" active={true} />
              <Checkbox title="당뇨병" active={true} />
              <Checkbox title="기타(암포함)" active={false} />
            </div>
          </div>
          <div className="mb-4 w-[80%] h-[4px] bg-blue2 rounded"></div>
          <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
            <HxBtn contents="신체활동" />
            <span className="text-xs mt-2 mb-4">
              (숨이 차는 평소보다 적절한 활동, 하루 20분 이상 시행한 날)
            </span>
            <div className="w-[80%] flex justify-between items-center">
              <Checkbox title="뇌졸증" active={false} />
              <Checkbox title="심장병" active={false} />
              <Checkbox title="고혈압" active={false} />
              <Checkbox title="당뇨병" active={false} />
              <Checkbox title="기타(암포함)" active={false} />
            </div>
          </div>
        </div>
      </div>
      {/* 최근 봤던 약 */}
      <CategoryTitle title="최근 봤던 약" subtitle="" link="/" />
      <div className="flex w-full justify-evenly py-4">
        <RecentMed pharmacy="온누리" med="프리미엄 오메가쓰리" />
      </div>
      <NavBar location="myPick" />
    </Layout>
  );
};

export default TemplateMyPick;
