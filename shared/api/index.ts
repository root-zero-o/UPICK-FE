import { UserRegistrationModel } from "./../Types";
import api from "./core";

export const apis = {
  // user auth
  getKakao: (payload: string | null) =>
    api.post(`/oauth/kakao/callback?code=${payload}&state=”kakao`),
  kakaoLogin: (payload: any) =>
    api.post(
      `${process.env.NEXT_PUBLIC_SERVER}/customers/sign-in/kakao`,
      payload
    ),
  dupCheck: (payload: UserRegistrationModel) =>
    api.post(`/user/signup/checkEmail?email=${payload.email}`),
  signUp: (payload: UserRegistrationModel) => api.post(`/user/signup`, payload),
  signIn: (payload: UserRegistrationModel) => api.post(`/user/login`, payload),

  // get postings
  getPostings: () => api.get("/postings"),
};

export default apis;
