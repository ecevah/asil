import axios from "axios";

const API_URL = "http://localhost:5000/api/formRules/";

export const fetchFormRules = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchFormRule = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};

export const createFormRule = async (formRuleData) => {
  const response = await axios.post(API_URL, formRuleData);
  return response.data;
};

export const updateFormRule = async (id, formRuleData) => {
  const response = await axios.put(`${API_URL}${id}`, formRuleData);
  return response.data;
};

export const deleteFormRule = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};
