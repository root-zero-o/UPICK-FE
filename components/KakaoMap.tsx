import Script from "next/script";
import React, {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const NEXT_PUBLIC_KAKAOMAP_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

const KakaoMap = (): ReactElement | null => {
  const containerRef = useRef<HTMLDivElement>(null);

  const initMap = useCallback(() => {
    if (containerRef.current) {
      const map = new window.kakao.maps.Map(containerRef.current, {
        center: new window.kakao.maps.LatLng(
          37.5173319258532,
          127.047377408384
        ),
        level: 3,
      });
    }
  }, []);
  return (
    <Fragment>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`}
        onLoad={() => window.kakao.maps.load(initMap)}
      />
      <div ref={containerRef} className="w-full h-[400px]"></div>
    </Fragment>
  );
};

export default KakaoMap;
