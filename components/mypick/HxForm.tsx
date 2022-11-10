import HxBtn from "./HxBtn";
import CheckBox from "./CheckBox";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import EditInput from "./EditInput";
import { SetState } from "immer/dist/internal";

interface IProps {
  onClick: (dx: string) => void;
  userDx: string[];
  handleActivity: (activity: string) => void;
  userActivity: string;
  setUserMemo: Dispatch<SetStateAction<string>>;
  setUserActivity: Dispatch<SetStateAction<string>>;
}
const HxForm: FC<IProps> = ({
  onClick,
  userDx,
  handleActivity,
  userActivity,
  setUserMemo,
  setUserActivity,
}) => {
  const data = ["뇌졸증", "심장병", "고혈압", "당뇨병", "기타(암포함)"];
  const activity = ["안함", "주1회", "주2-3회", "주4-5회", "매일운동"];

  const [actList, setActList] = useState<string[]>([]);
  useEffect(() => {
    if (userActivity) {
      const list = [] as string[];
      const activityList = list.concat(userActivity);
      setActList(activityList);
    }
    return;
  }, [userActivity]);

  return (
    <div className="px-[5%] bg-blue4 mt-4 flex flex-col items-center justify-center w-[90%] h-fit  shadow-md rounded-lg">
      <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
        <HxBtn contents="진단여부(선택)" />
        <div className="mt-4 w-[100%] flex justify-between items-center">
          {data?.map((value, index) => {
            return (
              <CheckBox
                key={`DxCheck-${index}`}
                title={value}
                userDx={userDx}
                active={userDx.includes(value)}
                onClick={onClick}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4 w-[100%] h-[1px] bg-blue2 rounded"></div>
      <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
        <HxBtn contents="신체활동(필수)" />
        <span className="text-xs mt-2 mb-4">
          (숨이 차는 평소보다 적절한 활동, 하루 20분 이상 시행한 날)
        </span>
        <div className="w-[100%] flex justify-between items-center mb-4">
          {activity?.map((value, index) => {
            return (
              <CheckBox
                key={`Activity-${index}`}
                title={value}
                userDx={actList}
                active={userActivity === value}
                onClick={() => setUserActivity(value)}
              />
            );
          })}
        </div>
        <div className="mb-4 w-[100%] h-[1px] bg-blue2 rounded"></div>
        <HxBtn contents="특이사항(선택)" />
        <div className="py-1"></div>
        <EditInput
          setState={setUserMemo}
          placeholder="특이사항을 입력해주세요"
        />
      </div>
    </div>
  );
};

export default HxForm;
