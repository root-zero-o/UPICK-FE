function cls(...classnames: string[]) {
  // class들을 string 배열에 넣어준다.
  return classnames.join(" "); // join으로 공백을 사이에 둔 문자열로 변환한다.
}

const HeaderBG = ({
  fullWidth,
  fullHeight,
  fullTop,
  innerWidth,
  innerHeight,
  innerTop,
  innerLeft,
  outerWidth,
  outerHeight,
  outerTop,
  outerLeft,
  showInnerDIv,
  showOuterDiv,
  rot,
  bgFlag,
}: {
  fullWidth: string;
  fullHeight: string;
  fullTop: string;
  innerWidth: string;
  innerHeight: string;
  innerTop: string;
  innerLeft: string;
  outerWidth: string;
  outerHeight: string;
  outerTop: string;
  outerLeft: string;
  showInnerDIv: boolean;
  showOuterDiv: boolean;
  rot: number;
  bgFlag: boolean;
}) => {
  return (
    <>
      <div
        className={cls(
          "wholeDiv rounded-[101px] overflow-hidden",
          bgFlag ? "bg-sign-p-one" : "bg-home-p-one"
        )}
      >
        {showInnerDIv && (
          <div className="innerDiv bg-sign-p-two  rounded-full" />
        )}
        {showOuterDiv && (
          <div className="outerDiv bg-sign-p-two rounded-full " />
        )}
      </div>

      <style jsx>
        {`
          div {
            position: absolute;
          }
          .wholeDiv {
            width: ${fullWidth};
            height: ${fullHeight};
            top: ${fullTop};
          }
          .innerDiv {
            width: ${innerWidth};
            height: ${innerHeight};
            top: ${innerTop};
            left: ${innerLeft};
            transform: rotate(${rot}deg);
          }
          .outerDiv {
            width: ${outerWidth};
            height: ${outerHeight};
            top: ${outerTop};
            left: ${outerLeft};
          }
        `}
      </style>
    </>
  );
};

export default HeaderBG;
