import { SetStateAction, useState } from "react";
import Image from "next/image";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const SignInput = ({
  type,
  placeholder,
  showButton,
  src,
  error,
  onchange,
}: {
  type: string;
  placeholder: string;
  showButton: boolean;
  src: string;
  error: boolean;
  onchange: any;
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
      <div className={cls("inputDiv", error ? "error" : "")}>
        {type !== "password" ? (
          // 일반 input들
          <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => onchange(e.target.value)}
          />
        ) : (
          // 비밀번호 전용 input
          <input
            type={passwordType.type}
            placeholder={placeholder}
            onChange={(e) => onchange(e.target.value)}
          />
        )}
        {/* visible 해주는 toggle flag */}
        {showButton && (
          <button
            className={cls(
              "flex items-center justify-center mr-[12px]",
              passwordType.visible ? "opacity-[0.3]" : ""
            )}
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
            width: calc(100% - 50px);
            line-height: 23px;
          }
          input::placeholder {
            color: #cacaca;
          }
          .inputDiv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 295px;
            height: 44px;
            background-color: #f7faff;
            border: 1px solid #b1c2d0;
            border-radius: 22px;
            margin-bottom: 20px;
          }
          .error {
            border: 1px solid #f94a23;
            color: #f94a23;
          }
        `}
      </style>
    </>
  );
};

export default SignInput;
