import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => state.filter(el => el.id !== action.payload),

    togle: (state, action) =>
      state.map(el => {
        if (el.id === action.payload) {
          return { ...el, complited: !el.complited };
        } else {
          return el;
        }
      }),

    // filter: (state, action) => {},
    amend: (state, action) => {
      console.log('action', action.payload);
    },
  },
});

const sortSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    sort: (_, action) => action.payload,
  },
});

export const { sort } = sortSlice.actions;
export const filterReducer = sortSlice.reducer;

export const { add, remove, togle, filter, amend } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

const modalSlice = createSlice({
  name: 'modal',
  initialState: true,
  reducers: {
    modalShow: (state, action) => (state = action.payload),
  },
});
export const { modalShow } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
