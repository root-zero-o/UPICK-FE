import useClickRoute from "hooks/useClickRoute";
import React from "react";
import Image from "next/image";

const ProductProfile = ({
  company,
  name,
  link,
  url,
}: {
  company: string;
  name: string;
  link: string;
  url: string;
}) => {
  const onLink = useClickRoute({ link });

  return (
    <div
      onClick={onLink}
      className="flex flex-col items-center text-center break-normal max-w-[100px] hover:cursor-pointer hover:-translate-y-1 transition-all"
    >
      <div className="w-[76px] h-[76px] rounded-full bg-coolgray2">
        <Image
          src={url}
          alt=""
          width={`77px`}
          height={`77px`}
          unoptimized={true}
          className="rounded-full"
        ></Image>
      </div>
      <span className="text-[8px] text-coolgray3 mt-2">{company}</span>
      <span className="text-[14px] text-darkblue1 mt-1 break-words font-bold">
        {name}
      </span>
    </div>
  );
};
export default ProductProfile;
