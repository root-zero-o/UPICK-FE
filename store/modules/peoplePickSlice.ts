import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "shared/api";

const GENDER = "user/GENDER";

export const genderPick = createAsyncThunk(GENDER, async (payload: any) => {
  console.log(payload);
  console.log("대중픽 api 시작");
  const response = await apis.getPeopleGender(payload);
  console.log(response);
  console.log("대중픽 api 종료");
  return true;
});

const initialState: any = {
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "peoplePick",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
