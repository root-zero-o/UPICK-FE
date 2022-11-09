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
  const renderCheckBox = () => {
    if (userDx?.includes(title)) {
      return (
        <div
          onClick={() => onClick && onClick(title)}
          className="h-[30px] flex flex-col justify-center items-center text-blue1 text-[14px]"
        >
          <span className="mb-2">{title}</span>
          <Image src={check} alt="" />
        </div>
      );
    } else {
      return (
        <div
          onClick={() => onClick && onClick(title)}
          className="flex flex-col justify-center items-center text-[14px]"
        >
          <span className="mb-2">{title}</span>
          <Image src={uncheck} alt="" />
        </div>
      );
    }
  };

  return (
    <>
      {!onData ? (
        <>
          <div
            onClick={() => onClick && onClick(title)}
            className={`flex flex-col justify-center items-center ${
              userDx?.includes(title) ? `text-blue1` : ""
            }  text-[14px]`}
          >
            <span className="mb-2">{title}</span>
            <Image src={userDx?.includes(title) ? check : uncheck} alt="" />
          </div>
        </>
      ) : (
        <div
          className={`flex flex-col justify-center items-center text-[14px] ${
            active ? `text-blue1` : ``
          }`}
        >
          <span className="mb-2">{title}</span>

          <Image src={active ? check : uncheck} alt="" />
        </div>
      )}
    </>
  );
};

export default CheckBox;
