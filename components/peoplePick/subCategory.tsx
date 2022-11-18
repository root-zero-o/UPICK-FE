import moduleStyle from "../../pages/peoplePick/peoplePick.module.css";

const SubCategory = ({ keyword, onEye }: { keyword: string; onEye: any }) => {
  return (
    <>
      {keyword === "눈건강" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("눈건강")}
        >
          눈건강
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("눈건강")}
        >
          눈건강
        </div>
      )}
      {keyword === "장건강" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("장건강")}
        >
          장건강
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("장건강")}
        >
          장건강
        </div>
      )}
      {keyword === "지구력" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("지구력증진")}
        >
          지구력증진
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("지구력")}
        >
          지구력증진
        </div>
      )}
      {keyword === "뼈" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("뼈")}
        >
          뼈 • 관절
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("뼈")}
        >
          뼈 • 관절
        </div>
      )}
      {keyword === "수면" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("수면")}
        >
          수면
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("수면")}
        >
          수면
        </div>
      )}
      {keyword === "탈모" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("탈모")}
        >
          탈모
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("탈모")}
        >
          탈모
        </div>
      )}
      {keyword === "면역" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("면역")}
        >
          면역
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("면역")}
        >
          면역
        </div>
      )}
      {keyword === "스트레스" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("스트레스")}
        >
          스트레스 • 긴장
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("스트레스")}
        >
          스트레스 • 긴장
        </div>
      )}
      {keyword === "다이어트" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("다이어트")}
        >
          다이어트 • 헬스
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("다이어트")}
        >
          다이어트 • 헬스
        </div>
      )}
      {keyword === "피로" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("피로")}
        >
          피로개선
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("피로")}
        >
          피로개선
        </div>
      )}
      {keyword === "콜레스트롤" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("콜레스트롤")}
        >
          콜레스트롤개선
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("콜레스트롤")}
        >
          콜레스트롤개선
        </div>
      )}
      {keyword === "갱년기" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("갱년기")}
        >
          갱년기여성
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("갱년기")}
        >
          갱년기여성
        </div>
      )}
      {keyword === "뷰티" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("뷰티")}
        >
          뷰티피부
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("뷰티")}
        >
          뷰티피부
        </div>
      )}
      {keyword === "혈당" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("혈당")}
        >
          혈당상승
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("혈당")}
        >
          혈당상승
        </div>
      )}
      {keyword === "에너지" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("에너지")}
        >
          에너지 • 대사
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("에너지")}
        >
          에너지 • 대사
        </div>
      )}
    </>
  );
};

export default SubCategory;
