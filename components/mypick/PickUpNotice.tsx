import Image from "next/image";
import aram from "../../assets/images/icons/aram.svg";

const PickUpNotice = () => {
  return (
    <div className="flex flex-col items-center fixed bottom-0 bg-coolgray1 h-[180px] shadow-pick_up_shadow ">
      <div className="w-[80%] mb-1 flex items-center">
        <Image src={aram} alt="" />
        <span className="ml-2 text-md text-blue2">픽업 관련 안내</span>
      </div>
      <div className="text-sm px-[5%] bg-blue4 mt-4 flex flex-col items-start justify-center w-[80%] h-fit  shadow-lg rounded-lg">
        <ul className="ml-3 list-disc marker:text-[#000000] marker :text-[10px]">
          <li className="mb-1">픽업 안내 이후 3일 이내 수령해주세요.</li>
          <li className="mb-1">픽업 가능 시간은 약국마다 상이합니다.</li>
          <li className="mb-1">
            {`상품 수령 시 찾아가시는 고객님의 정보가 다를 경우,\n
            상품 인도에 제한이 있을 수 있습니다.`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PickUpNotice;
