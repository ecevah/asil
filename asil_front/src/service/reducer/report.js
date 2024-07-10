// features/reports/reportSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getReports,
  getReport,
  addReport,
  updateReport,
  removeReport,
} from "../thunk/report";

const reportSlice = createSlice({
  name: "reports",
  initialState: {
    reports: [],
    currentReport: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(getReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Diğer thunk'lar için benzer şekilde case'ler eklenebilir
  },
});

export default reportSlice.reducer;
