import axios from "axios";

const API_URL = "http://localhost:3003/api/group/";

export const fetchGroups = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchGroup = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};

export const createGroup = async (groupData) => {
  const response = await axios.post(API_URL, groupData);
  return response.data;
};

export const updateGroup = async (id, groupData) => {
  const response = await axios.put(`${API_URL}${id}`, groupData);
  return response.data;
};

export const deleteGroup = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};
