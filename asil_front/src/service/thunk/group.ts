import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/group";

export const getGroups = createAsyncThunk("groups/getGroups", async () => {
  const response = await api.fetchGroups();
  return response.data;
});

export const getGroup = createAsyncThunk(
  "groups/getGroup",
  async (id: string) => {
    const response = await api.fetchGroup(id);
    return response.data;
  }
);

export const addGroup = createAsyncThunk(
  "groups/addGroup",
  async (groupData: any) => {
    const response = await api.createGroup(groupData);
    return response.data;
  }
);

export const modifyGroup = createAsyncThunk(
  "groups/modifyGroup",
  async ({ id, groupData }: { id: string; groupData: any }) => {
    const response = await api.updateGroup(id, groupData);
    return response.data;
  }
);

export const removeGroup = createAsyncThunk(
  "groups/removeGroup",
  async (id: string) => {
    await api.deleteGroup(id);
    return id;
  }
);
