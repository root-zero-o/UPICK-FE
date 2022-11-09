import Layout from "components/Layout";
import FormCategoryTitle from "components/ui/FormCategoryTitle";
import EditInput from "components/mypick/EditInput";
import KeyWordTag from "components/mypick/KeyWordTag";
import MyMedicineList from "components/mypick/MyMedicineList";
import MedSearchInput from "components/mypick/MedSearchInput";
import HxForm from "components/mypick/HxForm";
import { useEffect, useState } from "react";
import SexBtn from "components/mypick/SexBtn";
import { HealthKeywords } from "src/types/EnumHealthKeyword";
import { EnumDx } from "../../types/EnumDx";
import { EnumFemaleHx } from "../../types/EnumFemaleHx";

import {
  EnumActivityDue,
  EnumActivityDuration,
} from "../../types/EnumActivityDuration";

import axios from "axios";
import { TypeMyPickData } from "src/types/MyPickData";
import Router from "next/router";
type considerIdTypes = {
  considerId: number;
};
const TemplateEditMed = () => {
  const [myPickData, setMyPickData] = useState<TypeMyPickData>(
    {} as TypeMyPickData
  );

  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<number>(0);
  const [userSex, setUserSex] = useState<string>(""); // boolean?
  const [userMediHx, setUserMediHx] = useState<any[]>([]);
  const [userKeywords, setUserKewords] = useState<string[]>([]);
  const [considerList, setConsiderList] = useState<considerIdTypes[]>([]);
  const [userDx, setUserDx] = useState<string[]>([]);
  const [userActivity, setUserActivity] = useState<string>("");
  const [femaleHx, setFemaleHx] = useState<string[]>([]);
  const [userMemo, setUserMemo] = useState<string>("");
  const [takingMed, setTakingMed] = useState<any[]>([]);

  const handleActivity = (activity: string) => {
    switch (activity) {
      case EnumActivityDue.Every:
        return EnumActivityDue.Every;
      case EnumActivityDue.One:
        return EnumActivityDue.One;
      case EnumActivityDue.TwoOrThree:
        return EnumActivityDue.TwoOrThree;
      case EnumActivityDue.FourOrFive:
        return EnumActivityDue.FourOrFive;
      case EnumActivityDue.None:
        return EnumActivityDue.None;
      default:
        return;
    }
  };

  const handleActivityy = (activity: string) => {
    switch (activity) {
      case EnumActivityDue.Every:
        return EnumActivityDuration.Every;
      case EnumActivityDue.One:
        return EnumActivityDuration.One;
      case EnumActivityDue.TwoOrThree:
        return EnumActivityDuration.TwoOrThree;
      case EnumActivityDue.FourOrFive:
        return EnumActivityDuration.FourOrFive;
      case EnumActivityDue.None:
        return EnumActivityDuration.None;
      default:
        return;
    }
  };

  const newData = {
    name: userName,
    age: Number(userAge),
    gender: userSex,
    isPregnant: femaleHx.includes(EnumFemaleHx.isPregnant),
    isBreastFeed: femaleHx.includes(EnumFemaleHx.isBreastFeed),
    considerIds: [...considerList?.map((v, i) => v.considerId)],
    medicineNames: [...userMediHx?.map((v, i) => v.name)],
    stroke: userDx.includes(EnumDx.stroke),
    heartDisease: userDx.includes(EnumDx.heartDisease),
    highBloodPressure: userDx.includes(EnumDx.highBloodPressure),
    diabetes: userDx.includes(EnumDx.diabetes),
    etc: userDx.includes(EnumDx.etc),
    takingExcerciseTimePerAWeek: handleActivityy(userActivity),
    memo: userMemo,
  };
  const data = {
    name: userName,
    age: userAge,
    gender: userSex,
    isBreastFeed: femaleHx.includes(EnumFemaleHx.isBreastFeed),
    isPregnant: femaleHx.includes(EnumFemaleHx.isPregnant),
    CustomerToConsider: considerList,
    TakingMedicine: userMediHx,
    CustomerDetails: [
      {
        takingExcerciseTimePerAWeek: handleActivity(userActivity),
        stroke: userDx.includes(EnumDx.stroke),
        heartDisease: userDx.includes(EnumDx.heartDisease),
        highBloodPressure: userDx.includes(EnumDx.highBloodPressure),
        diabetes: userDx.includes(EnumDx.diabetes),
        etc: userDx.includes(EnumDx.etc),
        memo: userMemo,
      },
    ],
  };

  const handleFemaleHx = (hx: string) => {
    if (femaleHx.includes(hx)) {
      const newHx = femaleHx.filter((value) => value !== hx);
      setFemaleHx(newHx);
      return;
    }
    const hxList = [...femaleHx, hx];
    setFemaleHx(hxList);
  };

  const handleSetKeywords = (keword: string) => {
    if (userKeywords.length > 3 && !userKeywords.includes(keword)) return;
    if (userKeywords.length > 3 && userKeywords.includes(keword)) {
      const newKeywords = userKeywords.filter((value) => value !== keword);
      setUserKewords(newKeywords);
      const newList = newKeywords.map((value, index) => {
        return {
          considerId: HealthKeywords.indexOf(value) - 1,
        };
      });
      setConsiderList(newList);
      return;
    }
    if (userKeywords.includes(keword)) {
      const newKeywords = userKeywords.filter((value) => value !== keword);
      setUserKewords(newKeywords);
      const newList = newKeywords.map((value, index) => {
        return {
          considerId: HealthKeywords.indexOf(value) - 1,
        };
      });
      setConsiderList(newList);
      return;
    }
    const keywordsList = [...userKeywords, keword];
    setUserKewords(keywordsList);
    const newList = keywordsList.map((value, index) => {
      return {
        considerId: HealthKeywords.indexOf(value) + 1,
      };
    });
    setConsiderList(newList);
  };

  console.log(takingMed);
  const handleUserDx = (dx: string) => {
    if (userDx.includes(dx)) {
      const newDx = userDx.filter((value) => value !== dx);
      setUserDx(newDx);
      return;
    }
    const dxList = [...userDx, dx];
    setUserDx(dxList);
  };

  const handleUserSex = (sex: string) => {
    setUserSex(sex);
  };
  const handleSetMed = (value: any) => {
    console.log(value);
    const takingMedList = [...userMediHx, value];
    setUserMediHx(takingMedList);
  };

  const submitData = async () => {
    try {
      console.log(newData);
      console.log(`
      {
        name: ${userName},
        age: ${userAge},
        gender: ${userSex},
        isBreastFeed: ${femaleHx.includes(EnumFemaleHx.isBreastFeed)},
        isPregnant: ${femaleHx.includes(EnumFemaleHx.isPregnant)},
        customerToConsider: ${considerList},
        takingMedicine: ${userMediHx},
        customerDetails: ${[
          {
            takingExcerciseTimePerAWeek: handleActivity(userActivity),
            stroke: userDx.includes(EnumDx.stroke),
            heartDisease: userDx.includes(EnumDx.heartDisease),
            highBloodPressure: userDx.includes(EnumDx.highBloodPressure),
            diabetes: userDx.includes(EnumDx.diabetes),
            etc: userDx.includes(EnumDx.etc),
            memo: userMemo,
          },
        ]},
      };
      `);
      const submitMyInfo = await axios({
        method: "PATCH",
        data: newData,
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/details`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      if (submitMyInfo?.data?.success) {
        alert("등록!");
        Router.push("/mypick");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSetMed = (value: any) => {
  //   console.log(value);
  //   const takingMedList = [...userMediHx, value];
  //   setUserMediHx(takingMedList);
  // };

  const delMed = (v: any) => {
    const newList = userMediHx.filter((value) => value.name !== v);
    setUserMediHx(newList);
  };
  // const submitData = () => {
  //   console.log(data);
  // };

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
        <SexBtn
          handleUserSex={handleUserSex}
          userSex={userSex}
          femaleHx={femaleHx}
          handleFemaleHx={handleFemaleHx}
        />
      </div>
      {/* devider */}
      <div className="w-full h-[10px] bg-blue3" />
      {/* 관심 키워드 */}
      <div className="w-full flex flex-col items-center">
        <div className="w-[90%] flex flex-col items-start">
          <FormCategoryTitle
            title="관심키워드"
            sub={true}
            subtitle="관심있는 키워드를 최대 4가지 신청할 수 있습니다."
          />
          <div className="w-full h-fit mb-8">
            {HealthKeywords.map((value, index) => (
              <KeyWordTag
                key={`keyword-tag-${index}`}
                tag={value}
                onClick={handleSetKeywords}
                userKeywords={userKeywords}
              ></KeyWordTag>
            ))}
          </div>
          <div className="pt-8"></div>
          <FormCategoryTitle
            title="섭취하고 있는 영양제를 입력해보세요"
            sub={true}
            subtitle=""
          />
          <div className="w-full mb-3">
            <MedSearchInput
              placeholder="브랜드명 또는 영양제 검색"
              setState={setTakingMed}
            />
          </div>
          {takingMed?.map((value, index) => {
            return (
              <>
                {index === 0 && (
                  <>
                    <div
                      style={{
                        marginLeft: "30px",
                        width: 0,
                        height: 0,
                        borderBottom: `15px solid #E2F0FB`,
                        borderTop: `10px solid transparent`,
                        borderLeft: `10px solid transparent`,
                        borderRight: `10px solid transparent`,
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100%",
                        height: `10px`,
                        backgroundColor: `#E2F0FB`,
                        borderTopLeftRadius: `20px`,
                        borderTopRightRadius: `20px`,
                      }}
                    ></div>
                  </>
                )}

                <div className="h-2 w-[100%] bg-coolgray2 selection:rounded-sm" />
                <div
                  key={`searchData-${index}`}
                  className={`rounded-sm bg-coolgray2 py-2 px-4 w-[100%] ${
                    index === takingMed?.length - 1 ? "" : "mb-1"
                  }`}
                  onClick={() => {
                    handleSetMed(value);
                  }}
                >
                  {value.name}
                </div>
                {index === takingMed.length - 1 && (
                  <>
                    <div
                      style={{
                        width: "100%",
                        height: `10px`,
                        backgroundColor: `#E2F0FB`,
                        borderBottomLeftRadius: `20px`,
                        borderBottomRightRadius: `20px`,
                        marginBottom: "60px",
                      }}
                    ></div>
                  </>
                )}
              </>
            );
          })}

          {/* 섭취하고 있는 영양제를 입력해보세요 */}
          <FormCategoryTitle title="섭취 중인 영양제" sub={true} subtitle="" />
          <div className=" w-full flex flex-col items-center">
            <div className="w-full h-fit mb-8">
              {userMediHx.map((value, index) => (
                <MyMedicineList
                  key={`my-medicine-list-${index}`}
                  contents={value.name}
                  icon={true}
                  idx={index}
                  onClick={delMed}
                />
              ))}
            </div>
          </div>

          <div className=" w-full flex flex-col items-center">
            <FormCategoryTitle
              title="나의 건강 이력"
              sub={true}
              subtitle="약사분과 상담시 약사분께서 해당 건강이력을 참고할 수 있습니다."
            />
            <HxForm
              onClick={handleUserDx}
              userDx={userDx}
              handleActivity={handleActivity}
              userActivity={userActivity}
              setUserMemo={setUserMemo}
              setUserActivity={setUserActivity}
            />
          </div>
          <div className="mb-8" />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={submitData}
          className="w-[90%] rounded-full h-[40px] text-blue2 font-bold shadow-md"
        >
          저장하기
        </button>
      </div>
    </Layout>
  );
};

export default TemplateEditMed;
