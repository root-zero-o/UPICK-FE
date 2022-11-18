import NavBar from "components/NavBar";
import SearchIcon from "../assets/images/icons/SearchIcon.svg";
import { useEffect, useState } from "react";
import { HealthPick } from "store/modules/peoplePickSlice";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { RootState } from "store/modules";
import { useSelector } from "react-redux";
import moduleStyle from "./peoplePick.module.css";
import CategoryUnderBar from "components/peoplePick/categoryUnderBar";
import CategoryTab from "components/peoplePick/categoryTab";
import Medicines from "components/peoplePick/medicines";
import Search from "components/peoplePick/search";
import SubCategory from "components/peoplePick/subCategory";

const Health = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.peoplePick);
  const [keyword, setKeyword] = useState("");

  const onEye = (value: string) => {
    switch (value) {
      case "눈건강":
        return setKeyword("눈건강");
      case "장건강":
        return setKeyword("장건강");
      case "지구력":
        return setKeyword("지구력");
      case "뼈":
        return setKeyword("뼈");
      case "수면":
        return setKeyword("수면");
      case "탈모":
        return setKeyword("탈모");
      case "면역":
        return setKeyword("면역");
      case "스트레스":
        return setKeyword("스트레스");
      case "다이어트":
        return setKeyword("다이어트");
      case "피로":
        return setKeyword("피로");
      case "갱년기":
        return setKeyword("갱년기");
      case "콜레스트롤":
        return setKeyword("콜레스트롤");
      case "뷰티":
        return setKeyword("뷰티");
      case "혈당":
        return setKeyword("혈당");
      case "에너지":
        return setKeyword("에너지");
    }
  };

  useEffect(() => {
    dispatch(HealthPick({ keyword }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  return (
    <div className="w-full flex flex-col py-8 relative space-y-6 overflow-x-hidden mb-[55px]">
      {/* 검색창 */}
      <Search setKeyword={setKeyword} />

      {/* 카테고리 */}
      <CategoryTab txt="health" />

      {/* 카테고리 아래 bar */}
      <CategoryUnderBar txt={68.5} />
      {/* sub 카테고리 */}
      <div className={moduleStyle.semiCategory}>
        <SubCategory keyword={keyword} onEye={onEye} />
      </div>

      {/* 매주 월요일 업데이트 문구 */}
      <div className={moduleStyle.updateText}>
        <span>매주 월요일 업데이트</span>
      </div>
      {/* 약들 */}
      <Medicines data={data} />

      {/* 네비게이션 bar */}
      <NavBar location="peoplePick" />
    </div>
  );
};

export default Health;
