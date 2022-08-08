import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "shared/Types";
import apis from "shared/api";

const LOGIN = "user/LOGIN";

export const getKakao = createAsyncThunk(LOGIN, async (code: string) => {
  const response = await apis.getKakao(code);
  return response.data;
});
export const getGoogle = createAsyncThunk(LOGIN, async (code: string) => {
  const response = await apis.getGoogle(code);
  return response.data;
});

const initialState: userType = {
  userInfo: {
    isLogin: false,
    nickname: "",
    email: "",
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;