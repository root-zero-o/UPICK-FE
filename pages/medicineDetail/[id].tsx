import Image from "next/image";
import notification from "assets/images/icons/ic_noti.svg";
import BackBtn from "components/BackBtn";
import useClickRoute from "hooks/useClickRoute";
import pathGray from "assets/images/icons/PathGray.svg";
import heart_line from "assets/images/icons/heart-line.svg";
import star_fill from "assets/images/icons/star-fill.svg";
import star_empty from "assets/images/icons/star-emp.svg";
import { useEffect } from "react";
import { GetMerchandiseDetail } from "store/modules/medicineSlice";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { RootState } from "store/modules";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const MedicineDetail = () => {
  const onLink = useClickRoute({ link: "/alert" });
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.medicine);
  console.log(data);

  useEffect(() => {
    if (id !== undefined) dispatch(GetMerchandiseDetail(`${id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
          <Image
            src={`${data?.Image.url}`}
            alt=""
            width={`319px`}
            height={`199px`}
            unoptimized={true}
          ></Image>
        </div>
        {/* 바디부분 */}
        <div className="bg-coolgray1 px-[21px] rounded-t-[36px] mt-[32px]">
          {/* 약 이름 */}
          <div className="text-[20px] font-extrabold mt-[44px]">
            {`${data?.name}`}
          </div>

          {/* 영양소 소개 */}
          <div className="text-[10px] text-coolgray4 mt-[19px]">
            {`${data?.description}`}
          </div>

          {/* 영양정보 + mg */}
          <div className="flex justify-between text-[16px] mt-[24px]">
            <div className="text-cyan font-bold">영양정보</div>
            <div className="text-[12px] text-coolgray4">섭취권장용량</div>
          </div>

          {/* 영양소 + mg */}
          <div className="flex justify-between text-[14px] mt-[16px]">
            <div className="flex items-center">
              <div className="font-extrabold">비타민 C</div>
              {/* <div className="bg-blue1 px-[4px] text-white text-[10px] ml-[12px] rounded-[33px]">
                필수영양소
              </div> */}
            </div>
            <div className="flex items-center">
              <div className="text-white ml-[4px] text-[12px] bgOne">적당</div>
            </div>
          </div>

          {/* 약 복용횟수 */}
          {/* <div className="flex justify-between mt-[8px]">
            <div className="flex items-center text-white text-[12px]">
              <div className="bg-coolgray3 px-[8px] py-[4px] rounded-[37px] mr-[8px]">
                섭취 용량
              </div>
              <div className="text-coolgray3">1일 1정 2회</div>
            </div>
          </div> */}

          {/* 기능 타이틀*/}
          <div className="flex justify-between items-center mt-[34.5px]">
            <div className="text-cyan font-bold">기능</div>
          </div>

          {/* 기능 리스트 */}
          <div className="flex text-coolgray4 text-end text-[12px] mt-[16px] font-medium">
            {data?.MerchandiseEffect.map((value: any, index: any) => {
              return (
                <div
                  className="text-[12px] text-coolgray1 px-[4px] bgTwo ml-[8px]"
                  key={index}
                >
                  {value.effect.name}
                </div>
              );
            })}
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
          .bgOne {
            min-width: 39px;
            height: 25px;
            background: #808e99;
            border-radius: 33px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .bgTwo {
            min-width: 50px;
            height: 25px;
            background: #1576fb;
            border-radius: 33px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    </>
  );
};

export default MedicineDetail;
