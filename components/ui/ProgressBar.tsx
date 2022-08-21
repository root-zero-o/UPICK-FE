import Arrow from "assets/images/icons/Arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { passwordRegCheck } from "shared/LoginCheck";

enum ENUM {
  HALF = 50,
  THREE_QUARTERS = 75,
  FULL = 100,
}

const ProgressBar = ({
  initial,
  text1,
  text2,
}: {
  initial: number;
  text1: string | undefined;
  text2: string | undefined;
}) => {
  // Progress state - get initial % through props
  const [progress, setProgress] = useState<number>(initial);

  // button disable handler
  const onDisableHandler = () => {
    if (text1 && text2 && text1 === text2) return false;
    return true;
  };

  // progress bar gauge
  useEffect(() => {
    if (text1 && passwordRegCheck(text1)) setProgress(ENUM.THREE_QUARTERS);
    else if (!text1) setProgress(ENUM.HALF);
    if (text1 && text2 && text1 === text2) setProgress(ENUM.FULL);
    else if (!text1 && !text2 && text1 !== text2)
      setProgress(ENUM.THREE_QUARTERS);
  }, [text1, text2]);

  return (
    <div className="flex items-center justify-end w-[calc(100%-56px)] h-[110px] mb-[16px]">
      <div className="progressBarBlock">
        <div className="progressBar" />
      </div>
      <div className="relative w-[80px] h-[80px] rounded-full bg-white">
        <button
          disabled={onDisableHandler()}
          className="absolute flex items-center justify-center w-[55px] h-[55px] z-1 rounded-full bg-blue2 z-1 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
        >
          <Image src={Arrow} alt="" />
        </button>
      </div>
      <style jsx>{`
        .progressBarBlock {
          height: 3px;
          width: 70%;
          background-color: #e2f0fb;
        }
        .progressBar {
          // change progress width
          width: ${progress}%;
          height: 3px;
          background-color: #00b7f0;
          transition: width 1s;
        }
        button:disabled {
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
