import { useEffect } from "react";
import Welcome from "./welcome";

const Index = () => {
  // 카카오 SDK
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://developers.kakao.com/sdk/js/kakao.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="h-full overflow-hidden">
      <Welcome />
    </div>
  );
};

export default Index;
