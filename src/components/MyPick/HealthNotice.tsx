const HealthNotice = () => {
  return (
    <>
      <div className="mt-2 mb-8 shadow-lg  w-[90%] flex flex-col items-center justify-center bg-white rounded-xl">
        <span className="text-[20px] text-darkblue1 mt-[16px] mb-2">
          <b>나의 건강 상태</b>를 등록해보세요!
        </span>
        <div className="mb-2 w-[80%] h-[2px] bg-coolgray2 rounded" />
        <span className="text-[12px] mb-2 text-blue2">
          <b>내 건강상태를 등록하면 어떤 점이 좋나요?</b>
        </span>
        <span className="text-[10px] text-coolgray2 text-center w-[80%]">{`약사분들께 내가 지금 섭취하고 있는 약과 건강 정보를 제공함으로써 보다 정확하게 약을 추천받을 수 있어요!`}</span>
        <div className="mt-2 mb-4 w-[80%] bg-blue2 h-[40px] rounded-full flex justify-center items-center shadow-m hover:cursor-pointer hover:shadow-md transition-all">
          <span className="text-white text-[14px]">
            지금 바로 등록하러 가기
          </span>
        </div>
      </div>
    </>
  );
};

export default HealthNotice;
