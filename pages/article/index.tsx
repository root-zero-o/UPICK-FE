import HeaderBG from "components/HeaderBG";
import React, { useEffect, useState } from "react";
import Seo from "components/Seo";
import Layout from "components/Layout";
import NavBar from "components/NavBar";

import Image from "next/image";
import Search from "assets/images/icons/Search.svg";
import FullHeartIcon from "assets/images/icons/heart-fill.svg";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { selectPostings, __getPostings } from "store/modules/postingSlice";
import { MerchandiseToPostingDataType } from "src/types/PostingData";
import useClickRoute from "hooks/useClickRoute";
import axios from "axios";
import { useRouter } from "next/router";

const ArticleCard = ({
  title,
  content,
  profileImage,
  MerchandiseToPosting,
  id,
}: {
  title: string;
  content: string;
  profileImage: string;
  MerchandiseToPosting: MerchandiseToPostingDataType[];
  id: number;
}) => {
  const onLink = useClickRoute({ link: `/article/detail/${id}` });

  return (
    <div
      onClick={onLink}
      className="w-[100%]  flex flex-col items-end bg-coolgray1 rounded-md shadow-lg p-4 relative cursor-pointer"
    >
      <div className="w-[100%] flex justify-between items-center px-2 border-b-[1px] py-3 border-coolgray3">
        <span className="text-lg font-bold text-darkblue2 break-words ">
          {title}
        </span>
        <Image src={FullHeartIcon} alt="" />
      </div>
      <div className="p-2 w-[100%]">
        <span className=" text-sm text-coolgray4">
          {content.slice(0, 105)}...
        </span>
      </div>
      <div className="flex gap-2">
        {MerchandiseToPosting.map((v, i) => {
          return (
            <div
              key={i}
              style={{ backgroundImage: `url(${v.merchandise.Image.url})` }}
              className="w-[48px] h-[56px] rounded-md border-[1px] border-coolgray2 bg-cover"
            />
          );
        })}
      </div>
      <div
        style={{ backgroundImage: `url(${profileImage})` }}
        className="w-[54px] h-[54px] rounded-full  absolute bottom-[-20px] left-4 bg-cover bg-center "
      />
    </div>
  );
};

const Index = () => {
  const postings = useAppSelector(selectPostings);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(3);
  const [famousPostings, setFamousPostings] = useState<any[]>([]);
  const router = useRouter();

  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/posting?orderby=like`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      setFamousPostings(result?.data?.data.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(__getPostings());
    response();
  }, []);

  const data = postings.postings;
  console.log(famousPostings);

  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="home" />
      <div className=" w-full flex flex-col items-center pb-4">
        <HeaderBG
          fullWidth="100%"
          fullHeight="350px"
          fullTop="-250px"
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
        <div className="w-[70%] h-[48px] bg-searchInput rounded-[24px] backdrop-blur flex items-center pl-2 mx-auto absolute top-[20px] border-[1px] border-[#EEEEEE]">
          <Image src={Search} alt="" className="ml-5" />
          <span className="text-sm text-white">식곤증 완화 비타민</span>
        </div>
        <div className="home-section-wrapper">
          <div className="w-[100%] flex items-center justify-end mt-8 px-5">
            <div onClick={() => setValue(1)} className="px-2 cursor-pointer">
              <span
                className={
                  value === 1
                    ? "text-sm text-darkblue1 font-bold"
                    : "text-sm text-coolgray3"
                }
              >
                우리동네
              </span>
            </div>
            <span className="text-sm text-coolgray3">|</span>
            <div onClick={() => setValue(2)} className="px-2 cursor-pointer">
              <span
                className={
                  value === 2
                    ? "text-sm text-darkblue1 font-bold"
                    : "text-sm text-coolgray3"
                }
              >
                인기순
              </span>
            </div>
            <span className="text-sm text-coolgray3">|</span>
            <div onClick={() => setValue(3)} className="px-2 cursor-pointer">
              <span
                className={
                  value === 3
                    ? "text-sm text-darkblue1 font-bold"
                    : "text-sm text-coolgray3"
                }
              >
                최신순
              </span>
            </div>
          </div>
        </div>
        {value === 3 && (
          <div className="home-section-wrapper px-5 pb-10">
            <span className="font-medium text-lg text-darkblue1">
              약사픽 최신 칼럼
            </span>
            <div className="flex flex-col gap-10">
              {data?.map((v, i) => {
                return (
                  <ArticleCard
                    key={i}
                    id={v.id}
                    title={v.title}
                    content={v.content}
                    profileImage={v.pharmacist.Image[0].url}
                    MerchandiseToPosting={v.MerchandiseToPosting}
                  />
                );
              })}
            </div>
          </div>
        )}
        {value === 2 && (
          <div className="home-section-wrapper px-5 pb-10 ">
            <span className="font-medium text-lg text-darkblue1 mx-auto">
              약사픽 주간 <span className="font-bold">TOP 5</span>
            </span>
            <div className="flex flex-col items-center">
              <span className="text-sm text-coolgray4">인기 키워드</span>
              <div className="flex py-[10px] gap-2">
                <span className="px-2 py-1 rounded-md bg-coolgray3 text-white text-sm">
                  피로개선
                </span>
                <span className="px-2 py-1 rounded-md bg-coolgray3 text-white text-sm">
                  비타민C
                </span>
                <span className="px-2 py-1 rounded-md bg-coolgray3 text-white text-sm">
                  항산화
                </span>
                <span className="px-2 py-1 rounded-md bg-coolgray3 text-white text-sm">
                  2030대 청년
                </span>
              </div>
            </div>
            {famousPostings.map((v, i) => {
              return (
                <div
                  key={i}
                  onClick={() => router.push(`/article/detail/${v.id}`)}
                  className=" border-b-[1px] cursor-pointer border-coolgray2 py-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-start">
                      <span className="font-bold text-lg text-coolgray4 mr-2">
                        0{i + 1}
                      </span>
                      <div className="w-[250px] break-all">
                        <span className="font-bold text-lg text-darkblue2">
                          {v.title}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-coolgray4 w-[90px]">
                      {v.pharmacist.userName} 약사
                    </span>
                  </div>
                  <div className="py-2 ml-8">
                    <span className="text-sm text-coolgray4 ">
                      {v.content.slice(0, 100)}...
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <NavBar location="neighborhood" />
    </Layout>
  );
};

export default Index;
