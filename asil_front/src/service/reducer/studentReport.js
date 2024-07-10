import { createSlice } from "@reduxjs/toolkit";
import {
  getStudentsReports,
  getStudentsReport,
  addStudentsReport,
  updateStudentsReport,
  removeStudentsReport,
} from "../thunk/studentReport";

const studentsReportSlice = createSlice({
  name: "studentsReports",
  initialState: {
    reports: [],
    currentReport: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudentsReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(getStudentsReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Benzer şekilde diğer thunks için de case'ler eklenebilir
  },
});

export default studentsReportSlice.reducer;
