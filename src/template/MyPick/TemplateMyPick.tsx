import Layout from "components/Layout";
import Seo from "components/Seo";
import MyPickHeader from "components/mypick/MyPickHeader";
import BlurBtn from "components/ui/BlurBtn";
import fullHeart from "../../../assets/images/icons/fullHeart.svg";
import chat from "../../../assets/images/icons/chat.svg";
import CategoryTitle from "components/ui/CategoryTitle";
import HealthMarker from "components/mypick/HealthMarker";
import HealthPoints from "components/mypick/HealthPoints";
import MyMedicineList from "components/mypick/MyMedicineList";
import HxBtn from "components/mypick/HxBtn";
import Checkbox from "components/mypick/CheckBox";
import NavBar from "components/NavBar";
import RecentMed from "components/mypick/RecentMed";
import { useState } from "react";
import MedicineHx from "src/components/MyPick/MedicineHx";
import MyHx from "src/components/MyPick/MyHx";
import WishKeywords from "src/components/MyPick/WishKeywords";
import CurrentView from "src/components/MyPick/CurrentView";
import TabMenu from "src/components/MyPick/TabMenu";
import MyProfile from "src/components/MyPick/MyProfile";

const TemplateMyPick = () => {
  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="mypick" />
      <div className=" w-full flex flex-col items-center">
        <MyPickHeader />
        <MyProfile />
        <TabMenu />
        <WishKeywords />
        <MedicineHx />
        <MyHx />
      </div>
      <CurrentView />
      <NavBar location="myPick" />
    </Layout>
  );
};

export default TemplateMyPick;
