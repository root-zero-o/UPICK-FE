import useGetLocation from "hooks/useGetLocation";
import Script from "next/script";
import React, { ReactElement, useCallback, useEffect, useRef } from "react";

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

  useEffect(() => {
    window.kakao?.maps.load(initMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`}
      />
      <div
        ref={containerRef}
        className="w-full h-[300px] desktop:h-[400px] absolute top-20"
      ></div>
    </>
  );
};

export default KakaoMap;
