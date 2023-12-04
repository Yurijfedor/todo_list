import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/todos');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async ({ id, title, completed }, thunkAPI) => {
    try {
      const response = await axios.post('/todos', {
        id,
        title,
        completed,
        userId: 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async ({ id, completed }, thunkAPI) => {
    try {
      const response = await axios.patch(`/todos/${id}`, { completed });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
