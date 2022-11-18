import moduleStyle from "../../pages/peoplePick/peoplePick.module.css";

const SubCategoryEffect = ({
  keyword,
  onEye,
}: {
  keyword: string;
  onEye: any;
}) => {
  return (
    <>
      {keyword === "오메가3" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("오메가3")}
        >
          오메가3
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("오메가3")}
        >
          오메가3
        </div>
      )}
      {keyword === "비타민B1" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("비타민B1")}
        >
          비타민B1
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("비타민B1")}
        >
          비타민B1
        </div>
      )}
      {keyword === "비타민A" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("비타민A")}
        >
          비타민A
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("비타민A")}
        >
          비타민A
        </div>
      )}
      {keyword === "비타민C" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("유산균")}
        >
          프로바이오틱스(유산균)
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("유산균")}
        >
          프로바이오틱스(유산균)
        </div>
      )}
      {keyword === "칼슘" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("칼슘")}
        >
          칼슘
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("칼슘")}
        >
          칼슘
        </div>
      )}
      {keyword === "가르시니아캄보지아" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("가르시니아캄보지아")}
        >
          가르시니아캄보지아
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("가르시니아캄보지아")}
        >
          가르시니아캄보지아
        </div>
      )}
      {keyword === "히알루론산" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("히알루론산")}
        >
          히알루론산
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("히알루론산")}
        >
          히알루론산
        </div>
      )}
      {keyword === "레시틴" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("레시틴")}
        >
          레시틴
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("레시틴")}
        >
          레시틴
        </div>
      )}
      {keyword === "루테인" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("루테인")}
        >
          루테인
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("루테인")}
        >
          루테인
        </div>
      )}
      {keyword === "코엔자임Q10" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("코엔자임Q10")}
        >
          코엔자임Q10
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("코엔자임Q10")}
        >
          코엔자임Q10
        </div>
      )}
      {keyword === "마그네슘" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("마그네슘")}
        >
          마그네슘
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("마그네슘")}
        >
          마그네슘
        </div>
      )}
      {keyword === "글루코사민" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("글루코사민")}
        >
          글루코사민
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("글루코사민")}
        >
          글루코사민
        </div>
      )}
      {keyword === "바나바잎추출물" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("바나바잎추출물")}
        >
          바나바잎추출물
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("바나바잎추출물")}
        >
          바나바잎추출물
        </div>
      )}
      {keyword === "실리마린" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("실리마린")}
        >
          실리마린
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("실리마린")}
        >
          실리마린
        </div>
      )}
      {keyword === "비타민B6" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("비타민B6")}
        >
          비타민B6
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("비타민B6")}
        >
          비타민B6
        </div>
      )}
      {keyword === "비타민D" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("비타민D")}
        >
          비타민D
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("비타민D")}
        >
          비타민D
        </div>
      )}
      {keyword === "엽산" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("엽산")}
        >
          엽산
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("엽산")}
        >
          엽산
        </div>
      )}
      {keyword === "셀레늄" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("셀레늄")}
        >
          셀레늄
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("셀레늄")}
        >
          셀레늄
        </div>
      )}
      {keyword === "폴리코사놀" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("폴리코사놀")}
        >
          폴리코사놀
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("폴리코사놀")}
        >
          폴리코사놀
        </div>
      )}
      {keyword === "쏘팔메토" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("쏘팔메토")}
        >
          쏘팔메토
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("쏘팔메토")}
        >
          쏘팔메토
        </div>
      )}
      {keyword === "공액리놀레산" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("공액리놀레산")}
        >
          공액리놀레산
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("공액리놀레산")}
        >
          공액리놀레산
        </div>
      )}
      {keyword === "녹차추출물" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("녹차추출물")}
        >
          녹차추출물
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("녹차추출물")}
        >
          녹차추출물
        </div>
      )}
      {keyword === "크롬" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("크롬")}
        >
          크롬
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("크롬")}
        >
          크롬
        </div>
      )}
      {keyword === "비타민B12" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("비타민B12")}
        >
          비타민B12
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("비타민B12")}
        >
          비타민B12
        </div>
      )}
      {keyword === "잔티젠" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("잔티젠")}
        >
          잔티젠
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("잔티젠")}
        >
          잔티젠
        </div>
      )}
      {keyword === "홍삼" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("홍삼")}
        >
          홍삼
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("홍삼")}
        >
          홍삼
        </div>
      )}
      {keyword === "GABA" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("GABA")}
        >
          GABA
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("GABA")}
        >
          GABA
        </div>
      )}
      {keyword === "시서스추출물" ? (
        <div
          className={moduleStyle.semiCategorySelected}
          onClick={() => onEye("시서스추출물")}
        >
          시서스추출물
        </div>
      ) : (
        <div
          className={moduleStyle.semiCategoryText}
          onClick={() => onEye("시서스추출물")}
        >
          시서스추출물
        </div>
      )}
    </>
  );
};

export default SubCategoryEffect;
