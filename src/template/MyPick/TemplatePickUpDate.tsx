import axios from "axios";
import Layout from "components/Layout";
import PickUpNotice from "components/mypick/PickUpNotice";
import { useEffect } from "react";
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

  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/like/pharmacists`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      console.log(result);
      // setMyPickData(result?.data?.data?._customer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

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
