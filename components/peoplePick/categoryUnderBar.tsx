import { useEffect } from "react";
import moduleStyle from "../../pages/peoplePick/peoplePick.module.css";

const CategoryUnderBar = ({ txt }: { txt: number }) => {
  return (
    <div className={moduleStyle.categoryBar}>
      <div className="categoryBar-selected" />
      <style jsx>{`
        .categoryBar-selected {
          width: 88px;
          border: 3px solid #1576fb;
          position: absolute;
          top: -3px;
          right: ${txt}%;
        }
      `}</style>
    </div>
  );
};

export default CategoryUnderBar;
