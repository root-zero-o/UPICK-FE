import NavBar from "components/NavBar";
import SearchIcon from "../assets/images/icons/SearchIcon.svg";
import Image from "next/image";
import { useEffect } from "react";
import { genderPick } from "store/modules/peoplePickSlice";
import { useAppDispatch } from "src/hooks/reduxHooks";

const PeoplePick = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(genderPick("male"));
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
        <span>원료</span>
        <span className="category-selected">성별</span>
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
            <div className="details-Image"></div>
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

      <div className="details">
        <div className="details-main">
          <div className="details-left">
            <div className="details-rank">
              <span className="rank-text">1</span>
            </div>
            <div className="details-Image"></div>
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

      <div className="details">
        <div className="details-main">
          <div className="details-left">
            <div className="details-rank">
              <span className="rank-text">1</span>
            </div>
            <div className="details-Image"></div>
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
      <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .searchIcon {
          position: absolute;
          top: 50%;
        }
        .search {
          margin-top: 20px;
          width: 335px;
          height: 46px;
          background: linear-gradient(
            180deg,
            rgba(247, 250, 255, 0.3) 0%,
            rgba(177, 194, 208, 0.099) 100%
          );
          border: 1px solid #b1c2d0;
          backdrop-filter: blur(10.5px);
          border-radius: 24px;
          padding-left: 57px;
        }
        .category {
          width: 100%;
          margin-top: 21px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .categoryTxt {
          font-size: 12px;
          line-height: 17px;
          text-align: center;
          color: #b1c2d0;
        }
        .category-selected {
          color: #1576fb;
          font-weight: 900;
        }
        .categoryBar {
          width: 100%;
          border: 1px solid #b1c2d0;
          margin-top: 9px;
          position: relative;
        }
        .categoryBar-selected {
          width: 88px;
          border: 0.1px solid #1576fb;
          position: absolute;
          top: -1px;
          right: 5%;
        }
        .semiCategory {
          width: 335px;
          height: 65px;
          background: #e2f0fb;
          border-radius: 2px;
          margin-top: 9px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .semiCategory-Text {
          font-weight: 500;
          font-size: 13px;
          line-height: 24px;
          color: #b1c2d0;
          margin-left: 9px;
        }
        .update-text {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          font-weight: 500;
          font-size: 10px;
          line-height: 20px;
          color: #808e99;
          margin-top: 21px;
          margin-right: 55px;
        }
        .details {
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
        }
        .details-main {
          display: flex;
        }
        .details-sub {
          display: flex;
          margin-left: 38px;
          margin-top: 13px;
        }
        .details-left {
          position: relative;
          margin-left: 38px;
          margin-right: 19px;
        }
        .details-rank {
          position: absolute;
          width: 18px;
          height: 18px;
          background: #00b7f0;
          margin-left: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
        }
        .rank-text {
          font-weight: 900;
          font-size: 10px;
          line-height: 12px;
          color: #ffffff;
        }
        .details-Image {
          width: 93px;
          height: 93px;
          border-radius: 15px;
          background-color: #b2e9b9;
        }
        .details-title {
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: #242121;
        }
        .details-subTitle {
          font-weight: 500;
          font-size: 10px;
          line-height: 20px;
          color: #808e99;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 4px;
        }
        .details-company {
          margin-right: 6px;
        }
        .details-hashtag {
          min-width: 45px;
          height: 20px;
          background: #b1c2d0;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fefefe;
          font-weight: 500;
          font-size: 12px;
          line-height: 12px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default PeoplePick;
