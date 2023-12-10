import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://657369fa192318b7db4214a7.mockapi.io/adverts';

export const fetchCatalog = createAsyncThunk(
  'adverts/fetchCatalog',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


