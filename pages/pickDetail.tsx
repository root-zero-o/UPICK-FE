import Image from "next/image";
import notification from "../assets/images/icons/nofication.svg";
import useClickRoute from "hooks/useClickRoute";
import BackBtn from "components/BackBtn";

const PickDetail = () => {
  const onLink = useClickRoute({ link: "/alert" });
  return (
    <div className="w-full h-screen flex flex-col py-8 relative overflow-x-hidden bg-blue1">
      {/* 헤더 */}
      <div className="flex justify-between items-center pl-[20px] ">
        <BackBtn isWhite={true} />
        <div onClick={onLink} className="hover:cursor-pointer pr-[20px]">
          <Image alt="" src={notification} />
        </div>
      </div>
      {/* 카테고리 */}
      {/* 타이틀 */}
      {/* Line Bar */}
      {/* 태그 + 작은설명 + 사진 */}
      {/* 큰설명 */}
      {/* 추천 약 리스트 + 좋아요 */}
      {/* 배경 + 약 정보 박스 */}
      {/* 예약하기 버튼 */}
    </div>
  );
};

export default PickDetail;
