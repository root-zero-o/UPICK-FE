interface MyMedicineProps {
  contents: string;
}

const MyMedicineList = ({ contents }: MyMedicineProps) => {
  return (
    <div className="bg-coolgray2 my-[6px] px-[20px] flex justify-start items-center w-[335px] h-[44px] rounded-full">
      <span className="text-coolgray5 text-[14px] mb-[2px]">{contents}</span>
    </div>
  );
};

export default MyMedicineList;
