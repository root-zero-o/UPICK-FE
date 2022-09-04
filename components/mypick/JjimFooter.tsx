const JjimFooter = () => {
  return (
    <div className="w-full h-[70px] fixed bottom-0 max-w-[420px] flex justify-evenly items-center z-40 pt-1 bg-coolgray1 ">
      <div className="w-[90%] flex justify-between">
        <div className="w-[40px] h-[40px] bg-blue2 rounded-full"></div>
        <div className="w-[85%] h-[40px] bg-blue2 rounded-full flex justify-center items-center font-bold text-lg text-white">
          <span>장바구니</span>
        </div>
      </div>
    </div>
  );
};
export default JjimFooter;
