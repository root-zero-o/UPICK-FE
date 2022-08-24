import { UserRegistrationModel } from "./../Types";
import api from "./core";

export const apis = {
  // user auth
  getKakao: (payload: UserRegistrationModel) =>
    api.post(`/oauth/kakao/callback?code=${payload.code}`),
  getGoogle: (payload: UserRegistrationModel) =>
    api.post(
      `/oauth/google/callback?code=${payload.code}&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none`
    ),
  getNaver: ({ code, state }: { code: string; state: string }) =>
    api.post(`/oauth/naver/callback?code=${code}&state=${state}`),

  dupCheck: (payload: UserRegistrationModel) =>
    api.post(`/user/signup/checkEmail?email=${payload.email}`),
  signUp: (payload: UserRegistrationModel) => api.post(`/user/signup`, payload),
  signIn: (payload: UserRegistrationModel) => api.post(`/user/login`, payload),
};

export default apis;
