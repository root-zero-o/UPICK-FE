import { useRouter } from "next/router";
import { useCallback } from "react";

const useClickRoute = ({ link }: { link: string }) => {
  const router = useRouter();
  const onLink = useCallback(() => {
    router.push(`${link}`);
  }, [router, link]);
  return onLink;
};

export default useClickRoute;

/*
사용법

1. import useClickRoute from "hooks/useClickRoute";
2. const onLink = useClickRoute({ link });
위의 link에 string으로 url주면 됩니다 
ex) props일경우: link='/home'
ex) 바로 적용: const onLink = useClickRoute({ link: "/home" });

*/
