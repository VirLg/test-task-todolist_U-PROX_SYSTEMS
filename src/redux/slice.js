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

    filter: (state, action) => {},
    amend: (state, action) => {},
  },
});
export const { add, remove, togle, filter, amend } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
// state.map(el =>
//   el.id === action.payload
//     ? {
//         ...el,
//         aaa: !el.complited,
//         complited: !el.complited,
//       }
//     : el
// );
