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

const Effect = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.peoplePick);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(EffectPick("male"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full flex flex-col py-8 relative space-y-6 overflow-x-hidden mb-[55px]">
      {/* 검색창 */}
      <Search setKeyword={setKeyword} />

      {/* 카테고리 */}
      <CategoryTab txt="effect" />

      {/* 카테고리 아래 bar */}
      <CategoryUnderBar txt={25} />

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
