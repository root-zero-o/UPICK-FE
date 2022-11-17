import NavBar from "components/NavBar";
import SearchIcon from "../assets/images/icons/SearchIcon.svg";
import { useEffect, useState } from "react";
import { AgePick } from "store/modules/peoplePickSlice";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { RootState } from "store/modules";
import { useSelector } from "react-redux";
import moduleStyle from "./peoplePick.module.css";
import CategoryUnderBar from "components/peoplePick/categoryUnderBar";
import CategoryTab from "components/peoplePick/categoryTab";
import Medicines from "components/peoplePick/medicines";
import Search from "components/peoplePick/search";

const Age = () => {
  const [age, setAge] = useState(20);
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.peoplePick);
  const [keyword, setKeyword] = useState("");

  const onTw = () => {
    setAge(20);
  };
  const onTh = () => {
    setAge(30);
  };
  const onFo = () => {
    setAge(40);
  };
  const onFi = () => {
    setAge(50);
  };
  const onSi = () => {
    setAge(60);
  };

  useEffect(() => {
    switch (age) {
      case 20:
        dispatch(AgePick({ minAge: 0, maxAge: age, keyword }));
        break;
      case 30:
      case 40:
      case 50:
        dispatch(AgePick({ minAge: age - 9, maxAge: age, keyword }));
        break;
      case 60:
        dispatch(AgePick({ minAge: age, maxAge: 100, keyword }));
        break;
      default:
        return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age, keyword]);
  return (
    <div className="w-full flex flex-col py-8 relative space-y-6 overflow-x-hidden mb-[55px]">
      {/* 검색창 */}
      <Search setKeyword={setKeyword} />

      {/* 카테고리 */}
      <CategoryTab txt="age" />

      {/* 카테고리 아래 bar */}
      <CategoryUnderBar txt={45} />
      {/* sub 카테고리 */}
      <div className={moduleStyle.semiCategory}>
        {age === 20 ? (
          <div className={moduleStyle.semiCategorySelected} onClick={onTw}>
            20대 이하
          </div>
        ) : (
          <div className={moduleStyle.semiCategoryText} onClick={onTw}>
            20대 이하
          </div>
        )}
        {age === 30 ? (
          <div className={moduleStyle.semiCategorySelected} onClick={onTh}>
            30대
          </div>
        ) : (
          <div className={moduleStyle.semiCategoryText} onClick={onTh}>
            30대
          </div>
        )}
        {age === 40 ? (
          <div className={moduleStyle.semiCategorySelected} onClick={onFo}>
            40대
          </div>
        ) : (
          <div className={moduleStyle.semiCategoryText} onClick={onFo}>
            40대
          </div>
        )}
        {age === 50 ? (
          <div className={moduleStyle.semiCategorySelected} onClick={onFi}>
            50대
          </div>
        ) : (
          <div className={moduleStyle.semiCategoryText} onClick={onFi}>
            50대
          </div>
        )}
        {age === 60 ? (
          <div className={moduleStyle.semiCategorySelected} onClick={onSi}>
            60대 이상
          </div>
        ) : (
          <div className={moduleStyle.semiCategoryText} onClick={onSi}>
            60대 이상
          </div>
        )}
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

export default Age;
