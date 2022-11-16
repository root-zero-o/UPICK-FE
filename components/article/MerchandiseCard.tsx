import StarFillIcon from "assets/images/icons/star-fill.svg";
import StarEmpIcon from "assets/images/icons/star-emp.svg";

import Image from "next/image";
import { useRouter } from "next/router";

const MerchandiseCard = ({
  image,
  name,
  rating,
  description,
  id,
  index,
}: {
  image?: string;
  name: string;
  rating?: string;
  description: string;
  id: number;
  index: number;
}) => {
  const ratingNum = Number(rating);
  const router = useRouter();
  return (
    <div
      className="w-[335px] rounded-[13px] border-[2px] border-coolgray2 backdrop-blur bg-searchInput shadow-md p-6"
      onClick={() => {
        router.push(`/medicineDetail/${id}`);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-[64px] h-[72px] bg-white rounded-md mb-4 bg-cover"
      />
      <span className="font-bold text-lg text-darkblue2">{name}</span>
      <div className="py-2">
        <span className="px-2 bg-coolgray4 text-white rounded-lg text-sm">
          섭취용량
        </span>
        <span className="text-sm text-coolgray4 ml-2">1일 1정 1회</span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-sm text-blue2 font-bold">좋아요</span>
        <span className="text-sm text-coolgray4">{description}</span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-sm text-blue2 font-bold">주의하세요</span>
        <span className="text-sm text-coolgray4">
          임산부는 섭취에 주의를 요해요. 한꺼번에 많은 양을 복용하기보다는
          나눠서 섭취하는게 좋아요.
        </span>
      </div>
      <div className="flex gap-2 py-4">
        <Image src={ratingNum >= 1 ? StarFillIcon : StarEmpIcon} alt="" />
        <Image src={ratingNum >= 2 ? StarFillIcon : StarEmpIcon} alt="" />
        <Image src={ratingNum >= 3 ? StarFillIcon : StarEmpIcon} alt="" />
        <Image src={ratingNum >= 4 ? StarFillIcon : StarEmpIcon} alt="" />
        <Image src={ratingNum === 5 ? StarFillIcon : StarEmpIcon} alt="" />
      </div>
    </div>
  );
};

export default MerchandiseCard;
