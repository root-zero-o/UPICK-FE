interface RecentMedProps {
  pharmacy: string;
  med: string;
}

const RecentMed = ({ pharmacy, med }: RecentMedProps) => {
  return (
    <div className="mb-8 flex flex-col items-center py-1 hover:cursor-pointer hover:-translate-y-1 transition-all">
      <div className="w-[77px] h-[77px] rounded-full shadow-sm bg-coolgray2"></div>
      <span className="text-[12px] font-sdg-l text-coolgray3 mt-2 font-medium">
        {pharmacy}
      </span>
      <span className="text-[14px] font-sdg-b text-darkblue1 font-bold">
        {med}
      </span>
    </div>
  );
};

export default RecentMed;
