const SignBG = () => {
  return (
    <>
      <div className="w-full h-[643px] bg-sign-p-one rounded-[101px] top-[-37.56%] overflow-hidden">
        <div className="w-[504px] h-[504px] bg-sign-p-three top-[75.78%] left-[-6.4%] rounded-full" />
      </div>
      <div className="w-[504px] h-[504px] bg-sign-p-two rounded-full top-[-28.57%] left-[-31.73%]" />
      <style jsx>
        {`
          div {
            position: absolute;
          }
        `}
      </style>
    </>
  );
};

export default SignBG;
