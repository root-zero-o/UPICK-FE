import Image from "next/image";
import { FC } from "react";
import femaleN from "../../assets/images/icons/femaleN.png";
import femaleY from "../../assets/images/icons/femaleY.png";
import maleN from "../../assets/images/icons/maleN.png";
import maleY from "../../assets/images/icons/maleY.png";
import uncheck from "../../assets/images/icons/uncheck.svg";
import check from "../../assets/images/icons/check.svg";

interface IProps {
  userSex: string;
  handleUserSex: (sex: string) => void;
  femaleHx: string[];
  handleFemaleHx: (hx: string) => void;
}

const femaleData = ["임신여부", "수유여부", "비임신"];
const SexBtn: FC<IProps> = ({
  userSex,
  handleUserSex,
  handleFemaleHx,
  femaleHx,
}) => {
  return (
    <>
      <div className="w-[90%] flex flex-col items-center">
        <h1 className="text-darkblue1 text-md font-black mb-4">성별</h1>
        <div className="w-full h-full flex justify-evenly">
          <div className="flex flex-col items-center">
            <div
              onClick={() => handleUserSex("male")}
              className="w-[80px] h-[80px] rounded-[13px] backdrop-blur border-[1px] border-blue3 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all"
            >
              <Image src={userSex === "male" ? maleY : maleN} alt="" />
            </div>
            <span className="text-darkblue1 text-[14px] font-bold mt-2">
              남성
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              onClick={() => handleUserSex("female")}
              className="w-[80px] h-[80px] rounded-[13px] backdrop-blur border-[1px] border-blue3 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all"
            >
              <Image src={userSex === "female" ? femaleY : femaleN} alt="" />
            </div>
            <span className="text-darkblue1 text-[14px] font-bold mt-2">
              여성
            </span>
          </div>
        </div>
        {userSex === "female" && (
          <>
            <div className="mt-6 flex w-[100%] justify-end mr-10 pr-4">
              {femaleData.map((value, index) => {
                return (
                  <div
                    key={`femaleData-${index}`}
                    onClick={() => handleFemaleHx(value)}
                    className="mx-1 flex flex-col justify-center items-center text-[14px]"
                  >
                    <span
                      key={`femaleData-span-${index}`}
                      className={`mb-1 ${
                        femaleHx.includes(value) ? "text-blue1" : "text-black"
                      } ${
                        femaleHx.includes(value)
                          ? "font-semibold"
                          : "font-normal"
                      }`}
                    >
                      {value}
                    </span>
                    <Image
                      key={`femaleData-img-${index}`}
                      src={femaleHx.includes(value) ? check : uncheck}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-4 mb-4 flex flex-col w-[100%] text-end mr-10 pr-4">
              <span className="text-xs font-semibold text-coolgray4">
                필수 선택
              </span>
              <span className="text-xs text-coolgray4">
                선택하지 않으면 페이지가 저장되지 않아요!
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SexBtn;
