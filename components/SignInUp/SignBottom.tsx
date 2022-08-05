import useClickRoute from "hooks/useClickRoute";

const SignBottom = ({
  firstText,
  secondText,
  link,
}: {
  firstText: string;
  secondText: string;
  link: string;
}) => {
  const onLink = useClickRoute({ link });
  return (
    <>
      {/* 하단 텍스트 */}
      <div className="flex items-center justify-center w-[230px] h-[21px] text-[14px] leading-[21px] mb-[48px] m-auto">
        <span className="text-darkGray">{firstText}</span>
        <span className="text-cyan ml-[10px] cursor-pointer" onClick={onLink}>
          {secondText}
        </span>
      </div>
    </>
  );
};

export default SignBottom;
