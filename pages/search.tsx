import SearchIcon from "../assets/images/icons/SearchIcon.svg";
import Image from "next/image";
import Layout from "components/Layout";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { PostingDataType } from "src/types/PostingData";
import { useRouter } from "next/router";

const Search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<PostingDataType[]>([]);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/posting?keyword=${keyword}`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (keyword) {
      response();
    }
  }, [keyword]);

  return (
    <Layout home={false} icon={false} isWhite={false}>
      <div className="px-5">
        <div className="relative w-[335px] h-[48px]">
          <input
            onChange={onChangeInput}
            ref={inputRef}
            type="text"
            placeholder="브랜드 및 제품명 검색"
            className="w-[335px] mx-[20px] bg-coolgray1 bg-opacity-0 z-40 border-[1px] border-[#E4E5E6] h-[48px] rounded-[24px] pl-12 focus:outline-none  text-sm font-sdg-m"
          />
          <div className="absolute top-4 left-10">
            <Image src={SearchIcon} alt="" />
          </div>
        </div>
        <div className="pt-10">
          {keyword === "" ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-md font-bold text-darkblue1">
                  어떤 특징의 영양제를 찾으시나요 ?
                </span>
                <span className="text-sm text-coolgray3">설정하기</span>
              </div>
              <span className="text-sm text-coolgray3">
                내가 선택한 특징 내에서 약사픽을 검색할 수 있어요.
              </span>
              <div className="flex gap-2 py-2">
                <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
                  피로개선
                </span>
                <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
                  비타민
                </span>
                <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
                  항산화
                </span>
                <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
                  2030대 청년
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center mt-8">
              <span className="text-darkblue2 font-bold  mb-12">
                &quot;{keyword}&quot; 검색결과
              </span>
              <div className="w-[100%] flex flex-col px-4">
                {data?.map((v, i) => {
                  return (
                    <div
                      onClick={() => router.push(`/article/detail/${v?.id}`)}
                      key={i}
                      className=" border-b-[1px] cursor-pointer border-coolgray2 py-4"
                    >
                      <div>
                        <span className="text-sm text-coolgray4 w-[90px] mr-2">
                          {v?.pharmacist.userName} 약사
                        </span>
                        <span className="text-sm text-coolgray4 w-[90px]">
                          {v.pharmacist.pharmacyName}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-start">
                          <div className=" break-all">
                            <span className="font-bold text-lg text-darkblue2">
                              {v.title}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        <span className="text-sm text-coolgray4 ">
                          {v.content.slice(0, 100)}...
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
