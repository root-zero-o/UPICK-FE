import setting from "../../../assets/images/icons/SETTING_W.svg";
import Image from "next/image";
import { TypeMyPickData } from "src/types/MyPickData";
import { FC } from "react";
import Router from "next/router";

interface IProps {
  myPickData: TypeMyPickData;
}
const MyProfile: FC<IProps> = ({ myPickData }) => {
  const logoutHandler = () => {
    localStorage.removeItem("authorization");
    alert("다음에 또 만나요!");
    Router.push("/");
  };
  return (
    <>
      <div className="flex justify-between w-[90%] z-40">
        <span className="text-lg text-white font-semibold mb-2">
          {`${myPickData?.name ?? ""}님 (${
            myPickData?.gender === "male" ? "남자" : "여자"
          }/${myPickData?.age ?? 0}세)`}
        </span>
        <Image
          onClick={logoutHandler}
          alt=""
          src={setting}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default MyProfile;
