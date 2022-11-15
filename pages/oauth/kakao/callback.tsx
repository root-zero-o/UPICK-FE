import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getKakao } from "store/modules/userSlice";
import { AppDispatch } from "store/configStore";
import { RootState } from "store/modules";
import useClickRoute from "hooks/useClickRoute";
import KakaoImg from "assets/Kakao.jpg";
import Image from "next/image";

const Callback = () => {
  const dispatch: AppDispatch = useDispatch();
  const onLoginLink = useClickRoute({ link: "/home" });
  const { isLogin } = useSelector((state: RootState) => state.user.userInfo);
  useEffect(() => {
    console.log("카카오 로그인 시도중");
    const code = new URL(window.location.href).searchParams.get("code");
    dispatch(__getKakao(code));
    if (isLogin) {
      onLoginLink();
    }
  }, [dispatch, isLogin, onLoginLink]);
  return (
    <>
      <Image src={KakaoImg} alt=""></Image>
    </>
  );
};

export default Callback;
