import axios from "axios";
import Layout from "components/Layout";
import PickUpNotice from "components/mypick/PickUpNotice";
import { useEffect, useState } from "react";
import { ConsoleView } from "react-device-detect";
import { useSelector } from "react-redux";
import PickUpCards from "src/components/MyPick/PickUpCards";
import { PickUpStatusEnum } from "src/types/EnumPickUpStatus";
import { TypesPickUp } from "src/types/MyPickData";
import { RootState } from "store/modules";
const TemplatePickUpDate = () => {
  const [token, setToken] = useState<string>("");
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

  const [pickData, setPickData] = useState<TypesPickUp[]>();
  const [yetPickData, setYetPickData] = useState<TypesPickUp[]>();

  const timeStamp = (v: any) => {
    const date = v.split("T");
    const day = date?.[0];
    const regMonth = day?.split("-")[1];
    const regDay = day?.split("-")[2];
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = week[new Date(day).getDay()];

    return `${regMonth}/${regDay} ${dayOfWeek}요일 픽업 예정`;
  };

  const response = async () => {
    try {
      const me = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/me`,
        headers: {
          Authorization: token,
        },
      });

      const id = me?.data?.data?.id;
      try {
        const result = await axios({
          method: "GET",
          url: `${process.env.NEXT_PUBLIC_SERVER}/customers/${id}/my-pick/pick-up-list/picked`,
          headers: {
            Authorization: token,
          },
        });
        const result2 = await axios({
          method: "GET",
          url: `${process.env.NEXT_PUBLIC_SERVER}/customers/${id}/my-pick/pick-up-list/to-pick`,
          headers: {
            Authorization: token,
          },
        });
        setYetPickData(result2?.data?.data);
        setPickData(result?.data?.data);
      } catch (error) {
        console.log(error);
      }
      // setMyPickData(result?.data?.data?._customer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("authorization");
    if (!auth) return;
    setToken(auth ?? "");
    response();
  }, [JSON.stringify(token)]);

  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <div className="w-[100%] flex flex-col items-center mt-4 ">
        <PickUpCards
          data={pickData ?? []}
          datas={yetPickData ?? []}
          timeStamp={timeStamp}
        />
        <div className="h-[300px] w-[100%]"></div>
        <PickUpNotice />
      </div>
    </Layout>
  );
};
export default TemplatePickUpDate;
