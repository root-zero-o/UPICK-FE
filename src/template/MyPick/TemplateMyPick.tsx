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

const TemplateMyPick = () => {
  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="mypick" />
      <div className=" w-full flex flex-col items-center">
        <MyPickHeader />
        <MyProfile />
        <TabMenu />
        <HealthNotice />
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
