import axios from "axios";

const API_URL = "http://localhost:5000/api/studentsReports/";

export const fetchStudentsReports = async (query = {}) => {
  const response = await axios.get(API_URL, { params: query });
  return response.data;
};

export const fetchStudentsReport = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};

export const createStudentsReport = async (studentsReportData) => {
  const response = await axios.post(API_URL, studentsReportData);
  return response.data;
};

export const updateStudentsReport = async (id, studentsReportData) => {
  const response = await axios.put(`${API_URL}${id}`, studentsReportData);
  return response.data;
};

export const deleteStudentsReport = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};
