const PickUpNotice = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] mb-1">
        <span>아이콘</span>
        <span className="ml-2 text-md text-blue2">픽업 관련 안내</span>
      </div>
      <div className="px-[5%] bg-blue4 mt-4 flex flex-col items-start justify-center w-[90%] h-fit  shadow-lg rounded-lg">
        <div className="text-sm flex flex-col">
          <span className="mb-1">* 픽업 안내 이후 3일 이내 수령해주세요.</span>
          <span className="mb-1">* 픽업 가능 시간은 약국마다 상이합니다.</span>
          <span className="mb-1">
            * 상품 수령 시 찾아가시는 고객님의 정보가 다를 경우,
          </span>
          <span className="mb-1 ml-2">
            상품 인도에 제한이 있을 수 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PickUpNotice;
