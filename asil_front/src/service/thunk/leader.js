import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/leader.js";

export const getLeaders = createAsyncThunk("/", async () => {
  const response = await api.fetchLeaders();
  console.log(response.data);
  return response.data;
});

export const getLeader = createAsyncThunk("/", async (id) => {
  const response = await api.fetchLeader(id);
  return response.data;
});

export const addLeader = createAsyncThunk(
  "leaders/addLeader",
  async (leaderData) => {
    const response = await api.createLeader(leaderData);
    return response.data;
  }
);

export const modifyLeader = createAsyncThunk(
  "/",
  async ({ id, leaderData }) => {
    const response = await api.updateLeader(id, leaderData);
    return response.data;
  }
);

export const removeLeader = createAsyncThunk("/", async (id) => {
  await api.deleteLeader(id);
  return id;
});
