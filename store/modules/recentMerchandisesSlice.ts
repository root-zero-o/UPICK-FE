import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RecentMerchandisesInitialStateType } from "shared/Types";
import { RootState } from ".";

const GET_RECENT_MERCHANDISES = "merchandises/recently-read-merchandise";

export const __getRecentMerchandises = createAsyncThunk(
  GET_RECENT_MERCHANDISES,
  async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/goods/merchandises/recently-read-merchandise`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      return result.data.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState: RecentMerchandisesInitialStateType = {
  recentMerchandises: [],
  loading: false,
  error: false,
};

const recentMerchandisesSlice = createSlice({
  name: "merchandises/recently-read-merchandise",
  initialState,
  reducers: {
    getRecentMerchandises: (state, action) => {
      state.recentMerchandises = action.payload;
    },
  },
  extraReducers: {
    [__getRecentMerchandises.pending.type]: (state, action) => {
      state.loading = true;
    },
    [__getRecentMerchandises.fulfilled.type]: (state, action) => {
      state.loading = true;
      state.recentMerchandises = action.payload;
    },
    [__getRecentMerchandises.rejected.type]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
  },
});

export const selectRecentMerchandises = (state: RootState) =>
  state.recentMerchandises;

export default recentMerchandisesSlice.reducer;
