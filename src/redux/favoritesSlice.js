import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: '',
  reducers: {
    getFavoritesCar(state, action) {
      return action.payload;
    },
  },
});

export const { getFavoritesCar } = favoritesSlice.actions;
export const filterReducer = favoritesSlice.reducer;

