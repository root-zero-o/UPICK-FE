import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getKakao } from "store/modules/userSlice";
import { AppDispatch } from "store/configStore";
import { RootState } from "store/modules";
import useClickRoute from "hooks/useClickRoute";

const Callback = () => {
  const dispatch: AppDispatch = useDispatch();
  const onLoginLink = useClickRoute({ link: "/home" });
  const { isLogin } = useSelector((state: RootState) => state.user.userInfo);
  useEffect(() => {
    console.log("카카오 로그인 시도중");
    const code = new URL(window.location.href).searchParams.get("code");
    const redirectUri = "http:/localhost:3000/home";
    console.log(code, redirectUri);
    const payload = {
      code: code,
      redirectUri: redirectUri,
    };
    console.log(payload);
    dispatch(__getKakao(payload));
    if (isLogin) {
      onLoginLink();
    }
  }, [dispatch, isLogin, onLoginLink]);
  return (
    <>
      <span>카카오 로그인중.... 로딩화면 제작이 필요하다..</span>
    </>
  );
};

export default Callback;
