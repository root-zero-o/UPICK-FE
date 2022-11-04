import HxBtn from "./HxBtn";
import CheckBox from "./CheckBox";
import EditInput from "./EditInput";
import { FC } from "react";

interface IProps {
  onClick: (dx: string) => void;
  userDx: string[];
}
const HxForm: FC<IProps> = ({ onClick, userDx }) => {
  const data = ["뇌졸증", "심장병", "고혈압", "당뇨병", "기타(암포함)"];

  return (
    <div className="px-[5%] bg-blue4 mt-4 flex flex-col items-center justify-center w-[90%] h-fit  shadow-md rounded-lg">
      <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
        <HxBtn contents="진단여부" />
        <div className="mt-4 w-[100%] flex justify-between items-center">
          {data.map((value, index) => {
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
          {/* <CheckBox title="뇌졸증" active={true} />
          <CheckBox title="심장병" active={false} />
          <CheckBox title="고혈압" active={true} />
          <CheckBox title="당뇨병" active={true} />
          <CheckBox title="기타(암포함)" active={false} /> */}
        </div>
      </div>
      <div className="mb-4 w-[100%] h-[1px] bg-blue2 rounded"></div>
      <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
        <HxBtn contents="신체활동" />
        <span className="text-xs mt-2 mb-4">
          (숨이 차는 평소보다 적절한 활동, 하루 20분 이상 시행한 날)
        </span>
        <div className="w-[100%] flex justify-between items-center mb-4">
          <CheckBox title="뇌졸증" active={false} />
          <CheckBox title="심장병" active={false} />
          <CheckBox title="고혈압" active={false} />
          <CheckBox title="당뇨병" active={false} />
          <CheckBox title="기타(암포함)" active={false} />
        </div>
        <div className="mb-4 w-[100%] h-[1px] bg-blue2 rounded"></div>
        <EditInput placeholder="특이사항을 입력해주세요"></EditInput>
      </div>
    </div>
  );
};

export default HxForm;
