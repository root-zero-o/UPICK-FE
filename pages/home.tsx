import React, { useEffect, useState } from "react";
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
import HealthProblemIcon from "assets/images/icons/health_problem.svg";
import AgeIcon from "assets/images/icons/age.svg";
import IngredientIcon from "assets/images/icons/ingredient.svg";
import GenderIcon from "assets/images/icons/gender.svg";
import NavBar from "components/NavBar";
import {
  selectPharmacists,
  __getPharmacists,
} from "store/modules/pharmacistsSlice";
import {
  selectRecentMerchandises,
  __getRecentMerchandises,
} from "store/modules/recentMerchandisesSlice";
import { useSelector } from "react-redux";
import { RootState } from "store/modules";
import { TypeMyPickData, TypeRecentMed } from "src/types/MyPickData";
import axios from "axios";

const Home = () => {
  const postings = useAppSelector(selectPostings);
  const pharmacists = useAppSelector(selectPharmacists);
  const recentMerchandises = useAppSelector(selectRecentMerchandises);
  const user = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useAppDispatch();
  const data = Array.from(postings?.postings).slice(0, 5);
  const pharmacistData = Array.from(pharmacists?.pharmacists).slice(0, 6);
  const recentMerchandisesData = Array.from(
    recentMerchandises?.recentMerchandises
  ).slice(0, 4);

  useEffect(() => {
    dispatch(__getPostings());
    dispatch(__getPharmacists());
    dispatch(__getRecentMerchandises());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isLogin, setIsLogin] = useState(false);

  const [token, setToken] = useState<string>("");
  // const token = localStorage.getItem("authorization");

  const [myPickData, setMyPickData] = useState<TypeMyPickData>(
    {} as TypeMyPickData
  );
  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/details`,
        headers: {
          Authorization: token,
        },
      });
      setMyPickData(result?.data?.data?._customer);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem("authorization");
    if (token) setToken(token);
    return setIsLogin(true);
  }, []);

  useEffect(() => {
    response();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(token)]);
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
        <SearchInput top="150px" width={88} link="search" />
        <div className="z-40 w-full px-2 pt-4">
          {isLogin ? (
            <h1 className="text-white text-2xl font-bold z-40 px-6">
              {myPickData?.name === "" ? "오늘도건강유픽러" : myPickData?.name}
              님, 반가워요!
            </h1>
          ) : (
            <h1 className="text-white text-2xl font-bold z-40 px-6">
              방문자님, 반가워요!
            </h1>
          )}
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
          link="/peoplePick/health"
        />
        <div className="flex py-6 w-full justify-evenly">
          <HomeCategoryBtn
            src={HealthProblemIcon}
            text="건강고민"
            link="/peoplePick/health"
          />
          <HomeCategoryBtn src={AgeIcon} text="연령" link="/peoplePick/age" />
          <HomeCategoryBtn
            src={IngredientIcon}
            text="원료"
            link="/peoplePick/effect"
          />
          <HomeCategoryBtn
            src={GenderIcon}
            text="성별"
            link="/peoplePick/gender"
          />
        </div>
      </div>
      <div className="home-section-wrapper">
        <CategoryTitle title="울동네약사" subtitle="" link="/neighborhood/" />
        <div className=" grid grid-cols-3 px-4 py-4">
          {pharmacistData?.map((value, index) => {
            return (
              <PharmacistProfile
                key={`phraList-${index}`}
                pharmacist={value.userName}
                pharmacy={value.pharmacyName}
                link={`/neighborhood/detail/${value.id}`}
                url={value.Image[0].url}
              />
            );
          })}
        </div>
      </div>
      <div className="home-section-wrapper pb-4">
        <CategoryTitle title="최근 봤던 약" subtitle="" link="/" />
        <div className="flex py-4 w-full justify-evenly">
          {recentMerchandisesData?.map((value, index) => {
            return (
              <ProductProfile
                key={`listlist-${index}`}
                company={value.company.name}
                name={value.name}
                link={`/medicineDetail/${value.id}`}
                url={value.Image.url}
              />
            );
          })}
        </div>
      </div>
      <NavBar location="home" />
      <Footer />
    </Layout>
  );
};

export default Home;
