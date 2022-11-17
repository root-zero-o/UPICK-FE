import { FC, useState } from "react";
import fullHeart from "../../assets/images/icons/fullHeart.svg";
import Image from "next/image";
import Router from "next/router";
import axios from "axios";

interface IProps {
  id: number;
  src: string;
  name: string;
  token: string;
}

const JjimMedCard: FC<IProps> = ({ id, src, name, token }) => {
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const goItem = () => {
    Router.push(`/medicineDetail/${id}`);
  };
  const toggleLikeHandler = async () => {
    try {
      const toggleLike = await axios({
        method: "PUT",
        // data: { pharmacistId: 1 },
        url: `${process.env.NEXT_PUBLIC_SERVER}/goods/merchandises/${id}/like`,
        headers: {
          Authorization: token,
        },
      });
      setIsFollow(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isFollow && (
        <>
          <div className="mb-4 relative w-full border-[1px] p-3 border-box border-coolgray3 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="w-[48px] h-[60px] shadow-md rounded-[13px] flex justify-center items-center">
                <Image
                  src={`${src}`}
                  alt=""
                  width={`48px`}
                  height={`60px`}
                  unoptimized={true}
                  className="rounded-full"
                  onClick={goItem}
                ></Image>
              </div>
              <div className="flex flex-col justify-between w-[75%]">
                <div className="flex  h-[60px] flex-col justify-between w-[100%]">
                  <span className="mt-2 font-bold text-[12px]">{name}</span>
                </div>
              </div>
              <div
                onClick={toggleLikeHandler}
                className="h-[60px] flex item-center cursor-pointer z-10"
              >
                <Image alt="" src={fullHeart} />
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default JjimMedCard;
