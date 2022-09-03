interface HxBtnProps {
  contents: string;
}

const HxBtn = ({ contents }: HxBtnProps) => {
  return (
    <div className="w-[70px] py-[4px] px-3 bg-blue2 text-white text-sm rounded-full mr-2">
      <span>{contents}</span>
    </div>
  );
};

export default HxBtn;
