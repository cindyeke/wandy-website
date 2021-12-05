import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let host = "";

export const getCategoryLinks = createAsyncThunk(
  "categoryLinks/getCategoryLinks",
  async () => {
    let path = `${host !== "" ? host : "http://localhost:5000"}/links`;
    try {
      const response = await fetch(path);
      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const categoryLinksSlice = createSlice({
  name: "categoryLinks",
  initialState: { links: [], status: null },
  reducers: {},
  extraReducers: {
    [getCategoryLinks.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCategoryLinks.fulfilled]: (state, action) => {
      state.status = "success";
      state.links = action.payload;
    },
    [getCategoryLinks.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default categoryLinksSlice.reducer;
