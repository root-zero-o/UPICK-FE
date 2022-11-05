import HealthMarker from "components/mypick/HealthMarker";
import CategoryTitle from "components/ui/CategoryTitle";

const WishKeywords = () => {
  const data = ["스트레스 긴장", "혈행개선", "항산화", "수면"];
  // const data = [];

  return (
    <>
      <CategoryTitle title="관심키워드" subtitle="" link="/" hideIcon />
      {data?.length > 0 ? (
        <div className="z-40 text-white flex text-sm mb-8">
          {data.map((value, index) => (
            <HealthMarker key={`health-marker-${index}`} contents={value} />
          ))}
        </div>
      ) : (
        <>
          <span className="text-center text-coolgray5 text-[14px] mt-4 mb-8">
            관심있는 건강 키워드를 골라보세요!
          </span>
          <div className="pt-4 pb-4"></div>
        </>
      )}
    </>
  );
};

export default WishKeywords;
