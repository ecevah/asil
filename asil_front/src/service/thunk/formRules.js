// features/formRules/formRuleThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/formRules";

export const getFormRules = createAsyncThunk(
  "formRules/getFormRules",
  async () => {
    const response = await api.fetchFormRules();
    return response.data;
  }
);

export const getFormRule = createAsyncThunk(
  "formRules/getFormRule",
  async (id) => {
    const response = await api.fetchFormRule(id);
    return response.data;
  }
);

export const addFormRule = createAsyncThunk(
  "formRules/addFormRule",
  async (formRuleData) => {
    const response = await api.createFormRule(formRuleData);
    return response.data;
  }
);

export const modifyFormRule = createAsyncThunk(
  "formRules/modifyFormRule",
  async ({ id, formRuleData }) => {
    const response = await api.updateFormRule(id, formRuleData);
    return response.data;
  }
);

export const removeFormRule = createAsyncThunk(
  "formRules/removeFormRule",
  async (id) => {
    await api.deleteFormRule(id);
    return id;
  }
);
