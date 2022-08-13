import React from "react";
import { SearchInput } from "../components/SearchInput";
import Seo from "components/Seo";
import HeaderBG from "../components/HeaderBG";
import Header from "../components/Header";
import pharmacist from "../assets/images/icons/pharmacist.svg";
import people from "../assets/images/icons/people.svg";
import pharmacy from "../assets/images/icons/pharmacy.svg";
import myPick from "../assets/images/icons/myPick.svg";
import HomeCategoryBtn from "../components/ui/HomeCategoryBtn";
import CategoryTitle from "components/ui/CategoryTitle";
import TextCard from "components/TextCard";
import ProductCard from "components/ui/ProductCard";
import PharmacistProfile from "components/ui/PharmacistProfile";
import ProductProfile from "components/ui/ProductProfile";

const home = () => {
  return (
    <div className="  w-full bg-coolgray1">
      <Seo title="home" />
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
        <h2 className="z-40 text-white absolute top-[60%] left-[10%] font-bonBold text-2xl">
          김준호님, 반가워요
        </h2>
        <SearchInput top="78%" />
      </div>
      <Header home={true} isWhite={true} icon={true} />
      <div className="home-section-wrapper pt-4">
        {/* link 연결 필요 */}
        <HomeCategoryBtn src={pharmacist} text="약사픽" link="/" />
        <HomeCategoryBtn src={people} text="대중픽" link="/" />
        <HomeCategoryBtn src={pharmacy} text="울동네약사" link="/" />
        <HomeCategoryBtn src={myPick} text="마이픽" link="/" />
      </div>
      <CategoryTitle title="약사픽," subtitle="가장 추천하는 약" link="/" />
      <TextCard
        title="무더위, 에너지가 없다면?"
        text="무더위로 인해 체력이 많이 떨어지는 날에는 보양식들을 많이 찾는데요,
            비타민계에서 보양식에 해당하는 것은 바로"
        likes={354}
        // link 연결 필요
        link="/"
      />
      {/* link 연결 필요 */}
      <CategoryTitle title="대중픽," subtitle="가장 인기좋은 구독제" link="/" />
      <div className="home-section-wrapper pt-2 ">
        {/* link 연결 필요 */}
        <ProductCard
          title="복합 징코플러스"
          keyword1="고함량"
          keyword2="가성비"
          link="/"
        />
        {/* link 연결 필요 */}
        <ProductCard
          title="바소플러스"
          keyword1="다기능"
          keyword2="고함량"
          link="/"
        />
      </div>
      {/* link 연결 필요 */}
      <CategoryTitle title="우리동네약사" subtitle="" link="/neighborhood/" />
      {/* link 연결 필요 */}
      <div className="home-section-wrapper grid grid-cols-3">
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={false}
        />
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={false}
        />
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={false}
        />
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={false}
        />
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={false}
        />
        <PharmacistProfile
          pharmacist="차은우"
          pharmacy="잘생김"
          link="/"
          location={false}
        />
      </div>
      {/* link 연결 필요 */}
      <CategoryTitle title="최근 봤던 약" subtitle="" link="/" />
      <div className="home-section-wrapper pb-6">
        {/* link 연결 필요 */}
        <ProductProfile company="온누리" name="프리미엄 오메가쓰리" link="/" />
        <ProductProfile company="부광약품" name="올인핏" link="/" />
        <ProductProfile company="경남제약" name="밸런스케어 VIP" link="/" />
      </div>
    </div>
  );
};

export default home;
