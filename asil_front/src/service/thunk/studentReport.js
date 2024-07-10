import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/studentReport";

export const getStudentsReports = createAsyncThunk(
  "studentsReports/getStudentsReports",
  async (query) => {
    const response = await api.fetchStudentsReports(query);
    return response.data;
  }
);

export const getStudentsReport = createAsyncThunk(
  "studentsReports/getStudentsReport",
  async (id) => {
    const response = await api.fetchStudentsReport(id);
    return response.data;
  }
);

export const addStudentsReport = createAsyncThunk(
  "studentsReports/addStudentsReport",
  async (studentsReportData) => {
    const response = await api.createStudentsReport(studentsReportData);
    return response.data;
  }
);

export const updateStudentsReport = createAsyncThunk(
  "studentsReports/updateStudentsReport",
  async ({ id, studentsReportData }) => {
    const response = await api.updateStudentsReport(id, studentsReportData);
    return response.data;
  }
);

export const removeStudentsReport = createAsyncThunk(
  "studentsReports/removeStudentsReport",
  async (id) => {
    await api.deleteStudentsReport(id);
    return id;
  }
);
