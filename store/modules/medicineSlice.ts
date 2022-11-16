import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "shared/api";

const GETMEDICINE = "MEDS/GETMEDICINE";

export const GetMerchandiseDetail = createAsyncThunk(
  GETMEDICINE,
  async (payload: any) => {
    const response = await apis.getMedicineById(payload);
    return response.data.data;
  }
);

const initialState: any = {
  loading: false,
  error: null,
  data: "",
};

const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      GetMerchandiseDetail.fulfilled,
      (state, { type, payload }) => {
        state.data = payload;
      }
    );
  },
});

export default medicineSlice.reducer;
