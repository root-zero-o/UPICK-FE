const KeywordChip = ({
  keyword,
  style,
}: {
  keyword: string;
  style?: string;
}) => {
  const customizingStyle = (style?: string) => {
    const defaultStyle =
      "text-sm text-white font-light pt-[2px] pb-[3px]  bg-coolgray3 px-1 rounded-[5px] mt-2";

    if (!style) return;
    const customStyle = defaultStyle.concat(" ", style);
    return customStyle;
  };

  return <span className={customizingStyle(style)}>{keyword}</span>;
};

export default KeywordChip;
