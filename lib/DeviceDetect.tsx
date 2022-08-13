interface Children {
  children: React.ReactNode;
}

function DeviceDetect({ children }: Children) {
  return (
    <div className="web">
      <div className="mobile">{children}</div>
      <style jsx>
        {`
          .web {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100vh;
            font-family: "Noto Sans KR", sans-serif;
          }
          .mobile {
            position: relative;
            width: 100%;

            max-width: 420px;
            margin: auto;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 24px;
            background-color: #f7faff;
          }
        `}
      </style>
    </div>
  );
}

export default DeviceDetect;
