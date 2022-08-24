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
    const response = await apis.getDupCheck(payload);
    return response.data;
  }
);

export const __signUp = createAsyncThunk(
  SIGNUP,
  async (payload: UserRegistrationModel) => {
    const response = await apis.addSignUp(payload);
    console.log(response);
    return response.data;
  }
);

const initialState: userType = {
  userInfo: {
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
    saveUserInfo: function (state, { type, payload }) {
      state.userInfo.savedName = payload.name;
      state.userInfo.savedEmail = payload.email;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__signUp.fulfilled, (state, payload) => {
      console.log("성공");
    });
  },
});

export const { saveUserInfo } = userSlice.actions;

export default userSlice.reducer;
