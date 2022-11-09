import HealthMarker from "components/mypick/HealthMarker";
import CategoryTitle from "components/ui/CategoryTitle";
import { FC } from "react";
import { EnumActivityDue } from "src/types/EnumActivityDuration";
import { HealthKeywords } from "src/types/EnumHealthKeyword";
import { TypeMyPickData } from "src/types/MyPickData";
interface IProps {
  myPickData: TypeMyPickData;
}

const WishKeywords: FC<IProps> = ({ myPickData }) => {
  const data = ["스트레스 긴장", "혈행개선", "항산화", "수면"];
  // const data = [];
  const keywordData = [3, 5, 12, 18] as number[];
  console.log(myPickData?.CustomerToConsider);

  return (
    <>
      <CategoryTitle title="관심키워드" subtitle="" link="/" hideIcon hideSub />
      {myPickData?.CustomerToConsider?.length > 0 ? (
        <div className="z-40 text-white flex text-sm mb-8">
          {myPickData?.CustomerToConsider.map((value, index) => (
            <HealthMarker
              key={`health-marker-${index}`}
              contents={HealthKeywords[value.considerId - 1]}
            />
          ))}
        </div>
      ) : (
        <>
          <span className="text-center text-coolgray5 text-[14px] pt-4 mt-4 mb-8">
            관심있는 건강 키워드를 골라보세요!
          </span>
          <div className="pt-4 pb-4"></div>
        </>
      )}
    </>
  );
};

export default WishKeywords;
