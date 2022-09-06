import React from "react";
import Word from "./Word";

const Checkbox = ({ name }: { name: string }) => {
  return (
    <div className=" p-4 flex flex-col items-center">
      <div className="text-darkblue1 flex items-center">
        <span className="font-extrabold">{name} 약사</span>
        <span>와의 상담은 어땠나요?</span>
      </div>
      <div className="flex flex-wrap pt-3 justify-center px-8">
        <Word text="꼼꼼하게 알려주세요" />
        <Word text="친절해요" />
        <Word text="재미있어요" />
        <Word text="다음에도 상담받을래요" />
        <Word text="답장이 빨라요" />
        <Word text="전문적인 지식이 많아요" />
        <Word text="꼼꼼해요" />
      </div>
    </div>
  );
};

export default Checkbox;
