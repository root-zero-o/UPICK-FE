interface HealthMarkerProps {
  contents: string;
}

const HealthMarker = ({ contents }: HealthMarkerProps) => {
  return (
    <div className="mt-6 w-fit h-fit flex justify-center items-center rounded-md backdrop-blur bg-coolgray1/30 p-1 mx-1">
      <span className="">{contents}</span>
    </div>
  );
};

export default HealthMarker;
