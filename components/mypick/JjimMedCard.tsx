const JjimMedCard = () => {
  return (
    <div className="mb-4 relative w-full border-[2px] p-6 border-box border-coolgray2 rounded-2xl">
      <div className="absolute right-3 top-3 bg-blue2 rounded-lg w-[30px] h-[30px] flex justify-center items-center">
        V
      </div>
      <div className="flex">
        <div className="w-[84px] h-[84px] rounded-[13px] bg-blue1 flex justify-center items-center mr-4">
          d
        </div>
        <div className="flex flex-col justify-between w-[70%]">
          <div className="flex flex-col justify-between w-[85%] bg-white">
            <span className="mt-2 font-bold text-[15px]">
              고려은단 비타민 C 1000mg 240정
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="font-black text-[24px]">12,600</span>
              <span className="ml-1 font-medium text-[20px]">원</span>
            </div>
            <div className="ml-3 bg-coolgray2 rounded-full flex items-center py-[2px] px-[6px] text-xs">
              <div className="bg-yellow1 rounded-full mt-[1px] w-[13px] h-[13px] mr-1.5"></div>
              <span className="font-bold">1,200P 적립</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JjimMedCard;
