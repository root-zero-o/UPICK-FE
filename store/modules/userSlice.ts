import { UserRegistrationModel } from "./../../shared/Types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "shared/Types";
import apis from "shared/api";

const LOGIN = "user/LOGIN";
const DUPLICATE = "user/DUPLICATE";
const SIGNUP = "user/SIGNUP";

export const __getKakao = createAsyncThunk(
  LOGIN,
  async (payload: UserRegistrationModel) => {
    const response = await apis.getKakao(payload);
    return response.data;
  }
);
export const __getGoogle = createAsyncThunk(
  LOGIN,
  async (payload: UserRegistrationModel) => {
    const response = await apis.getGoogle(payload);
    return response.data;
  }
);

export const __DupCheck = createAsyncThunk(
  DUPLICATE,
  async (payload: UserRegistrationModel) => {
    const response = await apis.dupCheck(payload);
    return response.data;
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
    const response = await apis.signIn(payload);
    return response.data;
  }
);

const initialState: userType = {
  userInfo: {
    dupCheck: true,
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
  },
  extraReducers: (builder) => {
    // 회원가입
    builder.addCase(__signUp.fulfilled, (state, payload) => {
      console.log("회원가입 성공");
    });
    // 중복체크
    builder.addCase(__DupCheck.fulfilled, (state, payload) => {
      console.log("중복체크 성공");
    });
    // 로그인
    builder.addCase(__signIn.fulfilled, (state, payload) => {
      console.log("로그인 성공");
    });
  },
});

export const { saveUserInfo } = userSlice.actions;

export default userSlice.reducer;
