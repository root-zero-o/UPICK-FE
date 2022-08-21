import Image from "next/image";
import Arrow from "assets/images/icons/Arrow.svg";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "store/modules/userSlice";

const SignArrow = ({
  signup,
  input1,
  input2,
  disabled,
}: {
  signup: boolean;
  input1: string | undefined;
  input2: string | undefined;
  disabled: boolean;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onLink = () => {
    signup && dispatch(saveUserInfo({ name: input1, email: input2 }));
    router.push(`/tos`);
  };
  return (
    <>
      <div className="absolute w-[80px] h-[80px] rounded-full bg-white z-1 right-1/2 bottom-[-10%] translate-x-1/2">
        <button
          className="flex items-center justify-center absolute w-[55px] h-[55px] rounded-full bg-blue2 z-1 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
          onClick={onLink}
          disabled={disabled}
        >
          <Image src={Arrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default SignArrow;
