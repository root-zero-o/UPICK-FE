const MyPickHeader = () => {
  // bgFlag ? "bg-gradient-two" : "bg-gradient-four"
  return (
    <>
      <div className="wholeDiv rounded-[80px] overflow-hidden bg-gradient-two">
        <div className="innerDiv bg-gradient-three  rounded-full" />
        {/* <div className="outerDiv bg-gradient-three rounded-full " /> */}
      </div>

      <style jsx>
        {`
          div {
            position: absolute;
          }
          .wholeDiv {
            width: 100%;
            height: 570px;
            top: -200px;
          }
          .innerDiv {
            width: 554px;
            height: 554px;
            top: 12.21%;
            left: -24%;
            transform: rotate(70deg);
          }
          .outerDiv {
            width: 504px;
            height: 504px;
            top: -28.57%;
            left: -31.73%;
          }
        `}
      </style>
    </>
  );
};

export default MyPickHeader;
