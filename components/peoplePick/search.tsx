import SearchIcon from "assets/images/icons/SearchIcon.svg";
import Image from "next/image";
import { ChangeEvent, useRef, Dispatch, SetStateAction } from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const Search = ({ setKeyword }: { setKeyword: Dispatcher<string> }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="relative w-[335px] h-[48px]">
      <input
        onChange={onChangeInput}
        ref={inputRef}
        type="text"
        placeholder="브랜드 및 제품명 검색"
        className="w-[335px] mx-[20px] bg-coolgray1 bg-opacity-0 z-40 border-[1px] border-[#E4E5E6] h-[48px] rounded-[24px] pl-12 focus:outline-none  text-sm font-sdg-m"
      />
      <div className="absolute top-4 left-10">
        <Image src={SearchIcon} alt="" />
      </div>
    </div>
  );
};

export default Search;
