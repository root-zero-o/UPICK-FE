import Layout from "components/Layout";
import PickUpNotice from "components/mypick/PickUpNotice";
import PickUpCards from "src/components/MyPick/PickUpCards";
import { PickUpStatusEnum } from "src/types/EnumPickUpStatus";
const TemplatePickUpDate = () => {
  const data = [
    {
      pharmacy: "ㅇㅇㅇ약국",
      pharmacyAddress: "지구별 어딘가",
      imageUrl: "string",
      medicine: "광동 비타민 C 1000mg*240정",
      reservation: "2022년 00월 00일 00시 00분",
      price: "12,600원",
      pickUpTime: `월 - 토 오전 11:00 - 오후 8:00`,
      status: PickUpStatusEnum.Concluded,
    },
    {
      pharmacy: "ㅇㅇㅇ약국",
      pharmacyAddress: "지구별 어딘가",
      imageUrl: "string",
      medicine: "광동 비타민 C 1000mg*240정",
      reservation: "2022년 00월 00일 00시 00분",
      price: "12,600원",
      pickUpTime: `월 - 토 오전 11:00 - 오후 8:00`,
      status: PickUpStatusEnum.Concluded,
    },
    {
      pharmacy: "ㅇㅇㅇ약국",
      pharmacyAddress: "지구별 어딘가",
      imageUrl: "string",
      medicine: "광동 비타민 C 1000mg*240정",
      reservation: "2022년 00월 00일 00시 00분",
      price: "12,600원",
      pickUpTime: `월 - 토 오전 11:00 - 오후 8:00`,
      status: PickUpStatusEnum.Concluded,
    },
    {
      pharmacy: "ㅇㅇㅇ약국",
      pharmacyAddress: "지구별 어딘가",
      imageUrl: "string",
      medicine: "광동 비타민 C 1000mg*240정",
      reservation: "2022년 00월 00일 00시 00분",
      price: "12,600원",
      pickUpTime: `월 - 토 오전 11:00 - 오후 8:00`,
      status: PickUpStatusEnum.Concluded,
    },
    {
      pharmacy: "ㅇㅇㅇ약국",
      pharmacyAddress: "지구별 어딘가",
      imageUrl: "string",
      medicine: "광동 비타민 C 1000mg*240정",
      reservation: "2022년 00월 00일 00시 00분",
      price: "12,600원",
      pickUpTime: `월 - 토 오전 11:00 - 오후 8:00`,
      status: PickUpStatusEnum.Concluded,
    },
  ];
  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <div className="w-full flex flex-col items-center mt-4 ">
        <PickUpCards data={data} />
        <PickUpNotice />
      </div>
    </Layout>
  );
};
export default TemplatePickUpDate;
