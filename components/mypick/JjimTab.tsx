import useClickRoute from "hooks/useClickRoute";

interface TabProps {
  title: string;
  link: string;
  active: boolean;
}

const JjimTab = ({ title, link, active }: TabProps) => {
  const onLink = useClickRoute({ link });
  return (
    <>
      {active ? (
        <div className="flex flex-col cursor-pointer justify-end text-md text-blue2">
          <span>{title}</span>
          <div className="bg-blue2 cursor-pointer rounded-full w-full h-[4px] mt-1"></div>
        </div>
      ) : (
        <div
          onClick={onLink}
          className="flex flex-col cursor-pointer justify-end text-md text-coolgray3"
        >
          <span>{title}</span>
          <div className="bg-white rounded-full w-full h-[4px] mt-1"></div>
        </div>
      )}
    </>
  );
};

export default JjimTab;
