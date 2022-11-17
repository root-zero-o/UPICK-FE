import { FC, useState } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";
import badge from "../../assets/images/icons/badge.svg";
import Router from "next/router";
import axios from "axios";

interface IProps {
  name: string;
  at: string;
  src: string;
  id: number;
  token: string;
}
const JjimSubCard: FC<IProps> = ({ name, at, src, id, token }) => {
  const goItem = () => {
    Router.push(`/neighborhood/detail/${id}`);
  };

  const [isFollow, setIsFollow] = useState<boolean>(false);
  const toggleLikeHandler = async () => {
    console.log("hello");
    try {
      const toggleLike = await axios({
        method: "PUT",
        // data: { pharmacistId: 1 },
        url: `${process.env.NEXT_PUBLIC_SERVER}/pharmacists/${id}/like`,
        headers: {
          Authorization: token,
        },
      });
      console.log(toggleLike);
      setIsFollow(!isFollow);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {!isFollow && (
        <div className=" relative w-full p-2 border-box ">
          <div className="flex items-center justify-start">
            <div
              onClick={goItem}
              className=" relative w-[51px] m-4 h-[51px] shadow-md rounded-full bg-blue1 flex justify-center items-center"
            >
              <Image
                src={src}
                alt=""
                width={`51px`}
                height={`51px`}
                unoptimized={true}
                className="rounded-full"
              ></Image>
              <div className="absolute bottom-[-20px] right-[-5px]">
                <Image width={"25px"} src={badge} alt=""></Image>
              </div>
            </div>
            <div className="flex flex-col justify-start w-[25%]">
              <span className="font-bold text-[16px]">{name}</span>
            </div>
            <div className="flex  flex-col justify-between  w-[45%]">
              <span className="font-bold text-[12px]">{at}</span>
            </div>
            <div
              onClick={toggleLikeHandler}
              className="h-[60px] flex item-center"
            >
              <Image alt="" src={fullHeart} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JjimSubCard;
