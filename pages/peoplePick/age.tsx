import NavBar from "components/NavBar";
import SearchIcon from "../assets/images/icons/SearchIcon.svg";
import Image from "next/image";
import { useEffect } from "react";
// import { genderPick } from "store/modules /peoplePickSlice";
import { useAppDispatch } from "src/hooks/reduxHooks";

const Age = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(genderPick("male"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative h-screen flex flex-col items-center">
      {/* 검색창 */}
      <div className="header">
        <input
          type="text"
          className="search"
          placeholder="브랜드명 또는 영양제 검색"
        />
      </div>

      {/* 카테고리 */}
      <div className="category categoryTxt">
        <span>건강고민</span>
        <span>연령</span>
        <span className="category-selected">원료</span>
        <span>성별</span>
      </div>

      {/* 카테고리 아래 bar */}
      <div className="categoryBar">
        <div className="categoryBar-selected" />
      </div>

      {/* sub 카테고리 */}
      <div className="semiCategory">
        <span className="semiCategory-Text">남성</span>
        <span className="semiCategory-Text">여성</span>
      </div>

      {/* 매주 월요일 업데이트 문구 */}
      <div className="update-text ">
        <span>매주 월요일 업데이트</span>
      </div>

      {/* 약들 */}
      <div className="details">
        <div className="details-main">
          <div className="details-left">
            <div className="details-rank">
              <span className="rank-text">1</span>
            </div>
            {/* <div
              style={{
                backgroundImage: `url("https://www.google.com/aclk?sa=l&ai=DChcSEwjdqIno9qP7AhXSUGAKHbEQBSwYABABGgJ0bQ&sig=AOD64_2G1bba16Uy2VXTrMw0bkUmMdtIVg&adurl&ctype=5&ved=2ahUKEwix1Pvn9qP7AhXCdHAKHWLFDgMQvhd6BAgBEDw")`,
              }}
              className="w-[93px] h-[93px] rounded-md border-[1px] border-coolgray2 bg-cover"
            /> */}
            <div className="details-Image">
              <Image
                src={`data:image/jpeg;base64,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`}
                alt=""
                width={`93px`}
                height={`93px`}
                unoptimized={true}
                // className="rounded-md"
              ></Image>
            </div>
          </div>
          <div className="details-right">
            <div className="details-title">
              일양약품 속편한 비타민C 프리미엄 1320mg x 60정
            </div>
            <div className="details-subTitle">
              <div className="details-company">㈜한풍네이처팜</div>
              <div className="details-counts">60일분</div>
            </div>
          </div>
        </div>
        <div className="details-sub">
          <div className="details-hashtag">일양</div>
          <div className="details-hashtag">피로개선</div>
          <div className="details-hashtag">면역기능</div>
          <div className="details-hashtag">비타민D 함유</div>
        </div>
      </div>

      {/* 네비게이션 bar */}
      <NavBar location="peoplePick" />
      <style jsx>{``}</style>
    </div>
  );
};

export default Age;
