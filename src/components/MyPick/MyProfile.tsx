import setting from "../../../assets/images/icons/SETTING_W.svg";
import Image from "next/image";

const MyProfile = () => {
  return (
    <>
      <div className="flex justify-between w-[90%] z-40">
        <span className="text-lg text-white font-semibold mb-2">
          홍길동님 (남자/26세)
        </span>
        <Image alt="" src={setting} />
      </div>
    </>
  );
};

export default MyProfile;
