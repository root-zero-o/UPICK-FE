import { memo, useCallback, useMemo } from "react";

interface CheckBox {
  title: string;
  active: boolean;
  onClick: (dx: string) => void;
  userDx: string[];
}

const CheckBox = ({ title, active, onClick, userDx }: CheckBox) => {
  const renderCheckBox = useMemo(() => {
    if (userDx?.includes(title)) {
      return (
        <div
          onClick={() => onClick(title)}
          className="flex flex-col justify-center items-center text-blue1 text-[14px]"
        >
          <span>{title}</span>
          <button className="cursor-pointer text-white p-4 mt-[6px] flex justify-center items-center w-[24px] h-[24px] border-blue1 border-[2px] bg-blue1 rounded-[8px]">
            V
          </button>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => onClick(title)}
          className="flex flex-col justify-center items-center text-[14px]"
        >
          <span>{title}</span>
          <button className="text-blue3 p-4 cursor-pointer mt-[6px] flex justify-center items-center w-[24px] h-[24px] border-blue3 border-[2px] rounded-[8px]">
            V
          </button>
        </div>
      );
    }
  }, [active, userDx]);

  return <>{renderCheckBox}</>;
};

export default CheckBox;
