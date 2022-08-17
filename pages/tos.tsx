const tos = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="flex w-full h-[208px] bg-blue1 rounded-b-[101px]">
        <span className="text-white text-[26px] font-bold ml-[40px] mt-[50px]">
          이용약관
        </span>
      </div>
      <div>이용약관 텍스트 들어올곳</div>
      <button className="confirmBtn">모두 확인</button>
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
      `}</style>
    </div>
  );
};

export default tos;
