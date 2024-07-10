// features/formRules/formRuleSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getFormRules,
  getFormRule,
  addFormRule,
  modifyFormRule,
  removeFormRule,
} from "../thunk/formRules";

const formRuleSlice = createSlice({
  name: "formRules",
  initialState: {
    rules: [],
    currentRule: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFormRules.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFormRules.fulfilled, (state, action) => {
        state.loading = false;
        state.rules = action.payload;
      })
      .addCase(getFormRules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Repeat for other cases
  },
});

export default formRuleSlice.reducer;
