import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => {},
    togle: (state, action) => {},
    filter: (state, action) => {},
    amend: (state, action) => {},
  },
});
export const { add, remove, togle, filter, amend } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
