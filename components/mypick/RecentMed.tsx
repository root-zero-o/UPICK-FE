interface RecentMedProps {
  pharmacy: string;
  med: string;
}

const RecentMed = ({ pharmacy, med }: RecentMedProps) => {
  return (
    <div className="mb-8 flex flex-col hover:cursor-pointer hover:-translate-y-1 transition-all">
      <div className="w-[78px] h-[71px] rounded-lg shadow-sm bg-coolgray2"></div>
      <span className="text-[8px] font-sdg-l text-coolgray3 mt-1 font-medium">
        {pharmacy}
      </span>
      <span className="text-[8px] font-sdg-b text-darkblue1 font-bold">
        {med}
      </span>
    </div>
  );
};

export default RecentMed;
