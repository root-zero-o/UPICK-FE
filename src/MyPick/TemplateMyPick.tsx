import Layout from "components/Layout";
import Seo from "components/Seo";
import HeaderBG from "components/HeaderBG";
import BlurBtn from "components/ui/BlurBtn";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import chat from "../../assets/images/icons/chat.svg";
import CategoryTitle from "components/ui/CategoryTitle";
import { SearchInput } from "components/SearchInput";
const TemplateMyPick = () => {
  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <Seo title="mypick" />
      <div className=" w-full flex flex-col items-center">
        <HeaderBG
          fullWidth="100%"
          fullHeight="350px"
          fullTop="-200px"
          innerWidth="504px"
          innerHeight="504px"
          innerTop="20.21%"
          innerLeft="-30%"
          outerWidth="504px"
          outerHeight="504px"
          outerTop="-28.57%"
          outerLeft="-31.73%"
          showInnerDIv={true}
          showOuterDiv={false}
          rot={150}
          bgFlag={false}
        />
        {/* 회원 정보 */}
        <div className="flex justify-between w-[90%] py-6 z-40">
          <span className="text-lg text-white font-semibold mb-2">
            홍길동님 (남자/26세)
          </span>
          <span className="text-sm text-coolgray4 leading-5 block font-light">
            아이콘
          </span>
        </div>

        <div className="w-[90%] flex justify-between">
          <div className="w-[80px] h-[80px] rounded-full bg-yellow1 flex justify-center items-center">
            <span>64점</span>
          </div>
          <div className="w-[70%] h-[80px] flex flex-col bg-yellow1">
            <div className="text-sm flex justify-between">
              <span>필수영양소</span>
              <span>13개</span>
            </div>
            <div className="text-xs">
              <span>12개의 부족 섭취 영양소가 있습니다.</span>
            </div>
            <div className="text-xs">
              <div className="flex justify-end">
                <span>항산화</span>
                <div className="bg-blue1 w-2 h-1">dpgb</div>
              </div>
              <div className="flex justify-end">
                <span>면역력 증진</span>
                <div></div>
              </div>
              <div className="flex justify-end">
                <span>질건강</span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* 현재 상태 버튼 */}
        <div>
          <div>
            <span>스트레스 긴장</span>
          </div>
          <div>
            <span>혈행개선</span>
          </div>
          <div>
            <span>항산화</span>
          </div>
          <div>
            <span>수면</span>
          </div>
        </div>
        {/* 찜 - 픽업 - 상담내역 버튼 */}
        <div className="w-full flex flex-col space-y-4 pt-4 z-40 pb-4">
          <div className="flex w-full justify-evenly">
            <BlurBtn src={fullHeart} text="찜" />
            <BlurBtn src={chat} text="픽업" />
            <BlurBtn src={chat} text="상담내역" />
          </div>
        </div>
        <CategoryTitle title="섭취 중인 영양제" subtitle="" link="/" />
      </div>
    </Layout>
  );
};

export default TemplateMyPick;
