import NavBar from "components/NavBar";
import SearchIcon from "../assets/images/icons/SearchIcon.svg";
import { useEffect, useState } from "react";
import { EffectPick } from "store/modules/peoplePickSlice";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { RootState } from "store/modules";
import { useSelector } from "react-redux";
import moduleStyle from "./peoplePick.module.css";
import CategoryUnderBar from "components/peoplePick/categoryUnderBar";
import CategoryTab from "components/peoplePick/categoryTab";
import Medicines from "components/peoplePick/medicines";
import Search from "components/peoplePick/search";
import SubCategoryEffect from "components/peoplePick/subCategoryEffect";

const Effect = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.peoplePick);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(EffectPick({ keyword }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  const onEye = (value: string) => {
    switch (value) {
      case "오메가3":
        return setKeyword("오메가3");
      case "비타민B1":
        return setKeyword("비타민B1");
      case "비타민A":
        return setKeyword("비타민A");
      case "비타민C":
        return setKeyword("비타민C");
      case "유산균":
        return setKeyword("유산균");
      case "칼슘":
        return setKeyword("칼슘");
      case "가르시니아캄보지아":
        return setKeyword("가르시니아캄보지아");
      case "히알루론산":
        return setKeyword("히알루론산");
      case "레시틴":
        return setKeyword("레시틴");
      case "루테인":
        return setKeyword("루테인");
      case "코엔자임Q10":
        return setKeyword("코엔자임Q10");
      case "마그네슘":
        return setKeyword("마그네슘");
      case "글루코사민":
        return setKeyword("글루코사민뷰티");
      case "바나바잎추출물":
        return setKeyword("바나바잎추출물");
      case "실리마린":
        return setKeyword("실리마린");
      case "비타민B6":
        return setKeyword("비타민B6");
      case "비타민D":
        return setKeyword("비타민D");
      case "엽산":
        return setKeyword("엽산");
      case "셀레늄":
        return setKeyword("셀레늄");
      case "폴리코사놀":
        return setKeyword("폴리코사놀");
      case "쏘팔메토":
        return setKeyword("쏘팔메토");
      case "공액리놀레산":
        return setKeyword("공액리놀레산");
      case "녹차추출물":
        return setKeyword("녹차추출물");
      case "크롬":
        return setKeyword("크롬");
      case "비타민B12":
        return setKeyword("비타민B12");
      case "잔티젠":
        return setKeyword("잔티젠");
      case "홍삼":
        return setKeyword("홍삼");
      case "GABA":
        return setKeyword("GABA");
      case "시서스추출물":
        return setKeyword("시서스추출물");
    }
  };
  return (
    <div className="w-full flex flex-col py-8 relative space-y-6 overflow-x-hidden mb-[55px]">
      {/* 검색창 */}
      <Search setKeyword={setKeyword} />

      {/* 카테고리 */}
      <CategoryTab txt="effect" />

      {/* 카테고리 아래 bar */}
      <CategoryUnderBar txt={25} />
      <div className={moduleStyle.semiCategory}>
        <SubCategoryEffect keyword={keyword} onEye={onEye} />
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

export default Effect;
