import { useState } from "react";
import Image from "next/image";

const SignInput = ({
  type,
  placeholder,
  showButton,
  src,
}: {
  type: string;
  placeholder: string;
  showButton: boolean;
  src: string;
}) => {
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });
  // 비밀번호 토글 func
  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };
  return (
    <>
      <div className="inputDiv">
        {type !== "password" ? (
          // 일반 input들
          <input type={type} placeholder={placeholder} />
        ) : (
          // 비밀번호 전용 input
          <input type={passwordType.type} placeholder={placeholder} />
        )}
        {/* visible 해주는 toggle flag */}
        {showButton && (
          <button
            className="flex items-center justify-center ml-2"
            onClick={handlePasswordType}
          >
            <Image src={src} width="18px" height="17px" alt="" />
          </button>
        )}
      </div>
      <style jsx>
        {`
          input {
            background-color: transparent;
            margin-left: 20px;
            width: 227.34px;
            line-height: 23px;
          }
          input::placeholder {
            color: #cacaca;
          }
          .inputDiv {
            display: flex;
            align-items: center;
            width: calc(100% - 22px);
            height: 44px;
            background-color: #f7faff;
            border: 1px solid #b1c2d0;
            border-radius: 22px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
};

export default SignInput;
