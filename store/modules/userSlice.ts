import { UserRegistrationModel } from "./../../shared/Types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "shared/Types";
import apis from "shared/api";

const LOGIN = "customers/LOGIN";
const DUPLICATE = "user/DUPLICATE";
const SIGNUP = "user/SIGNUP";

export const __getKakao = createAsyncThunk(LOGIN, async (payload: any) => {
  // const data = await apis.getKakao(payload);
  const data = await apis.kakaoLogin(payload);
  console.log("api에 payload를 담는중");
  console.log(payload);
  console.log("api에 payload를 담는중");
  console.log(data.data);
  if (data.headers.authorization !== undefined) {
    localStorage.setItem("authorization", data.data);
  }
  return data;
});

export const __dupCheck = createAsyncThunk(
  DUPLICATE,
  async (payload: UserRegistrationModel) => {
    const response = await apis.dupCheck(payload);
    return response;
  }
);

export const __signUp = createAsyncThunk(
  SIGNUP,
  async (payload: UserRegistrationModel) => {
    const response = await apis.signUp(payload);

    return response.data;
  }
);

export const __signIn = createAsyncThunk(
  LOGIN,
  async (payload: UserRegistrationModel) => {
    console.log("로그인 시작");
    const response = await apis.signIn(payload);
    const token: any = response.config.headers?.authorization;
    localStorage.setItem("authorization", token);
    if (token) return true;
    return false;
  }
);

const initialState: userType = {
  userInfo: {
    dupCheck: null,
    isLogin: false,
    nickname: "",
    email: "",
    savedName: "",
    savedEmail: "",
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 기본 유저 정보 저장 - 휘발성
    saveUserInfo: function (state, { type, payload }) {
      state.userInfo.savedName = payload.name;
      state.userInfo.savedEmail = payload.email;
    },
    // 중복확인 null로
    rollBackDup: function (state, { type, payload }) {
      state.userInfo.dupCheck = payload.data;
    },
  },
  extraReducers: (builder) => {
    // 회원가입
    builder.addCase(__signUp.fulfilled, (state, { type, payload }) => {
      console.log("회원가입 성공");
    });
    // 중복체크
    builder.addCase(__dupCheck.fulfilled, (state, { type, payload }) => {
      state.userInfo.dupCheck = payload.data;
    });
    // 로그인
    builder.addCase(__signIn.fulfilled, (state, { type, payload }) => {
      state.userInfo.isLogin = true;
      console.log("로그인 성공");
    });
  },
});

export const { saveUserInfo, rollBackDup } = userSlice.actions;

export default userSlice.reducer;
