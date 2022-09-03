import Layout from "components/Layout";
import FormCategoryTitle from "components/ui/FormCategoryTitle";
import EditInput from "components/mypick/EditInput";
import KeyWordTag from "components/mypick/KeyWordTag";
import MyMedicineList from "components/mypick/MyMedicineList";
import MedSearchInput from "components/mypick/MedSearchInput";
import HxForm from "components/mypick/HxForm";
const TemplateEditMed = () => {
  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <div className="w-full flex flex-col items-center">
        <div className="w-[90%] flex flex-col items-start mt-4 mb-8">
          <FormCategoryTitle
            title="이름"
            icon={false}
            iTitle=""
            sub={false}
            subtitle=""
          />
          <EditInput placeholder="이름을 입력해주세요"></EditInput>
        </div>
        <div className="w-[90%] flex flex-col items-start mb-8">
          <FormCategoryTitle
            title="나이"
            icon={false}
            iTitle=""
            sub={false}
            subtitle=""
          />
          <EditInput placeholder="나이를 입력해주세요"></EditInput>
        </div>
        {/* 성별 체크 */}
        <div className="w-[90%] flex flex-col items-center">
          <h1 className="text-darkblue1 text-md font-black mb-4">성별</h1>
          <div className="w-full h-full flex justify-evenly">
            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] rounded-[13px] backdrop-blur border-[1px] border-blue3 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all">
                d
              </div>
              <span className="text-darkblue1 text-[14px] font-bold mt-2">
                여성
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] rounded-[13px] backdrop-blur border-[1px] border-blue3 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all">
                d
              </div>
              <span className="text-darkblue1 text-[14px] font-bold mt-2">
                남성
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* devider */}
      <div className="w-full h-[10px] bg-blue3" />
      {/* 관심 키워드 */}
      <div className="w-full flex flex-col items-center">
        <div className="w-[90%] flex flex-col items-start">
          <FormCategoryTitle
            title="관심키워드"
            icon={true}
            iTitle="추가하기"
            sub={true}
            subtitle="관심있는 키워드를 최대 4가지 신청할 수 있습니다."
          />
          <div className="bg-yellow2 w-full h-fit mb-8">
            {[
              "장건강",
              "지구력 증진",
              "수면",
              "뼈, 관절",
              "시력, 눈건강",
              "에너지, 대사",
              "면역",
              "책",
            ].map((value, index) => (
              <KeyWordTag key={`keyword-tag-${index}`} tag={value}></KeyWordTag>
            ))}
          </div>

          {/* 섭취하고 있는 영양제를 입력해보세요 */}
          <FormCategoryTitle
            title="섭취하고 있는 영양제를 입력해보세요"
            icon={true}
            iTitle="수정하기"
            sub={true}
            subtitle="약사분과 상담시 약사분께서 해당 건강이력을 참고할 수 있습니다."
          />
          <div className="w-full mb-8">
            <MedSearchInput />
          </div>
          <div className="w-full h-fit mb-8">
            {[
              "Bioton 5000mcg",
              "비타할로 비타민D 2000IU",
              "동아비타민C1000플러스",
              "장건강 365 프리바이오틱스 프로바이오틱스",
            ].map((value, index) => (
              <MyMedicineList
                key={`my-medicine-list-${index}`}
                contents={value}
                icon={true}
              />
            ))}
          </div>
          <FormCategoryTitle
            title="나의 건강 이력"
            icon={true}
            iTitle="수정하기"
            sub={true}
            subtitle="약사분과 상담시 약사분께서 해당 건강이력을 참고할 수 있습니다."
          />
          <HxForm />
          <div className="mb-8" />
          <FormCategoryTitle
            title="섭취 중인 영양제"
            icon={true}
            iTitle="수정하기"
            sub={true}
            subtitle="약사분과 상담시 약사분께서 해당 건강이력을 참고할 수 있습니다."
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-[90%] rounded-full h-[40px] text-blue2 font-bold shadow-md">
          저장하기
        </button>
      </div>
    </Layout>
  );
};

export default TemplateEditMed;
