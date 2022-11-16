import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PharmacistInitialDataType } from "shared/Types";
import { RootState } from ".";

const GET_PHARMACISTS = "posting/getPharmacists";

export const __getPharmacists = createAsyncThunk(GET_PHARMACISTS, async () => {
  try {
    const result = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_SERVER}/pharmacists`,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
      },
    });
    return result.data.data;
  } catch (error) {
    return error;
  }
});

const initialState: PharmacistInitialDataType = {
  pharmacists: [],
  loading: false,
  error: false,
};

const pharmacistsSlice = createSlice({
  name: "posting/getPharmacists",
  initialState,
  reducers: {
    getPostings: (state, action) => {
      state.pharmacists = action.payload;
    },
  },
  extraReducers: {
    [__getPharmacists.pending.type]: (state, action) => {
      state.loading = true;
    },
    [__getPharmacists.fulfilled.type]: (state, action) => {
      state.loading = true;
      state.pharmacists = action.payload;
    },
    [__getPharmacists.rejected.type]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
  },
});

export const selectPharmacists = (state: RootState) => state.pharmacists;

export default pharmacistsSlice.reducer;
