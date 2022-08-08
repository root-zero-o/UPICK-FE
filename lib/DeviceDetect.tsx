interface Children {
  children: React.ReactNode;
}

function DeviceDetect({ children }: Children) {
  return (
    <div className="w-screen h-screen">
      <div
        className="desktop:fixed desktop:w-[375px] desktop:h-[812px] desktop:right-1/2 desktop:top-1/2 desktop:translate-x-1/2 desktop:-translate-y-1/2 desktop:overflow-x-hidden
      mobile:w-screen mobile:h-screen mobile:overflow-x-hidden scrollbar-hide "
      >
        {children}
      </div>
    </div>
  );
}

export default DeviceDetect;
