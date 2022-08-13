import useClickRoute from "hooks/useClickRoute";
import Image from "next/image";
import TalkCloud from "assets/images/talkCloud.svg";

const SignHeader = ({
  signInFlag,
  link,
  error,
  first,
}: {
  signInFlag: boolean;
  link: string;
  error: boolean;
  first: boolean;
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
              {first && (
                <div className="errorImg relative">
                  <span className="absolute top-[12%] left-[7%] font-[500] text-[12px] font-blue z-10">
                    혹시 <span className="font-[700]">유픽 첫방문</span>이라면?
                  </span>
                  <Image src={TalkCloud} alt="" />
                </div>
              )}
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
                <div className="errorImg relative">
                  <span className="absolute top-[12%] left-[3%] font-[500] text-[12px] font-blue z-10">
                    이전에 가입했다면 로그인
                  </span>
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
            top: -55px;
            width: 139px;
            color: #1576fb;
          }
        `}</style>
      </div>
    </>
  );
};

export default SignHeader;
