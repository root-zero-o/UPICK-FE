import Image from "next/image";
import Arrow from "assets/images/icons/Arrow.svg";
import useClickRoute from "hooks/useClickRoute";

const SignArrow = () => {
  const onLink = useClickRoute({ link: "/tos" });
  return (
    <>
      {/* Arrow 버튼  */}
      <div className="absolute w-[80px] h-[80px] rounded-full bg-white z-1 right-1/2 bottom-[-10%] translate-x-1/2">
        <button
          className="flex items-center justify-center absolute w-[55px] h-[55px] rounded-full bg-blue2 z-1 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
          onClick={onLink}
        >
          <Image src={Arrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default SignArrow;
