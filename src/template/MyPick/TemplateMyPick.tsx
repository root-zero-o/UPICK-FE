import Layout from "components/Layout";
import Seo from "components/Seo";
import MyPickHeader from "components/mypick/MyPickHeader";
import NavBar from "components/NavBar";
import MedicineHx from "src/components/MyPick/MedicineHx";
import MyHx from "src/components/MyPick/MyHx";
import WishKeywords from "src/components/MyPick/WishKeywords";
import CurrentView from "src/components/MyPick/CurrentView";
import TabMenu from "src/components/MyPick/TabMenu";
import MyProfile from "src/components/MyPick/MyProfile";
import HealthNotice from "src/components/MyPick/HealthNotice";
import axios from "axios";
import { useEffect, useState } from "react";
import { TypeMyPickData, TypeRecentMed } from "src/types/MyPickData";
import MyPickHeaders from "components/mypick/MyPickHeaders";
import { Router, useRouter } from "next/router";

const TemplateMyPick = () => {
  const [token, setToken] = useState<string>("");
  // const token = localStorage.getItem("authorization");

  const [myPickData, setMyPickData] = useState<TypeMyPickData>(
    {} as TypeMyPickData
  );
  const [recentMedList, setRecentMedList] = useState<TypeRecentMed[]>([]);
  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/details`,
        headers: {
          Authorization: token,
        },
      });
      setMyPickData(result?.data?.data?._customer);
      setRecentMedList(result?.data?.data?.merchandises);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("authorization");
    if (!auth) {
      router.push("/");
      return;
    }
    setToken(auth ?? "");
    response();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(token)]);

  const router = useRouter();
  const goEdit = () => {
    router.push("/mypick/edit");
  };
  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="mypick" />
      <div className=" w-full flex flex-col items-center">
        {/* <MyPickHeader /> */}
        {!myPickData ? <MyPickHeader /> : <MyPickHeaders />}
        <MyProfile myPickData={myPickData} />
        {myPickData && (
          <div
            onClick={goEdit}
            className="mt-4 w-[335px]  h-[48px]  text-white rounded-full bg-coolgray1/30 backdrop-blur border-[1px] border-white flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all"
          >
            <span className="text-[18px] my-2">내 건강문진표 수정하기</span>
          </div>
        )}
        <TabMenu />
        {!myPickData?.age && <HealthNotice />}
        <WishKeywords myPickData={myPickData} />
        <MedicineHx myPickData={myPickData} />
        <MyHx myPickData={myPickData} />
      </div>
      <CurrentView myPickData={recentMedList} />
      <NavBar location="myPick" />
    </Layout>
  );
};

export default TemplateMyPick;
