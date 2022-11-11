import moduleStyle from "../../pages/peoplePick/peoplePick.module.css";
import useClickRoute from "hooks/useClickRoute";

const CategoryTab = ({ txt }: { txt: string }) => {
  const genderLink = useClickRoute({ link: "/peoplePick/gender" });
  const effectLink = useClickRoute({ link: "/peoplePick/effect" });
  const ageLink = useClickRoute({ link: "/peoplePick/age" });
  const healthLink = useClickRoute({ link: "/peoplePick/health" });
  return (
    <div className={moduleStyle.categoryTxt}>
      {txt === "health" ? (
        <span className={moduleStyle.categorySelected} onClick={healthLink}>
          건강고민
        </span>
      ) : (
        <span onClick={healthLink}>건강고민</span>
      )}
      {txt === "age" ? (
        <span className={moduleStyle.categorySelected} onClick={ageLink}>
          연령
        </span>
      ) : (
        <span onClick={ageLink}>연령</span>
      )}
      {txt === "effect" ? (
        <span className={moduleStyle.categorySelected} onClick={effectLink}>
          원료
        </span>
      ) : (
        <span onClick={effectLink}>원료</span>
      )}
      {txt === "gender" ? (
        <span className={moduleStyle.categorySelected} onClick={genderLink}>
          성별
        </span>
      ) : (
        <span onClick={genderLink}>성별</span>
      )}
    </div>
  );
};

export default CategoryTab;
