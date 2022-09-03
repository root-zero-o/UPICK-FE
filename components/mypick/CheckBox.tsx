interface CheckBox {
  title: string;
  active: boolean;
}

const CheckBox = ({ title, active }: CheckBox) => {
  return (
    <>
      {active ? (
        <div className="flex flex-col justify-center items-center text-[14px]">
          <span className="mt-4">{title}</span>
          <button className="text-blue3 p-4 cursor-pointer mt-[6px] flex justify-center items-center w-[24px] h-[24px] border-blue3 border-[2px] rounded-[4px]">
            V
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-blue1 text-[14px]">
          <span>{title}</span>
          <button className="cursor-pointer text-white p-4 mt-[6px] flex justify-center items-center w-[24px] h-[24px] border-blue1 border-[2px] bg-blue1 rounded-[4px]">
            V
          </button>
        </div>
      )}
    </>
  );
};

export default CheckBox;
