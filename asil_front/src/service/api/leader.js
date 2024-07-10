import axios from "axios";

const API_URL = "http://localhost:3003/api/leader/";

export const fetchLeaders = async () => {
  const response = await axios.get(API_URL);
  console.log(response.data.data);
  return response.data;
};

export const fetchLeader = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};

export const createLeader = async (leaderData) => {
  const response = await axios.post(API_URL, leaderData);
  return response.data;
};

export const updateLeader = async (id, leaderData) => {
  const response = await axios.put(`${API_URL}${id}`, leaderData);
  return response.data;
};

export const deleteLeader = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};
