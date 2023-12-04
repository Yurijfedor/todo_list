import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: { value: filterInitialState },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
