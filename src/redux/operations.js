import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://657369fa192318b7db4214a7.mockapi.io/adverts';

export const fetchCatalog = createAsyncThunk(
  'adverts/fetchCatalog',
  async ({ page, limit }, thunkAPI) => {
    try {
      const url = new URL('https://657369fa192318b7db4214a7.mockapi.io/adverts/adverts');
      // url.searchParams.append('completed', false);
      url.searchParams.append('page', page);
      url.searchParams.append('limit', limit);
      const response = await axios.get(url.toString());
        return response.data; 

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



