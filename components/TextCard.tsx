import React from "react";
import useClickRoute from "hooks/useClickRoute";

const TextCard = ({
  title,
  text,
  link,
}: {
  title: string;
  text: string;
  link: string;
}) => {
  const onLink = useClickRoute({ link: link });

  return (
    <div className="w-full flex flex-col items-center relative py-4">
      <div
        onClick={onLink}
        className="w-full relative hover:cursor-pointer transition-all"
      >
        <div className="w-full flex justify-between">
          <h2 className="text-md text-darkblue2 font-bold">{title}</h2>
        </div>
        <div className="pt-1">
          <span className="text-sm text-coolgray4 leading-5 block font-light">
            {text} ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
