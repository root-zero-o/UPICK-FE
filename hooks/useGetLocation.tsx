// 현재 위치 좌표 구하는 custom hook
import React, { useEffect, useState } from "react";

const useGetLocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    const handleGeoSuccess = (position: any) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };
    const handleGeoError = () => {
      alert("위치정보를 가져올 수 없습니다.");
    };
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);

  return { latitude, longitude };
};
export default useGetLocation;
