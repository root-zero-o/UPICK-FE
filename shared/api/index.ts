import { UserRegistrationModel } from "./../Types";
import api from "./core";

export const apis = {
  // user auth
  getKakao: (payload: string | null) =>
    api.post(`/oauth/kakao/callback?code=${payload}&state=”kakao`),
  kakaoLogin: (payload: any) =>
    api.post(`http://13.124.107.239/customers/sign-in/kakao`, payload),
  dupCheck: (payload: UserRegistrationModel) =>
    api.post(`/user/signup/checkEmail?email=${payload.email}`),
  signUp: (payload: UserRegistrationModel) =>
    api.post(`/customers/sign-up`, payload),
  signIn: (payload: UserRegistrationModel) =>
    api.post(`/customers/sign-in`, payload),

  // people Pick
  getPeopleEffect: (payload: any) =>
    api.get(`/goods/merchandises/filtering-by-effect/?keyword=피부`),
  getPeopleGender: (payload: any) =>
    api.get(`/goods/merchandises/filtering-by-gender/${payload}?keyword=건강`),
  getPeopleAge: (payload: any) =>
    api.get(
      `/goods/merchandises/filtering-by-Age/?minAge=${payload.minAge}&maxAge=${payload.maxAge}&keyword=비타민 `
    ),
  getPeopleHealth: (payload: any) =>
    api.get(`/goods/merchandises/filtering-by-consider?keyword=${payload} `),

  // get postings
  getPostings: () => api.get("/postings"),
};

export default apis;
