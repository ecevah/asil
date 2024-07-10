import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./reducer/group";
import leaderReducer from "./reducer/leader";
import formRulesReducer from "./reducer/formRules";
import reportReducer from "./reducer/report";
import studentReducer from "./reducer/student";
import studentReportReducer from "./reducer/studentReport";

export const store = configureStore({
  reducer: {
    groups: groupReducer,
    leaders: leaderReducer,
    formRules: formRulesReducer,
    reports: reportReducer,
    students: studentReducer,
    studentReports: studentReportReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
