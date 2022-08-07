import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "shared/api";

const LOGIN = "user/LOGIN";

interface userType {}

const initialState: userType = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
