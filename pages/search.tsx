import SearchIcon from "../assets/images/icons/SearchIcon.svg";
import Image from "next/image";

const search = () => {
  return (
    <div className="p-5">
      <div className="relative w-[335px] h-[48px]">
        <input
          type="text"
          placeholder="브랜드 및 제품명 검색"
          className="w-[335px] mx-[20px] bg-coolgray1 bg-opacity-0 z-40 border-[1px] border-[#E4E5E6] h-[48px] rounded-[24px] pl-12 focus:outline-none  text-sm font-sdg-m"
        />
        <div className="absolute top-4 left-10">
          <Image src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="pt-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-md font-bold text-darkblue1">
            어떤 특징의 영양제를 찾으시나요 ?
          </span>
          <span className="text-sm text-coolgray3">설정하기</span>
        </div>
        <span className="text-sm text-coolgray3">
          내가 선택한 특징 내에서 약사픽을 검색할 수 있어요.
        </span>
        <div className="flex gap-2 py-2">
          <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
            피로개선
          </span>
          <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
            비타민
          </span>
          <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
            항산화
          </span>
          <span className="text-sm text-white bg-coolgray4 px-2 rounded-md py-1">
            2030대 청년
          </span>
        </div>
      </div>
    </div>
  );
};

export default search;
