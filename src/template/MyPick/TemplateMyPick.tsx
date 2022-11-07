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
import { TypeMyPickData } from "src/types/MyPickData";

const TemplateMyPick = () => {
  const queryResult = true;
  const [myPickData, setMyPickData] = useState<TypeMyPickData>(
    {} as TypeMyPickData
  );

  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/details`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      setMyPickData(result?.data?.data?._customer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="mypick" />
      <div className=" w-full flex flex-col items-center">
        <MyPickHeader />
        <MyProfile myPickData={myPickData} />
        <TabMenu />
        {!queryResult && <HealthNotice />}
        <WishKeywords myPickData={myPickData} />
        <MedicineHx myPickData={myPickData} />
        <MyHx myPickData={myPickData} />
      </div>
      <CurrentView />
      <NavBar location="myPick" />
    </Layout>
  );
};

export default TemplateMyPick;
