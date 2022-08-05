import useClickRoute from "hooks/useClickRoute";
import React from "react";

const SignInputBottom = ({
  textOne,
  textTwo,
  link,
}: {
  textOne: string;
  textTwo: string;
  link: string;
}) => {
  const onLink = useClickRoute({ link });
  return (
    <>
      <div className="find mt-[28px]">
        <span>
          <strong onClick={onLink}>{textOne}</strong>
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
