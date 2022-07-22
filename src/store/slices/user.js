import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: {
    name: '',
    age: 0,
    email: '',
  },
};

export const getList = createAsyncThunk('GET_LIST', async () => {
  const response = await axios.get('http://192.168.0.44:9090/test/test11');
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
