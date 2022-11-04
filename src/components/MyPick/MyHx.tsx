import HxBtn from "components/mypick/HxBtn";
import CategoryTitle from "components/ui/CategoryTitle";
import Checkbox from "components/mypick/CheckBox";

const MyHx = () => {
  return (
    <>
      <CategoryTitle
        title="나의 건강 이력"
        subtitle=""
        link="/mypick/edit"
        hideIcon
      />
      <div className="bg-blue4 mt-4 flex flex-col items-center justify-center w-[90%] h-[300px]  shadow-md rounded-lg">
        <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
          <HxBtn contents="진단여부" />
          <div className="mt-4 w-[80%] flex justify-between items-center">
            {/* <Checkbox title="뇌졸증" active={true} />
            <Checkbox title="심장병" active={false} />
            <Checkbox title="고혈압" active={true} />
            <Checkbox title="당뇨병" active={true} />
            <Checkbox title="기타(암포함)" active={false} /> */}
          </div>
        </div>
        <div className="mb-4 w-[80%] h-[4px] bg-blue2 rounded"></div>
        <div className="w-full h-fit mb-4  flex flex-col justify-center items-center">
          <HxBtn contents="신체활동" />
          <span className="text-xs mt-2 mb-4">
            (숨이 차는 평소보다 적절한 활동, 하루 20분 이상 시행한 날)
          </span>
          <div className="w-[80%] flex justify-between items-center">
            {/* <Checkbox title="뇌졸증" active={false} />
            <Checkbox title="심장병" active={false} />
            <Checkbox title="고혈압" active={false} />
            <Checkbox title="당뇨병" active={false} />
            <Checkbox title="기타(암포함)" active={false} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHx;
