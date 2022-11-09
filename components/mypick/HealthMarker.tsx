interface HealthMarkerProps {
  contents: string;
}

const HealthMarker = ({ contents }: HealthMarkerProps) => {
  return (
    <div className="mt-6 mb-8 w-fit h-fit flex justify-center items-center rounded-md bg-coolgray4 p-1 mx-1">
      <span className="">{contents}</span>
    </div>
  );
};

export default HealthMarker;
