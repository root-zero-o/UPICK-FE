const SexBtn = () => {
  return (
    <>
      <div className="w-[90%] flex flex-col items-center">
        <h1 className="text-darkblue1 text-md font-black mb-4">성별</h1>
        <div className="w-full h-full flex justify-evenly">
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] rounded-[13px] backdrop-blur border-[1px] border-blue3 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all">
              d
            </div>
            <span className="text-darkblue1 text-[14px] font-bold mt-2">
              남성
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] rounded-[13px] backdrop-blur border-[1px] border-blue3 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md transition-all">
              d
            </div>
            <span className="text-darkblue1 text-[14px] font-bold mt-2">
              여성
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SexBtn;
