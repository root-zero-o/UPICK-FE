import HxBtn from "components/mypick/HxBtn";
import CategoryTitle from "components/ui/CategoryTitle";
import Checkbox from "components/mypick/CheckBox";
import { FC } from "react";
import { TypeMyPickData } from "src/types/MyPickData";
import { EnumActivityDuration } from "src/types/EnumActivityDuration";

interface IProps {
  myPickData: TypeMyPickData;
}

const MyHx: FC<IProps> = ({ myPickData }) => {
  const data = ["뇌졸증", "심장병", "고혈압", "당뇨병", "기타(암포함)"];

  console.log(myPickData?.CustomerDetails?.[0]?.heartDisease);
  return (
    <>
      <CategoryTitle
        title="나의 건강 이력"
        subtitle=""
        link="/mypick/edit"
        hideIcon
        hideSub
      />
      <div className="bg-blue4 mt-4 mb-8 flex flex-col items-center justify-center w-[90%] h-[300px]  shadow-md rounded-lg">
        <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
          <HxBtn contents="진단여부" />
          <div className="mt-4 w-[80%] flex justify-between items-center">
            <Checkbox
              userDx={data}
              onData
              title="뇌졸증"
              active={myPickData?.CustomerDetails?.[0]?.stroke}
            />
            <Checkbox
              userDx={data}
              onData
              title="심장병"
              active={myPickData?.CustomerDetails?.[0]?.heartDisease}
            />
            <Checkbox
              userDx={data}
              onData
              title="고혈압"
              active={myPickData?.CustomerDetails?.[0]?.highBloodPressure}
            />
            <Checkbox
              userDx={data}
              onData
              title="당뇨병"
              active={myPickData?.CustomerDetails?.[0]?.diabetes}
            />
            <Checkbox
              userDx={data}
              onData
              title="기타(암포함)"
              active={myPickData?.CustomerDetails?.[0]?.etc}
            />
          </div>
        </div>
        <div className="mb-4 w-[80%] h-[2px] bg-coolgray2 rounded"></div>
        <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
          <HxBtn contents="신체활동" />
          <span className="text-[10px] mt-2 mb-4 text-coolgray2">
            (숨이 차는 평소보다 적절한 활동, 하루 20분 이상 시행한 날)
          </span>
          <div className="w-[80%] flex justify-between items-center">
            <Checkbox
              userDx={data}
              onData
              title="안함"
              active={
                myPickData?.CustomerDetails?.[0]
                  ?.takingExcerciseTimePerAWeek === EnumActivityDuration.None
              }
            />
            <Checkbox
              userDx={data}
              onData
              title="주1회"
              active={
                myPickData?.CustomerDetails?.[0]
                  ?.takingExcerciseTimePerAWeek === EnumActivityDuration.One
              }
            />
            <Checkbox
              userDx={data}
              onData
              title="주2-3회"
              active={
                myPickData?.CustomerDetails?.[0]
                  ?.takingExcerciseTimePerAWeek ===
                EnumActivityDuration.TwoOrThree
              }
            />
            <Checkbox
              userDx={data}
              onData
              title="주4-5회"
              active={
                myPickData?.CustomerDetails?.[0]
                  ?.takingExcerciseTimePerAWeek ===
                EnumActivityDuration.FourOrFive
              }
            />
            <Checkbox
              userDx={data}
              onData
              title="매일운동"
              active={
                myPickData?.CustomerDetails?.[0]
                  ?.takingExcerciseTimePerAWeek === EnumActivityDuration.Every
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHx;
