interface KeyWordProps {
  tag: string;
}

const KeyWordTag = ({ tag }: KeyWordProps) => {
  return (
    <div className="inline-block mr-2 mb-2 w-fit p-1 text-[13px] text-coolgray3 border-[1px] border-coolgray3 rounded-md">
      <span>{tag}</span>
    </div>
  );
};

export default KeyWordTag;
