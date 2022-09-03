import Layout from "components/Layout";
import FormCategoryTitle from "components/ui/FormCategoryTitle";
import PickedMed from "components/mypick/PickedMed";
import PickUpNotice from "components/mypick/PickUpNotice";
const TemplatePickUpDate = () => {
  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <div className="w-full flex flex-col items-center mt-4">
        <div className="w-[90%] flex flex-col mt-4">
          <FormCategoryTitle
            title="픽업 예정일"
            icon={true}
            iTitle="6/22 수요일 픽업 예정"
            sub={false}
            subtitle=""
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[90%] flex flex-col items-start mb-8 h-screen justify-between">
            <div className="flex flex-col pb-4 w-[100%] items-center rounded-2xl border-[1px] border-coolgray3">
              <div className="text-darkblue1 flex flex-col w-[100%] rounded-2xl px-6 py-2 bg-coolgray3">
                {/* 코드조정 */}
                <span className="text-[14px] font-bold ">ddd약국</span>
                <div className="text-xs flex">
                  <div>아이콘</div>
                  <span className="ml-1">지구별 어딘가</span>
                </div>
              </div>
              <PickedMed
                med="광동 어쩌고저쩌고광동 어쩌고저쩌고광동 "
                time="2022년 00월 00일 00시 00분"
              />
              <button className="mt-6 flex text-[12px] text-white py-2 justify-center items-center w-[85%] bg-blue2 rounded-lg">
                픽업 확정
              </button>
            </div>
            <PickUpNotice />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default TemplatePickUpDate;
