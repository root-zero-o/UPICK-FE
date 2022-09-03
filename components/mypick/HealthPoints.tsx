interface HealthPointsProps {
  contents: string;
  color: string;
}

const HealthPoints = ({ contents }: HealthPointsProps) => {
  return (
    <div className="flex justify-end items-center">
      <span>{contents}</span>
      <div className="ml-[6px] w-[39px] h-[4px] bg-white rounded"></div>
    </div>
  );
};

export default HealthPoints;
