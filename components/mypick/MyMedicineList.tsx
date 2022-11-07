interface MyMedicineProps {
  contents: string;
  icon: boolean;
}

const MyMedicineList = ({ contents, icon }: MyMedicineProps) => {
  return (
    <div className="bg-coolgray2 my-[6px] px-[16px] flex justify-between items-center w-[350px] h-[44px] rounded-full">
      <span className="text-coolgray5 text-[14px] mb-[2px]">{contents}</span>
      {icon && (
        <div className="bg-white w-[28px] h-[28px] rounded-full flex justify-center items-center">
          <div className="w-[75%] h-[2px] bg-coolgray4 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default MyMedicineList;
