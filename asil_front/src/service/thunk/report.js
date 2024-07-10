import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/report";

export const getReports = createAsyncThunk("reports/getReports", async () => {
  const response = await api.fetchReports();
  return response.data;
});

export const getReport = createAsyncThunk("reports/getReport", async (id) => {
  const response = await api.fetchReport(id);
  return response.data;
});

export const addReport = createAsyncThunk(
  "reports/addReport",
  async (reportData) => {
    const response = await api.createReport(reportData);
    return response.data;
  }
);

export const updateReport = createAsyncThunk(
  "reports/updateReport",
  async ({ id, reportData }) => {
    const response = await api.updateReport(id, reportData);
    return response.data;
  }
);

export const removeReport = createAsyncThunk(
  "reports/removeReport",
  async (id) => {
    await api.deleteReport(id);
    return id;
  }
);
