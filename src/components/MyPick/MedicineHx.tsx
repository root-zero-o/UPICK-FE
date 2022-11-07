import MyMedicineList from "components/mypick/MyMedicineList";
import CategoryTitle from "components/ui/CategoryTitle";

const MedicineHx = () => {
  return (
    <>
      <CategoryTitle
        title="섭취 중인 영양제"
        subtitle=""
        link="/mypick/edit"
        hideIcon
      />
      <div className="pt-4 mb-[20px]">
        {[
          "Bioton 5000mcg",
          "비타할로 비타민D 2000IU",
          "동아비타민C1000플러스",
          "장건강 365 프리바이오틱스 프로바이오틱스",
        ].map((value, index) => (
          <MyMedicineList
            key={`my-medicine-list-${index}`}
            contents={value}
            icon={false}
          />
        ))}
      </div>
    </>
  );
};

export default MedicineHx;
