import useClickRoute from "hooks/useClickRoute";
import Image from "next/image";
import TalkCloud from "assets/images/talkCloud.svg";

const SignHeader = ({
  signInFlag,
  link,
  error,
}: {
  signInFlag: boolean;
  link: string;
  error: boolean;
}) => {
  const onLink = useClickRoute({ link: link });
  return (
    <>
      <div className="flex mt-[44px] font-[700]">
        {signInFlag ? (
          <>
            <div className="marDiv flex flex-col items-center justify-center cursor-pointer">
              <span className="text-white text-[20px]">로그인</span>
              <div className="marDiv w-[68px] border-[1px] border-lightGray" />
            </div>
            <div
              className="relative marDiv flex flex-col items-center justify-center"
              onClick={onLink}
            >
              <span className="text-darkGray text-[20px] opacity-[0.4] cursor-pointer">
                회원가입
              </span>
            </div>
          </>
        ) : (
          <>
            <div
              className="relative marDiv flex flex-col items-center justify-center"
              onClick={onLink}
            >
              {error && (
                <div className="errorImg">
                  <Image src={TalkCloud} alt="" />
                </div>
              )}
              <span className="text-darkGray text-[20px] opacity-[0.4] cursor-pointer">
                로그인
              </span>
            </div>
            <div className="marDiv flex flex-col items-center justify-center cursor-pointer">
              <span className="text-white text-[20px]">회원가입</span>
              <div className="w-[68px] border-[1px] border-lightGray" />
            </div>
          </>
        )}
        <style jsx>{`
          .marDiv {
            width: 100%;
            max-width: 119px;
            margin: auto;
          }
          .errorImg {
            position: absolute;
            top: -50px;
            width: 139px;
          }
        `}</style>
      </div>
    </>
  );
};

export default SignHeader;
