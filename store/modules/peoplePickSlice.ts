import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "shared/api";

const GENDER = "user/GENDER";

export const EffectPick = createAsyncThunk(GENDER, async (payload: any) => {
  const response = await apis.getPeopleEffect(payload);
  return response.data.data;
});

const initialState: any = {
  loading: false,
  error: null,
  data: [],
};

const peoplePickSlice = createSlice({
  name: "peoplePick",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(EffectPick.fulfilled, (state, { type, payload }) => {
      state.data = payload;
    });
  },
});

export default peoplePickSlice.reducer;
