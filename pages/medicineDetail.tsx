import Image from "next/image";
import notification from "../assets/images/icons/ic_noti.svg";
import BackBtn from "components/BackBtn";
import useClickRoute from "hooks/useClickRoute";
import pathGray from "../assets/images/icons/PathGray.svg";
import heart_line from "../assets/images/icons/heart-line.svg";
import star_fill from "../assets/images/icons/star-fill.svg";
import star_empty from "../assets/images/icons/star-emp.svg";

const MedicineDetail = () => {
  const onLink = useClickRoute({ link: "/alert" });
  return (
    <>
      <div className="w-full h-full flex flex-col pt-[30px] relative overflow-x-hidden bg-blue3">
        {/* Header - Done */}
        <div className="flex justify-between items-center pl-[20px] ">
          <BackBtn type="blue" />
          <div onClick={onLink} className="hover:cursor-pointer pr-[20px]">
            <Image alt="" src={notification} />
          </div>
        </div>
        {/* 약 사진 */}
        <div className="flex justify-center mt-[35px]">
          <div className="w-[320px] h-[200px] bg-orange"></div>
        </div>
        {/* 바디부분 */}
        <div className="bg-coolgray1 px-[21px] rounded-t-[36px] mt-[32px]">
          {/* 약 이름 */}
          <div className="text-[20px] font-extrabold mt-[44px]">
            광동 비타민C 1000mg 240정
          </div>
          {/* 약 복용횟수 */}
          <div className="flex justify-between mt-[8px]">
            <div className="flex items-center text-white text-[12px]">
              <div className="bg-coolgray3 px-[8px] py-[4px] rounded-[37px] mr-[8px]">
                섭취 용량
              </div>
              <div className="text-coolgray3">1일 1정 2회</div>
            </div>
          </div>
          {/* 영양정보 + mg */}
          <div className="flex justify-between text-[16px] mt-[24px]">
            <div className="text-cyan font-bold">영양정보</div>
            <div className="font-semibold">1정(1,000)mg</div>
          </div>
          {/* 영양소 + mg */}
          <div className="flex justify-between text-[14px] mt-[16px]">
            <div className="flex items-center">
              <div className="font-extrabold">비타민 C</div>
              <div className="bg-blue1 px-[4px] text-white text-[10px] ml-[12px] rounded-[33px]">
                필수영양소
              </div>
            </div>
            <div className="flex items-center">
              <div className="font-extrabold">1000mg</div>
              <div className="text-coolgray4 ml-[4px] text-[12px]">
                (7-8개월분)
              </div>
            </div>
          </div>
          {/* 영양소 소개 */}
          <div className="text-[10px] text-coolgray4 mt-[19px]">
            신체의 정상적인 기능 유지를 위해 필수적으로 필요하거나, 우리 몸에서
            합성되지 않아 섭취해야하는 영양소를 종합하여 선정한 한국인 필수 섭취
            영양소.
          </div>
          {/* 기능 타이틀*/}
          <div className="flex justify-between items-center mt-[98px]">
            <div className="text-cyan font-bold">기능</div>
            <div className="text-[12px] text-coolgray1 bg-blue1 rounded-[33px] px-[4px]">
              향산화
            </div>
          </div>
          {/* 기능 리스트 */}
          <div className="flex flex-row-reverse text-coolgray4 text-end text-[12px] mt-[9.5px] font-medium">
            <div className="">
              <div>결합조직 형성과 기능 유지에 필요</div>
              <div className="mt-[4px]">철의 흡수에 필요</div>
              <div className="mt-[4px]">
                유해산소로부터 세포를 보호하는데 필요
              </div>
            </div>
          </div>
          {/* 약사 후기  더보기> */}
          <div className="flex justify-between items-center mt-[40px] text-[16px]">
            <div className="text-darkblue1 font-medium">
              이 약을 추천하는
              <span className="font-bold"> 약사 후기</span>
            </div>
            <div className="flex items-center">
              <div className="text-coolgray3 text-[10px] mr-[9px]">더보기</div>
              <div className="rotate-180 opacity-50">
                <Image src={pathGray} alt="heart" />
              </div>
            </div>
          </div>
          {/* 가로 스크롤 후기? */}
          <div className="overflow-x-scroll flex w-[370px] mt-[19px] mb-[25px]">
            {Array.from({ length: 5 })?.map((v, i) => {
              return (
                <div
                  className="borderBox min-w-[122px] max-w-[122px] max-h-[151px] rounded-[13px] border-solid border-2 border-blue3 mr-[16px] px-[16px]"
                  key={i}
                >
                  <div className="text-darkblue1 font-extrabold text-[13px] mt-[19px]">
                    한성준 약사
                  </div>
                  <div className="mt-[13px] text-[12px] text-coolgray4 font-normal leading-[14px]">
                    착한 가격에 넉넉한 용량의 비타민C. 하루 1정씩, 240일치
                    (6개월 이상)
                  </div>
                  <div className="flex mt-[7px] gap-2 mb-[11px]">
                    <Image alt="" src={star_fill} />
                    <Image alt="" src={star_fill} />
                    <Image alt="" src={star_fill} />
                    <Image alt="" src={star_fill} />
                    <Image alt="" src={star_empty} />
                  </div>
                </div>
              );
            })}
          </div>
          {/* 추천 태그 */}
        </div>

        {/* 좋아요 + 예약버튼 */}
        <div className="bg-coolgray1 flex justify-between py-[10px] px-[30px]">
          <div className="w-[40px] h-[40px] flex justify-center mr-[20px] bg-coolgray1 rounded-full shadow-home-p-category-btn">
            <Image src={heart_line} alt="heart" />
          </div>
          <button className="w-[256px] h-[40px] bg-coolgray3 rounded-[22px] text-center text-[14px] text-white shadow-button_shadow font-extrabold ">
            약국에 영양제 픽업 예약하기
          </button>
        </div>
        <style jsx>{`
          .borderBox {
          }
        `}</style>
      </div>
    </>
  );
};

export default MedicineDetail;
