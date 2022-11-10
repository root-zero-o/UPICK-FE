import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postingsType } from "shared/Types";
import { initialStateType, PostingDataType } from "src/types/PostingData";
import { RootState } from ".";

const GET_POSTINGS = "posting/getPostings";

export const __getPostings = createAsyncThunk(GET_POSTINGS, async () => {
  try {
    const result = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_SERVER}/posting`,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
      },
    });
    return result.data.data;
  } catch (error) {
    return error;
  }
});

const initialState: initialStateType = {
  postings: [],
  loading: false,
  error: false,
};

const postingSlice = createSlice({
  name: "posting/getPostings",
  initialState,
  reducers: {
    getPostings: (state, action) => {
      state.postings = action.payload;
    },
  },
  extraReducers: {
    [__getPostings.pending.type]: (state, action) => {
      state.loading = true;
    },
    [__getPostings.fulfilled.type]: (state, action) => {
      state.loading = true;
      state.postings = action.payload;
    },
    [__getPostings.rejected.type]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
  },
});

export const selectPostings = (state: RootState) => state.postings;

export default postingSlice.reducer;
