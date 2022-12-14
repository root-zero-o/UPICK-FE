import { useRouter } from "next/router";
import { useEffect } from "react";

export const useGoHome = (skip?: boolean) => {
  const router = useRouter();
  useEffect(() => {
    if (skip) return;
    router.push("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);
};
