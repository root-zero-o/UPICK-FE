import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "shared/api";

const EFFECT = "PEOPLEPICK/EFFECT";
const GENDER = "PEOPLEPICK/GENDER";
const AGE = "PEOPLEPICK/AGE";
const HEALTH = "PEOPLEPICK/HEALTH";

export const EffectPick = createAsyncThunk(EFFECT, async (payload: any) => {
  const response = await apis.getPeopleEffect(payload);
  return response.data.data;
});

export const GenderPick = createAsyncThunk(GENDER, async (payload: any) => {
  const response = await apis.getPeopleEffect(payload);
  return response.data.data;
});

export const AgePick = createAsyncThunk(AGE, async (payload: any) => {
  const response = await apis.getPeopleAge(payload);
  return response.data.data;
});

export const HealthPick = createAsyncThunk(HEALTH, async (payload: any) => {
  const response = await apis.getPeopleHealth(payload);
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
    builder.addCase(GenderPick.fulfilled, (state, { type, payload }) => {
      state.data = payload;
    });
    builder.addCase(AgePick.fulfilled, (state, { type, payload }) => {
      state.data = payload;
    });
    builder.addCase(HealthPick.fulfilled, (state, { type, payload }) => {
      state.data = payload;
    });
  },
});

export default peoplePickSlice.reducer;
