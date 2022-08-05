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
}) => {
  return (
    <>
      <div className="wholeDiv bg-sign-p-one rounded-[101px] overflow-hidden">
        {showInnerDIv && (
          <div className="innerDiv bg-sign-p-three  rounded-full" />
        )}
      </div>
      {showOuterDiv && <div className="outerDiv bg-sign-p-two rounded-full " />}
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
