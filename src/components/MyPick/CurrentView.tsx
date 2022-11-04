import RecentMed from "components/mypick/RecentMed";
import CategoryTitle from "components/ui/CategoryTitle";

const CurrentView = () => {
  const pharmacyData = [
    {
      pharmacy: "온누리",
      med: "프리미엄 오메가쓰리",
    },
    {
      pharmacy: "온누리",
      med: "프리미엄 오메가쓰리",
    },
    {
      pharmacy: "온누리",
      med: "프리미엄 오메가쓰리",
    },
    {
      pharmacy: "온누리",
      med: "프리미엄 오메가쓰리",
    },
  ];
  return (
    <>
      <CategoryTitle title="최근 봤던 약" subtitle="" link="/" hideSub />
      <div className="flex w-full justify-center">
        {pharmacyData.map((value, index) => {
          return (
            <>
              <RecentMed
                key={`currentMed-${index}`}
                pharmacy={value.pharmacy}
                med={value.med}
              />
            </>
          );
        })}
      </div>
      ;
    </>
  );
};

export default CurrentView;
