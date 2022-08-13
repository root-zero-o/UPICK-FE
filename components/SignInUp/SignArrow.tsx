import Image from "next/image";
import Arrow from "assets/images/icons/Arrow.svg";

const SignArrow = () => {
  return (
    <>
      {/* Arrow 버튼  */}
      <div className="absolute w-[80px] h-[80px] rounded-full bg-white z-1 right-1/2 bottom-[-80px] translate-x-1/2 -translate-y-1/2">
        <button className="flex items-center justify-center absolute w-[55px] h-[55px] rounded-full bg-cyan z-1 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2">
          <Image src={Arrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default SignArrow;
