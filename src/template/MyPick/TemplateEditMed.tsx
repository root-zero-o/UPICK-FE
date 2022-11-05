import Layout from "components/Layout";
import FormCategoryTitle from "components/ui/FormCategoryTitle";
import EditInput from "components/mypick/EditInput";
import KeyWordTag from "components/mypick/KeyWordTag";
import MyMedicineList from "components/mypick/MyMedicineList";
import MedSearchInput from "components/mypick/MedSearchInput";
import HxForm from "components/mypick/HxForm";
import { useState } from "react";
import SexBtn from "components/mypick/SexBtn";
import axios from "axios";
const TemplateEditMed = () => {
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<string>("");
  const [userSex, setUserSex] = useState<string>(""); // boolean?
  const [userMediHx, setUserMediHx] = useState<string>("");
  const [userKeywords, setUserKewords] = useState<string[]>([]);
  const [userDx, setUserDx] = useState<string[]>([]);
  const [userActivity, setUserActivity] = useState<string>("");

  // console.log(`
  //   name : ${userName},
  //   age : ${userAge}
  // `);

  const handleSetKeywords = (keword: string) => {
    if (userKeywords.length > 3 && !userKeywords.includes(keword)) return;
    if (userKeywords.length > 3 && userKeywords.includes(keword)) {
      const newKeywords = userKeywords.filter((value) => value !== keword);
      setUserKewords(newKeywords);
      return;
    }
    if (userKeywords.includes(keword)) {
      const newKeywords = userKeywords.filter((value) => value !== keword);
      setUserKewords(newKeywords);
      return;
    }
    const keywordsList = [...userKeywords, keword];
    setUserKewords(keywordsList);
  };

  const handleUserDx = (dx: string) => {
    if (userDx.includes(dx)) {
      const newDx = userDx.filter((value) => value !== dx);
      setUserDx(newDx);
      return;
    }
    const dxList = [...userDx, dx];
    setUserDx(dxList);
  };

  const data = {
    name: userName,
    age: userAge,
    sex: userSex,
    mediHx: userMediHx,
    keywords: userKeywords,
  };

  const submitData = async () => {
    try {
      const submitMyInfo = await axios({
        method: "POST",
        data: data,
        url: ``,
        // headers : {
        //   Authorization : `Bearer 123`
        // }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          <EditInput setState={setUserName} placeholder="이름을 입력해주세요" />
        </div>
        <div className="w-[90%] flex flex-col items-start mb-8">
          <FormCategoryTitle
            title="나이"
            icon={false}
            iTitle=""
            sub={false}
            subtitle=""
          />
          <EditInput setState={setUserAge} placeholder="나이를 입력해주세요" />
        </div>
        {/* 성별 체크 */}
        <SexBtn />
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
              <KeyWordTag
                key={`keyword-tag-${index}`}
                tag={value}
                onClick={handleSetKeywords}
                userKeywords={userKeywords}
              ></KeyWordTag>
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
            <MedSearchInput
              placeholder="브랜드명 또는 영양제 검색"
              setState={setUserMediHx}
            />
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
          <HxForm onClick={handleUserDx} userDx={userDx} />
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
