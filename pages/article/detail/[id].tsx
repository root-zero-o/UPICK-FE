import KeywordChip from "components/KeywordChip";
import Layout from "components/Layout";

import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { selectPostings, __getPostings } from "store/modules/postingSlice";
import Image from "next/image";
import MerchandiseBG from "../../../assets/images/MerchandiseBG.svg";
import FullHeartIcon from "assets/images/icons/heart-fill.svg";
import MerchandiseCard from "components/article/MerchandiseCard";

const Article = () => {
  const router = useRouter();
  const id = router.query.id;
  const postings = useAppSelector(selectPostings);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(__getPostings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = postings.postings;
  const article = data?.filter((v) => v.id === Number(id))[0];
  const profileImage = article?.pharmacist?.Image[0]?.url;

  return (
    <Layout isWhite={false} icon>
      <div className="px-[30px] pt-[50px]">
        <span className="text-sm font-bold text-darkblue1">
          {article?.pharmacist.userName} 약사
        </span>
        <span className="text-sm font-light text-coolgray3 ml-5">
          {article?.pharmacist.pharmacyName}
        </span>
        <div className="pt-3 pb-2 border-b-[1px] border-coolgray3">
          <span className="font-bold text-darkblue1">{article?.title}</span>
        </div>
        <div className="flex row">
          <div>
            <div className="flex flex-wrap w-[220px]">
              {article?.PostingToAgeRange?.map((v, i) => {
                return (
                  <KeywordChip key={i} keyword={v.ageRange.name} style="mr-2" />
                );
              })}
              {article?.PostingToConsider?.map((v, i) => {
                return (
                  <KeywordChip key={i} keyword={v.consider.name} style="mr-2" />
                );
              })}
              {article?.PostingToIngredient?.map((v, i) => {
                return (
                  <KeywordChip
                    key={i}
                    keyword={v.ingredient.name}
                    style="mr-2"
                  />
                );
              })}
            </div>
            <div className=" p-[10px] w-[233px] text-sm text-darkblue2 font-medium break-words whitespace-pre-wrap">
              {article?.MerchandiseToPosting[0].merchandise.description}
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${profileImage})` }}
            className="w-[90px] h-[113px] ml-4 mt-2 rounded-md  bg-cover"
          />
        </div>
        <div className="mt-4 text-sm bg-white p-4 rounded-md break-words whitespace-pre-wrap">
          {article?.content}
        </div>
      </div>
      <div className="flex justify-between px-8 pt-4">
        <span className=" text-lg font-bold text-darkblue1">
          추천 약 리스트
        </span>
        <div className="flex flex-col">
          <Image src={FullHeartIcon} alt="" />
          <span className="text-sm text-darkblue1 font-bold">123</span>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "800px",
          position: "relative",
        }}
      >
        <Image layout="fill" src={MerchandiseBG} alt="" />
        <div className="absolute top-4 left-10 flex flex-col gap-4 pb-20">
          {article?.MerchandiseToPosting?.map((v, i) => {
            return (
              <MerchandiseCard
                key={i}
                id={v.merchandiseId}
                index={i}
                image={v.merchandise.Image.url}
                name={v.merchandise.name}
                rating={v.merchandise.rating}
                description={v.merchandise.description}
              />
            );
          })}
        </div>
      </div>
      <div className="backdrop-blur bg-searchInput shadow-md w-[100%] h-[60px] fixed bottom-0 px-5 py-[10px]">
        <div className="w-[335px] h-[40px] bg-white rounded-full cursor-pointer mx-5 flex items-center justify-center">
          <span className="text-md font-bold text-coolgray3">
            약국에 <span className="text-blue2">영양제 픽업 예약하기</span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Article;
