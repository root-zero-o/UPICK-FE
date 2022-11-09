import PickedMed from "components/mypick/PickedMed";
import FormCategoryTitle from "components/ui/FormCategoryTitle";
import Image from "next/image";
import { FC, useCallback } from "react";
import { TypesPickUp } from "src/types/MyPickData";
import pathBlue from "../../../assets/images/icons/LocationBlue.svg";

interface IProps {
  data: TypesPickUp[];
  datas: TypesPickUp[];
}
const PickUpCards: FC<IProps> = ({ data, datas }) => {
  return (
    <>
      {datas?.map((value, index) => {
        return (
          <div
            key={`pick-up-cards-${index}`}
            className={`w-full flex flex-col items-center ${
              index === datas?.length - 1 && `mb-8`
            }`}
          >
            <div className="w-[90%] flex flex-col mt-4">
              <FormCategoryTitle
                title={"픽업 예정일"}
                icon={true}
                iTitle={value.CustomerPickUps[index].pickableAt}
                sub={false}
                subtitle=""
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-[90%] flex flex-col items-start justify-between">
                <div className="flex flex-col pb-4 w-[100%] items-center rounded-xl border-[1px] border-coolgray2">
                  <div className="text-darkblue1 flex flex-col w-[100%] rounded-xl px-6 py-2 bg-coolgray2">
                    {/* 코드조정 */}
                    <span className="text-[14px] font-bold ">
                      {value.CustomerPickUps[index].pharmacyName}
                    </span>
                    <div className="text-xs flex">
                      <Image src={pathBlue} alt="" />
                      <span className="ml-1">
                        {value.CustomerPickUps[index].pharmacyAdress}
                      </span>
                    </div>
                  </div>
                  <PickedMed
                    url={value.Image.url}
                    med={value.name}
                    time={value.CustomerPickUps[index].pickableAt}
                  />
                  <button className="mt-6 flex text-[12px] text-white py-3 justify-center items-center w-[85%] bg-blue2 rounded-lg">
                    {value.CustomerPickUps[index].isPicked
                      ? "픽업 완료"
                      : "픽업 확정"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {data?.map((value, index) => {
        return (
          <div
            key={`pick-up-cards-${index}`}
            className={`w-full flex flex-col items-center ${
              index === data?.length - 1 && `mb-8`
            }`}
          >
            <div className="w-[90%] flex flex-col mt-4">
              <FormCategoryTitle
                title={"픽업 완료"}
                icon={true}
                iTitle={value.CustomerPickUps[index].pickableAt}
                sub={false}
                subtitle=""
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-[90%] flex flex-col items-start justify-between">
                <div className="flex flex-col pb-4 w-[100%] items-center rounded-xl border-[1px] border-coolgray2">
                  <div className="text-darkblue1 flex flex-col w-[100%] rounded-xl px-6 py-2 bg-coolgray2">
                    {/* 코드조정 */}
                    <span className="text-[14px] font-bold ">
                      {value.CustomerPickUps[index].pharmacyName}
                    </span>
                    <div className="text-xs flex">
                      <Image src={pathBlue} alt="" />
                      <span className="ml-1">
                        {value.CustomerPickUps[index].pharmacyAdress}
                      </span>
                    </div>
                  </div>
                  <PickedMed
                    url={value.Image.url}
                    med={value.name}
                    time={value.CustomerPickUps[index].pickableAt}
                  />
                  <button className="mt-6 flex text-[12px] text-white py-3 justify-center items-center w-[85%] bg-coolgray3 rounded-lg">
                    {value.CustomerPickUps[index].isPicked
                      ? "픽업 완료"
                      : "픽업 확정"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PickUpCards;
