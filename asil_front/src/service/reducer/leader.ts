import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLeaders,
  getLeader,
  addLeader,
  modifyLeader,
  removeLeader,
} from "../thunk/leader";
import { Leader, LeadersState } from "../models/leader";

const initialState: LeadersState = {
  leaders: [],
  loading: false,
  error: null,
};

const leaderSlice = createSlice({
  name: "leaders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeaders.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getLeaders.fulfilled,
        (state, action: PayloadAction<Leader[]>) => {
          state.loading = false;
          console.log(action);
          state.leaders = action.payload;
        }
      )
      .addCase(getLeaders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch leaders";
      });
  },
});

export default leaderSlice.reducer;
