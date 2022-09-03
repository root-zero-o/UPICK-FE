interface PickedMedProps {
  med: string;
  time: string;
}

const PickedMed = ({ med, time }: PickedMedProps) => {
  return (
    <div className="flex w-[85%] h-fit mt-6">
      <div className="w-[80px] h-[80px] rounded-[13px] bg-blue1 flex justify-center items-center mr-4">
        d
      </div>
      <div className="flex flex-col w-[65%] ml-2 items-start">
        <span className="text-[12px] font-bold ">{med}</span>
        <span className="text-xs mt-1">{time}</span>
      </div>
    </div>
  );
};

export default PickedMed;
