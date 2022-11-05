import { useMemo } from "react";
import uncheck from "../../assets/images/icons/uncheck.svg";
import check from "../../assets/images/icons/check.svg";
import Image from "next/image";

interface CheckBox {
  title: string;
  active: boolean;
  onClick?: (dx: string) => void;
  userDx: string[];
  onData?: boolean;
}

const CheckBox = ({ title, active, onClick, userDx, onData }: CheckBox) => {
  const renderCheckBox = useMemo(() => {
    if (userDx?.includes(title)) {
      return (
        <div
          onClick={() => onClick && onClick(title)}
          className="flex flex-col justify-center items-center text-blue1 text-[14px]"
        >
          <Image src={uncheck} alt="" />
          <span>{title}</span>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => onClick && onClick(title)}
          className="flex flex-col justify-center items-center text-[14px]"
        >
          <Image src={uncheck} alt="" />
          <span>{title}</span>
        </div>
      );
    }
  }, [active, userDx]);

  return (
    <>
      {!onData ? (
        <>{renderCheckBox} </>
      ) : (
        <div className="flex flex-col justify-center items-center text-[14px]">
          <Image src={uncheck} alt="" />
          <span>{title}</span>
        </div>
      )}
    </>
  );
};

export default CheckBox;
