import React from "react";

const SignInputBottom = ({
  textOne,
  textTwo,
}: {
  textOne: string;
  textTwo: string;
}) => {
  return (
    <>
      <div className="find mt-[28px]">
        <span>
          <strong>{textOne}</strong>
          {textTwo}
        </span>
      </div>
      <style jsx>
        {`
          .find {
            font-size: 14px;
            line-height: 21px;
            color: #808e99;
          }
        `}
      </style>
    </>
  );
};

export default SignInputBottom;
