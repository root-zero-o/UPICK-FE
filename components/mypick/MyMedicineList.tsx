interface MyMedicineProps {
  contents: string;
  icon: boolean;
  idx: number;
  onClick?: (v: string) => void;
  main?: boolean;
}

const MyMedicineList = ({
  contents,
  icon,
  idx,
  onClick,
  main,
}: MyMedicineProps) => {
  return (
    <>
      <div
        className={` ${
          main ? `w-[360px]` : `w-[100%]`
        }  bg-coolgray2 my-[6px] px-[16px] flex justify-between items-center  h-[44px] rounded-full`}
      >
        <span className="text-coolgray5 text-[14px] mb-[2px]">{contents}</span>
        {icon && (
          <div
            onClick={() => onClick && onClick(contents)}
            className="bg-white w-[28px] h-[28px] rounded-full flex justify-center items-center"
          >
            <div className="w-[75%] h-[2px] bg-coolgray4 rounded-full"></div>
          </div>
        )}
      </div>
      {idx === 4 && <div className="mt-8  w-4" />}
    </>
  );
};

export default MyMedicineList;
