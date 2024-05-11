import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    clearEmployees: (state) => {
      state.employees = [];
    },
    initializeEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});

export const { addEmployee, clearEmployees, initializeEmployees } =
  employeeSlice.actions;

export default employeeSlice.reducer;
