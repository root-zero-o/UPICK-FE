import Image from "next/image";
import Arrow from "assets/images/icons/Arrow.svg";
import { MouseEventHandler } from "react";

const SignArrow = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <div className="absolute w-[80px] h-[80px] rounded-full bg-arrow-bg-gradient z-1 right-1/2 bottom-[-10%] translate-x-1/2 shadow-arrow_bg_shadow">
        <button
          className="flex items-center justify-center absolute w-[55px] h-[55px] rounded-full bg-arrow-gradient z-1 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 shadow-arrow_shadow"
          onClick={onClick}
          disabled={disabled}
        >
          <Image src={Arrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default SignArrow;
