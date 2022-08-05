import { isMobile } from "react-device-detect";

interface Children {
  children: React.ReactNode;
}

function DeviceDetect({ children }: Children) {
  return isMobile ? (
    <div className="relative w-full h-full infinityScroll">{children}</div>
  ) : (
    <>
      <div className="w-screen h-screen ">
        <div className="scrollbar-hide fixed border-2 w-[375px] h-[812px] right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 overflow-x-hidden">
          {children}
        </div>
      </div>
    </>
  );
}

export default DeviceDetect;
