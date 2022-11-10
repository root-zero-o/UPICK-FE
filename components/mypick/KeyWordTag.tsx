import { memo, useCallback, useState } from "react";

interface KeyWordProps {
  tag: string;
  onClick: (keyword: string) => void;
  userKeywords: string[];
}

const KeyWordTag = ({ tag, userKeywords, onClick }: KeyWordProps) => {
  const renderKeywords = useCallback(() => {
    if (userKeywords.includes(tag)) {
      return (
        <div
          onClick={() => onClick(tag)}
          className="hover:cursor-pointer inline-block mr-2 mb-2 w-fit p-1 text-[13px] text-white border-[1px] bg-coolgray3 border-coolgray3  rounded-md"
        >
          <span>{tag}</span>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => onClick(tag)}
          className="hover:cursor-pointer inline-block mr-2 mb-2 w-fit p-1 text-[13px] text-coolgray3 border-[1px] border-coolgray3 rounded-md"
        >
          <span>{tag}</span>
        </div>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userKeywords]);

  return <>{renderKeywords()}</>;
};

export default memo(KeyWordTag);
