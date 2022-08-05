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
  return (
    <>
      <div className="inputDiv">
        <input type={type} placeholder={placeholder} />
        {showButton && (
          <button className="flex items-center justify-center ml-2">
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
