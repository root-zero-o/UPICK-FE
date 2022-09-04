import Image from "next/image";
import notification from "../assets/images/icons/ic_noti.svg";
import star_fill from "../assets/images/icons/star-fill.svg";
import star_empty from "../assets/images/icons/star-emp.svg";
import useClickRoute from "hooks/useClickRoute";
import BackBtn from "components/BackBtn";
import heart_fill from "../assets/images/icons/heart-fill.svg";
import bgOne from "../assets/images/bgOne.svg";

const PickDetail = () => {
  const onLink = useClickRoute({ link: "/alert" });
  return (
    <div className="w-full h-full flex flex-col pt-[32px] relative overflow-x-hidden bg-coolgray1">
      {/* Header - Done */}
      <div className="flex justify-between items-center pl-[20px] ">
        <BackBtn type="blue" />
        <div onClick={onLink} className="hover:cursor-pointer pr-[20px]">
          <Image alt="" src={notification} />
        </div>
      </div>
      {/* Category */}
      <div className="flex mt-[40px] ml-[20px] text-[12px] font-bold text-darkblue1">
        <div className="mr-[20px]">
          <span>한성준 약사</span>
        </div>
        <div>
          <span>애옹애옹 약국</span>
        </div>
      </div>
      {/* 타이틀 */}
      <div className="flex flex-col  ml-[20px] mt-[12px] text-[22px] text-darkblue1 font-bold">
        <span>무더위, 에너지가 없다면? </span>
        <span>추천하는 비타민 C 종류</span>
      </div>
      {/* Line Bar */}
      <div className="w-[calc(100%-40px)] h-[1px] border-solid border-coolgray3 border-[1px] ml-[20px] mt-[8px]" />

      {/* 태그 + 작은설명 + 사진 */}
      <div className="flex justify-between mt-[8px]">
        <div className="ml-[20px]">
          {/* 태그 */}
          <div className="flex text-white">
            <div className="bg-coolgray3 p-[4px] rounded-[10px] mr-[8px]">
              무더위 추천
            </div>
            <div className="bg-coolgray3 p-[4px] rounded-[10px] mr-[8px]">
              비타민C
            </div>
            <div className="bg-coolgray3 p-[4px] rounded-[10px] mr-[8px]">
              항산화
            </div>
          </div>
          {/* 작은설명 */}
          <div className="w-[220px] mt-[18px] text-darkblue2 text-[14px] font-semibold ml-[10px]">
            <span className="leading-5">
              무더위로 인해 체력이 많이 떨어지는 날에는 보양식들을 많이
              찾는데요, 비타민계에서 보양식에 해당하는 것은 바로 비타민C라고 볼
              수 있습니다.
            </span>
          </div>
        </div>
        {/* 사진 */}
        <div className="w-[90px] h-[113px] bg-green rounded-[9px] mr-[20px]"></div>
      </div>
      {/* 큰설명 */}
      <div className="w-[calc(100%-40px)] bg-white m-auto mt-[26px]">
        <div className="p-[16px] text-[13px] leading-2">
          <div>
            비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를
            보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을
            촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다.
            자외선 차단제를 꾸준히 바르는 것 못지 않게 음료나 종합영양제 등을
            통해 비타민C를 섭취하는 것은 피부 건강에 도움이 된다.
          </div>
          <div className="mt-[20px]">
            비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를
            보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을
            촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다.
          </div>
          <div className="mt-[20px]">
            비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를
            보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을
            촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다.
          </div>
          <div className="mt-[20px]">
            비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를
            보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을
            촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다.
          </div>
        </div>
      </div>
      {/* 추천 약 리스트 + 좋아요 */}
      <div className="w-[calc(100%-60px)] flex justify-between text-[18px] text-darkblue1 font-bold mt-[40px] m-auto">
        <span>추천 약 리스트</span>
        <div>
          <Image src={heart_fill} alt="heart" />
          <div className="text-[10px]">236</div>
        </div>
      </div>
      {/* 배경 + 약 정보 박스 */}
      <div className="flex flex-col justify-center bg-blue1 p-[16px]">
        <div className="w-full h-[295px] bg-blue3/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[13px] z-20 pl-[27px] mb-[16px]">
          {/* 약 사진 */}
          <div className="w-[64px] h-[72px] bg-white mt-[26px] rounded-[9px] mb-[18px]" />
          {/* 약 이름 */}
          <span className="text-[18px] text-darkblue1 font-bold">
            커클랜드 비타민C 500mg
          </span>
          {/* 복용법 */}
          <div className="flex items-center mt-[16px] text-[12px]">
            <div className="bg-coolgray4 p-[4px] rounded-[10px] mr-[8px] text-white ">
              섭취 용량
            </div>
            <div className="text-coolgray4">1일 1정 2회</div>
          </div>
          {/* 설명서 */}
          <div className="text-coolgray4 font-semibold text-[12px] pr-[27px] mt-[8px]">
            500mg으로 13세 이하의 자녀가 섭취하기에도 적절한 용량입니다. 임산부
            섭취도 가능하나, 주치의와 상의후 드시는 것을 추천드리고 있습니다.
          </div>
          {/* 별점 */}
          <div className="flex mt-[8px] gap-2">
            <Image alt="" src={star_fill} className="star" />
            <Image alt="" src={star_fill} className="star" />
            <Image alt="" src={star_fill} className="star" />
            <Image alt="" src={star_fill} className="star" />
            <Image alt="" src={star_empty} className="star" />
          </div>
        </div>
        <div className="w-full h-[295px] bg-blue3/50 backdrop-blur-md border-[2px] border-opacity-[0.56] border-white rounded-[13px] z-20 pl-[27px] mb-[16px]">
          {/* 약 사진 */}
          <div className="w-[64px] h-[72px] bg-white mt-[26px] rounded-[9px] mb-[18px]" />
          {/* 약 이름 */}
          <span className="text-[18px] text-darkblue1 font-bold">
            커클랜드 비타민C 500mg
          </span>
          {/* 복용법 */}
          <div className="flex items-center mt-[16px] text-[12px]">
            <div className="bg-coolgray4 p-[4px] rounded-[10px] mr-[8px] text-white ">
              섭취 용량
            </div>
            <div className="text-coolgray4">1일 1정 2회</div>
          </div>
          {/* 설명서 */}
          <div className="text-coolgray4 font-semibold text-[12px] pr-[27px] mt-[8px]">
            500mg으로 13세 이하의 자녀가 섭취하기에도 적절한 용량입니다. 임산부
            섭취도 가능하나, 주치의와 상의후 드시는 것을 추천드리고 있습니다.
          </div>
          {/* 별점 */}
          <div className="flex mt-[8px] gap-2">
            <Image alt="" src={star_fill} />
            <Image alt="" src={star_fill} />
            <Image alt="" src={star_fill} />
            <Image alt="" src={star_fill} />
            <Image alt="" src={star_empty} />
          </div>
        </div>
      </div>
      {/* 예약하기 버튼 */}
      <div className="button-bg flex justify-center">
        <button className="w-[335px] h-[40px] bg-coolgray1 rounded-[22px] text-center text-[14px] text-coolgray3 m-auto shadow-button_shadow font-bold">
          약국에 <span className="text-cyan">영양제 픽업 예약하기</span>
        </button>
      </div>
      <style jsx>{`
        .button-bg {
          width: 100%;
          height: 100%;
          padding: 10px 0;
          background: #eaeff8;
          box-shadow: 0px -3px 4px #b1c2d0;
          backdrop-filter: blur(40px);
        }
      `}</style>
    </div>
  );
};

export default PickDetail;
