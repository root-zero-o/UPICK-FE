import Layout from "components/Layout";
import FormCategoryTitle from "components/ui/FormCategoryTitle";
import EditInput from "components/mypick/EditInput";
const TemplateEditMed = () => {
  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <div className="w-full flex flex-col bg-orange items-center">
        <div className="w-[90%] bg-blue1 flex flex-col items-start">
          <FormCategoryTitle title="이름" />
          <EditInput placeholder="이름을 입력해주세요"></EditInput>
        </div>
        <div className="w-[90%] bg-blue1 flex flex-col items-start">
          <FormCategoryTitle title="나이" />
          <EditInput placeholder="나이를 입력해주세요"></EditInput>
        </div>
        {/* 성별 체크 */}
        <div className="w-[90%] bg-blue1 flex flex-col items-center">
          <h1 className="text-darkblue1 text-md font-black mb-4">성별</h1>
          <div className="w-full h-full bg-green flex justify-evenly">
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
        x
      </div>
      {/* devider */}
      <div className="w-full h-[10px] bg-blue3" />
      {/* 관심 키워드 */}
      <div className="w-full flex flex-col bg-orange items-center">
        <div className="w-[90%] flex flex-col items-start">
          <FormCategoryTitle title="관심키워드"></FormCategoryTitle>
          <span className="text-sm text-blue2 font-medium">
            관심있는 키워드를 최대 4가지 신청할 수 있습니다.
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default TemplateEditMed;
