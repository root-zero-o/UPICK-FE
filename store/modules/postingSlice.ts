import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "shared/api";
import { postingsType } from "shared/Types";
import { RootState } from ".";

const GET_POSTINGS = "posting/getPostings";

export const __getPostings = createAsyncThunk(GET_POSTINGS, async () => {
  const data = await apis.getPostings();
  return data;
});

const initialState: postingsType = {
  postings: [],
  loading: false,
  error: null,
};

const postingSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {
    getPostings: (state, { type, payload }) => {
      state.postings = payload;
    },
  },
});

export const { getPostings } = postingSlice.actions;

export const selectPostings = (state: RootState) => state.postings;

export default postingSlice.reducer;
