import MyMedicineList from "components/mypick/MyMedicineList";
import CategoryTitle from "components/ui/CategoryTitle";
import { FC } from "react";
import { TypeMyPickData } from "src/types/MyPickData";

interface IProps {
  myPickData: TypeMyPickData;
}

const MedicineHx: FC<IProps> = ({ myPickData }) => {
  const data = [
    "Bioton 5000mcg",
    "비타할로 비타민D 2000IU",
    "동아비타민C1000플러스",
    "장건강 365 프리바이오틱스 프로바이오틱스",
  ];

  const med = myPickData?.merchandises;

  return (
    <>
      <CategoryTitle
        title="섭취 중인 영양제"
        subtitle=""
        link="/mypick/edit"
        hideIcon
      />
      {med?.length > 0 ? (
        <div className="pt-4 mb-[20px]">
          {med.map((value, index) => (
            <MyMedicineList
              key={`my-medicine-list-${index}`}
              contents={value}
              icon={false}
            />
          ))}
        </div>
      ) : (
        <>
          <span className="text-center text-coolgray5 text-[14px] mt-4 mb-8">
            섭취중인 영양제를 추가해보세요!
          </span>
          <div className="pt-4 pb-4"></div>
        </>
      )}
    </>
  );
};

export default MedicineHx;
