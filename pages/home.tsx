import React, { useEffect } from "react";
import { SearchInput } from "../components/SearchInput";
import Seo from "components/Seo";
import HeaderBG from "../components/HeaderBG";
import CategoryTitle from "components/ui/CategoryTitle";
import TextCard from "components/TextCard";
import PharmacistProfile from "components/ui/PharmacistProfile";
import ProductProfile from "components/ui/ProductProfile";
import Layout from "../components/Layout";
import Footer from "components/ui/Footer";
import AdSlide from "components/ui/AdSlide";
import HomeCategoryBtn from "components/ui/HomeCategoryBtn";
import { sliceText } from "lib/utils";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { selectPostings, __getPostings } from "store/modules/postingSlice";

const Home = () => {
  const postings = useAppSelector(selectPostings);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(__getPostings());
  }, []);

  const data = postings.postings.slice(0, 5);

  return (
    <Layout home={true} title="" isWhite={true} icon={true}>
      <Seo title="home" />
      <div className=" w-full flex flex-col pb-16 items-center">
        <HeaderBG
          fullWidth="100%"
          fullHeight="350px"
          fullTop="-160px"
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
        <SearchInput top="150px" width={88} />
        <div className="z-40 w-full px-2 pt-4">
          <h1 className="text-white text-2xl font-bold z-40 px-6">
            최대일곱글자임님, 반가워요!
          </h1>
        </div>
      </div>

      <div className="home-section-wrapper">
        <CategoryTitle
          title="약사픽,"
          subtitle="가장 추천하는 영양제"
          link="/article"
        />
        <AdSlide />
        <div className="divide-y-[1px] divide-coolgray3 px-12 ">
          {data?.map((v, i) => {
            return (
              <TextCard
                key={i}
                id={v.id}
                title={v.title}
                text={sliceText(v.content)}
                link={`/article/detail/${v.id}`}
              />
            );
          })}
        </div>
        <div className="w-full h-[9px] bg-coolgray2" />
      </div>

      <div className="home-section-wrapper">
        <CategoryTitle
          title="대중픽,"
          subtitle="가장 인기좋은 영양제"
          link="/"
        />
        <div className="flex py-6 w-full justify-evenly">
          <HomeCategoryBtn src="" text="건강고민" link="/" />
          <HomeCategoryBtn src="" text="연령" link="/" />
          <HomeCategoryBtn src="" text="원료" link="/" />
          <HomeCategoryBtn src="" text="성별" link="/" />
        </div>
      </div>
      <div className="home-section-wrapper">
        <CategoryTitle title="우리동네약사" subtitle="" link="/neighborhood/" />
        <div className=" grid grid-cols-3 px-4 py-4">
          <PharmacistProfile
            pharmacist="차은우"
            pharmacy="잘생김"
            link="/"
            meter={1231}
          />
          <PharmacistProfile
            pharmacist="차은우"
            pharmacy="잘생김"
            link="/"
            meter={1231}
          />
          <PharmacistProfile
            pharmacist="차은우"
            pharmacy="잘생김"
            link="/"
            meter={1231}
          />
          <PharmacistProfile
            pharmacist="차은우"
            pharmacy="잘생김"
            link="/"
            meter={1231}
          />
          <PharmacistProfile
            pharmacist="차은우"
            pharmacy="잘생김"
            link="/"
            meter={1231}
          />
          <PharmacistProfile
            pharmacist="차은우"
            pharmacy="잘생김"
            link="/"
            meter={1231}
          />
        </div>
      </div>
      <div className="home-section-wrapper pb-4">
        <CategoryTitle title="최근 봤던 약" subtitle="" link="/" />
        <div className="flex py-4 w-full justify-evenly">
          <ProductProfile
            company="온누리"
            name="프리미엄 오메가쓰리"
            link="/"
          />
          <ProductProfile company="부광약품" name="올인핏" link="/" />
          <ProductProfile company="경남제약" name="밸런스케어 VIP" link="/" />
          <ProductProfile company="경남제약" name="밸런스케어 VIP" link="/" />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
