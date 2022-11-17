import { FC, useState } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";
import Router from "next/router";
import axios from "axios";

interface IProps {
  name: string;
  at: string;
  contents: string;
  title: string;
  id: number;
  token: string;
}
const JjimPharCard: FC<IProps> = ({ name, at, contents, title, id, token }) => {
  const goItem = () => {
    Router.push(`/article/detail/${id}`);
  };

  const [isFollow, setIsFollow] = useState<boolean>(false);
  const toggleLikeHandler = async () => {
    console.log("hello");
    try {
      const toggleLike = await axios({
        method: "PUT",
        // data: { pharmacistId: 1 },
        url: `${process.env.NEXT_PUBLIC_SERVER}/posting/${id}/like`,
        headers: {
          Authorization: token,
        },
      });
      setIsFollow(!isFollow);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isFollow && (
        <div className="mb-[16px] flex flex-col relative w-full p-2 border-box border-[2px] rounded-xl border-coolgray2">
          <div className="mb-[7.5px] flex items-center justify-start">
            <div className="flex flex-col justify-start w-[30%]">
              <span className="font-bold text-[14px]">{name}</span>
            </div>
            <div className="flex  flex-col justify-between  w-[55%]">
              <span className="font-bold text-[10px]">{at}약국</span>
            </div>
          </div>
          <div className="flex item-center w-[100%] justify-between">
            <div className="flex flex-col justify-start ">
              <span className="font-bold text-[16px]">{title}</span>
            </div>
            <div onClick={toggleLikeHandler} className="flex item-center">
              <Image alt="" src={fullHeart} />
            </div>
          </div>
          <div onClick={goItem}>
            <span className="text-coolgray4 text-[12px] cursor-pointer">
              {contents}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default JjimPharCard;
