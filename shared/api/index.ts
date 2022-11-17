import { UserRegistrationModel } from "./../Types";
import api from "./core";

export const apis = {
  // user auth
  getKakao: (payload: string | null) =>
    // api.post(`/oauth/kakao/callback?code=${payload}&state=”kakao`),
    api.post(`/customers/sign-in/kakao`, payload),
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
    api.get(
      `/goods/merchandises/filtering-by-gender/${payload.gender}?keyword=${payload.keyword}`
    ),
  getPeopleAge: (payload: any) =>
    api.get(
      `/goods/merchandises/filtering-by-Age/?minAge=${payload.minAge}&maxAge=${payload.maxAge}&keyword=${payload.keyword}`
    ),
  getPeopleHealth: (payload: any) =>
    api.get(`/goods/merchandises/filtering-by-consider?keyword=${payload} `),

  // medicine
  getMedicineById: (payload: any) => api.get(`/goods/merchandises/${payload}`),

  // get postings
  getPostings: () => api.get("/postings"),
};

export default apis;
