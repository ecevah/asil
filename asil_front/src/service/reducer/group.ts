import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getGroups,
  getGroup,
  addGroup,
  modifyGroup,
  removeGroup,
} from "@/service/thunk/group";
import { Group, GroupsState } from "../models/group";

const initialState: GroupsState = {
  groups: [],
  currentGroup: null,
  loading: false,
  error: null,
};

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroups.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGroups.fulfilled, (state, action: PayloadAction<Group[]>) => {
        state.loading = false;
        state.groups = action.payload;
      })
      .addCase(getGroups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch groups";
      })
      .addCase(getGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGroup.fulfilled, (state, action: PayloadAction<Group>) => {
        state.loading = false;
        state.currentGroup = action.payload;
      })
      .addCase(getGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch group";
      })
      .addCase(addGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(addGroup.fulfilled, (state, action: PayloadAction<Group>) => {
        state.loading = false;
        state.groups.push(action.payload);
      })
      .addCase(addGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add group";
      })
      .addCase(modifyGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(modifyGroup.fulfilled, (state, action: PayloadAction<Group>) => {
        state.loading = false;
        const index = state.groups.findIndex(
          (group) => group._id === action.payload._id
        );
        if (index !== -1) {
          state.groups[index] = action.payload;
        }
      })
      .addCase(modifyGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update group";
      })
      .addCase(removeGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        removeGroup.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.groups = state.groups.filter(
            (group) => group._id !== action.payload
          );
        }
      )
      .addCase(removeGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to remove group";
      });
  },
});

export default groupSlice.reducer;
