import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: {
    author: "",
    role: "",
    phoneNumber: "",
  },
  status: "idle",
  error: null,
};

export const fetchAuthor = createAsyncThunk("author/fetchAuthor", async () => {
  const response = await fetch("http://localhost:8000/author");
  const { data } = await response.json();
  return data;
});

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAuthor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authorSlice.reducer;
