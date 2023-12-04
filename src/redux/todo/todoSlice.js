import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, editTodo, deleteTodo } from './operations';

const todosInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedTodo = action.payload;
        state.items = state.items.map(todo =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.items.splice(index, 1);
      });
  },
});

export const todosReducer = todosSlice.reducer;
