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

  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const auth = localStorage.getItem("authorization");
    if (!auth) return;
    setToken(auth ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(token)]);

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
      const newList = newKeywords?.map((value, index) => {
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
      const newList = newKeywords?.map((value, index) => {
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
    const takingMedList = [...userMediHx, value];
    setUserMediHx(takingMedList);
  };

  const submitData = async () => {
    try {
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
          Authorization: token,
        },
      });
      if (submitMyInfo?.data?.success) {
        alert("??????!");
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
            title="??????"
            icon={false}
            iTitle=""
            sub={false}
            subtitle=""
          />
          <EditInput setState={setUserName} placeholder="????????? ??????????????????" />
        </div>
        <div className="w-[90%] flex flex-col items-start mb-8">
          <FormCategoryTitle
            title="??????"
            icon={false}
            iTitle=""
            sub={false}
            subtitle=""
          />
          <EditInput setState={setUserAge} placeholder="????????? ??????????????????" />
        </div>
        {/* ?????? ?????? */}
        <SexBtn
          handleUserSex={handleUserSex}
          userSex={userSex}
          femaleHx={femaleHx}
          handleFemaleHx={handleFemaleHx}
        />
      </div>
      {/* devider */}
      <div className="w-full h-[10px] bg-blue3" />
      {/* ?????? ????????? */}
      <div className="w-full flex flex-col items-center">
        <div className="w-[90%] flex flex-col items-start">
          <FormCategoryTitle
            title="???????????????"
            sub={true}
            subtitle="???????????? ???????????? ?????? 4?????? ????????? ??? ????????????."
          />
          <div className="w-full h-fit mb-8">
            {HealthKeywords?.map((value, index) => (
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
            title="???????????? ?????? ???????????? ??????????????????"
            sub={true}
            subtitle=""
          />
          <div className="w-full mb-3">
            <MedSearchInput
              placeholder="???????????? ?????? ????????? ??????"
              setState={setTakingMed}
              token={token}
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

          {/* ???????????? ?????? ???????????? ?????????????????? */}
          <FormCategoryTitle title="?????? ?????? ?????????" sub={true} subtitle="" />
          <div className=" w-full flex flex-col items-center">
            <div className="w-full h-fit mb-8">
              {userMediHx?.map((value, index) => (
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
              title="?????? ?????? ??????"
              sub={true}
              subtitle="???????????? ????????? ??????????????? ?????? ??????????????? ????????? ??? ????????????."
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
          ????????????
        </button>
      </div>
    </Layout>
  );
};

export default TemplateEditMed;
