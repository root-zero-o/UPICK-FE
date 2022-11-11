import useClickRoute from "hooks/useClickRoute";
import CheckIcon from "assets/images/icons/CheckIcon.svg";
import CheckDoneIcon from "assets/images/icons/CheckDoneIcon.svg";
import Image from "next/image";
import { useState } from "react";

const Tos = () => {
  const onLink = useClickRoute({ link: "/signupdetail" });
  const [locationCheck, setLocationCheck] = useState(false);
  const [otherCheck, setOtherCheck] = useState(false);
  const onDisabledHandler = () => {
    if (locationCheck && otherCheck) return false;
    return true;
  };
  return (
    <div className="relative h-screen flex flex-col items-center justify-between">
      <div className="relative flex w-full h-[158px] bg-gradient-two rounded-b-[101px] overflow-hidden">
        <div className="absolute w-[440px] h-[415px] rounded-full bg-gradient-three top-[-184px] left-[-93px] z-10" />
        <div className="absolute w-[504px] h-[415px] rounded-full bg-gradient-three top-[82px] left-[6px]" />
        <span className="text-white text-[26px] font-bold ml-[40px] mt-[50px] z-20">
          이용약관
        </span>
      </div>
      <div className="overflow-scroll max-h-[600px] w-[90%] font">
        <p className="title mb-[17px]">개인정보의 처리목적</p>
        <p className="mb-[17px]">
          유픽은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
          개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
          변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는
          등 필요한 조치를 이행할 예정입니다. 1. 회원 가입 및 관리 회원 가입의사
          확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리,
          서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시
          법정대리인의 동의여부 확인, 각종 고지·통지, 고충처리 목적으로
          개인정보를 처리합니다. 2. 재화 또는 서비스 제공 물품배송, 서비스 제공,
          계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증,
          요금결제·정산, 채권추심으로 개인정보를 처리합니다. 0. [해당
          개인정보처리자의 개인정보 처리업무] [개인정보 처리업무에 따른
          처리목적]으로 개인정보를 처리합니다.
        </p>
        <div className="flex justify-between">
          <p className="title mb-[8px]">위치정보</p>
          <div
            className="mr-[15px] boxBorder"
            onClick={() => {
              setLocationCheck((b) => !b);
            }}
          >
            {locationCheck ? (
              <Image src={CheckDoneIcon} width="24px" height="14px" alt="" />
            ) : (
              <Image src={CheckIcon} width="24px" height="14px" alt="" />
            )}
          </div>
        </div>
        <p className="mb-[17px]">가까운 약사 및 약국 소개</p>
        <div className="flex justify-between">
          <p className="title mb-[8px]">성함, 나이, 건강정보</p>
          <div
            className="mr-[15px] boxBorder"
            onClick={() => {
              setOtherCheck((b) => !b);
            }}
          >
            {otherCheck ? (
              <Image src={CheckDoneIcon} width="24px" height="14px" alt="" />
            ) : (
              <Image src={CheckIcon} width="24px" height="14px" alt="" />
            )}
          </div>
        </div>
        <p>약사 상담 이용시 약사에게 정보 제공</p>
      </div>
      <button
        className="confirmBtn"
        onClick={onLink}
        disabled={onDisabledHandler()}
      >
        모두 확인
      </button>
      <style jsx>{`
        .confirmBtn {
          width: calc(100% - 54px);
          height: 42px;
          background: #1576fb;
          border-radius: 22px;
          margin-bottom: 28px;
          font-size: 14px;
          line-height: 14px;
          color: #f7faff;
        }
        .font {
          color: #4c5d6b;
        }
        .title {
          font-weight: 700;
          line-height: 14px;
        }
        .boxBorder {
          border: 1px solid #e2f0fb;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Tos;
