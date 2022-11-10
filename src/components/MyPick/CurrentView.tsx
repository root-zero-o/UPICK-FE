import RecentMed from "components/mypick/RecentMed";
import CategoryTitle from "components/ui/CategoryTitle";
import { FC } from "react";
import { TypeRecentMed } from "src/types/MyPickData";

interface IProps {
  myPickData: TypeRecentMed[];
}

const CurrentView: FC<IProps> = ({ myPickData }) => {
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
        {myPickData.map((value, index) => {
          return (
            <>
              <RecentMed
                key={`currentMed-${index}`}
                pharmacy={value.company.name}
                med={value.name}
                src={value.Image.url}
                id={value.id}
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
