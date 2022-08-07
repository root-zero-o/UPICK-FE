import api from "./core";

export const apis = {
  // user auth
  getKakao: (code: string) => api.get(`/oauth/kakao/callback?code=${code}`),
  getGoogle: (code: string) =>
    api.get(
      `/oauth/google/callback?code=${code}&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none`
    ),
  getNaver: ({ code, state }: { code: string; state: string }) =>
    api.get(`/oauth/naver/callback?code=${code}&state=${state}`),
};

export default apis;
