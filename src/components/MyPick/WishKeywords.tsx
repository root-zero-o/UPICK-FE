import HealthMarker from "components/mypick/HealthMarker";
import CategoryTitle from "components/ui/CategoryTitle";

const WishKeywords = () => {
  return (
    <>
      <CategoryTitle title="관심키워드" subtitle="" link="/" hideIcon />
      <div className="z-40 text-white flex text-sm mb-8">
        {["스트레스 긴장", "혈행개선", "항산화", "수면"].map((value, index) => (
          <HealthMarker key={`health-marker-${index}`} contents={value} />
        ))}
      </div>
    </>
  );
};

export default WishKeywords;
