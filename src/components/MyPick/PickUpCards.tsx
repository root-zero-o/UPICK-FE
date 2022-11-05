import PickedMed from "components/mypick/PickedMed";
import FormCategoryTitle from "components/ui/FormCategoryTitle";
import { FC, useCallback } from "react";
import { TypePickUpData } from "src/types/TypePickUpData";

interface IProps {
  data: TypePickUpData[];
}
const PickUpCards: FC<IProps> = ({ data }) => {
  return (
    <>
      {data?.map((value, index) => {
        return (
          <div
            key={`pick-up-cards-${index}`}
            className="w-full flex flex-col items-center"
          >
            <div className="w-[90%] flex flex-col mt-4">
              <FormCategoryTitle
                title={"픽업 예정일"}
                icon={true}
                iTitle={value.pickUpTime}
                sub={false}
                subtitle=""
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-[90%] flex flex-col items-start justify-between">
                <div className="flex flex-col pb-4 w-[100%] items-center rounded-2xl border-[1px] border-coolgray3">
                  <div className="text-darkblue1 flex flex-col w-[100%] rounded-2xl px-6 py-2 bg-coolgray3">
                    {/* 코드조정 */}
                    <span className="text-[14px] font-bold ">
                      {value.pharmacy}
                    </span>
                    <div className="text-xs flex">
                      <div>아이콘</div>
                      <span className="ml-1">{value.pharmacyAddress}</span>
                    </div>
                  </div>
                  <PickedMed med={value.medicine} time={value.reservation} />
                  <button className="mt-6 flex text-[12px] text-white py-2 justify-center items-center w-[85%] bg-blue2 rounded-lg">
                    {value.status}
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
