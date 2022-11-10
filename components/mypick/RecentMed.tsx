import Image from "next/image";
import Router from "next/router";

interface RecentMedProps {
  pharmacy: string;
  med: string;
  src: string;
  id: number;
}

const RecentMed = ({ pharmacy, med, src, id }: RecentMedProps) => {
  const goItem = () => {
    Router.push(`/article/detail/${id}`);
  };
  return (
    <div
      onClick={goItem}
      className="mx-1 mb-8 w-[78px] flex flex-col hover:cursor-pointer hover:-translate-y-1 transition-all"
    >
      <div className="w-[78px] h-[71px] rounded-lg shadow-sm bg-coolgray2">
        <Image
          width={`78px`}
          height={`78px`}
          unoptimized={true}
          src={src}
          alt=""
        />
      </div>
      <span className="text-[8px] font-sdg-l text-coolgray3 mt-1 font-medium">
        {pharmacy}
      </span>
      <span className="w-[78px] truncate text-[8px] font-sdg-b text-darkblue1 font-bold">
        {med}
      </span>
    </div>
  );
};

export default RecentMed;
