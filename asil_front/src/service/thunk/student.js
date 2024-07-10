import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/student";

export const getStudents = createAsyncThunk("", async () => {
  const response = await api.fetchStudents();
  return response.data;
});

export const getStudent = createAsyncThunk("", async (id) => {
  const response = await api.fetchStudent(id);
  return response.data;
});

export const addStudent = createAsyncThunk("", async (studentData) => {
  const response = await api.createStudent(studentData);
  return response.data;
});

export const updateStudent = createAsyncThunk(
  "",
  async ({ id, studentData }) => {
    const response = await api.updateStudent(id, studentData);
    return response.data;
  }
);

export const removeStudent = createAsyncThunk("", async (id) => {
  await api.deleteStudent(id);
  return id;
});
