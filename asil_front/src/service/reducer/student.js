import { createSlice } from "@reduxjs/toolkit";
import {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  removeStudent,
} from "../thunk/student";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    currentStudent: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;
