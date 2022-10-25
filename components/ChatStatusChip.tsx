const ChatStatusChip = ({ available }: { available: boolean }) => {
  if (available) {
    return (
      <div className="w-[60px] h-[20px] rounded-full bg-blue2 flex justify-center items-center font-light">
        <span className="text-xs text-white">상담가능</span>
      </div>
    );
  }
  return (
    <div className="w-[60px] h-[20px] rounded-full bg-coolgray3 flex justify-center items-center font-light">
      <span className="text-xs text-white">상담불가</span>
    </div>
  );
};

export default ChatStatusChip;
