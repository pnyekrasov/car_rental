import { createSlice } from '@reduxjs/toolkit';

import { fetchCatalog } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
  console.log(state.items);
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchCatalog.rejected, handleRejected),
});

export const catalogReducer = catalogSlice.reducer;
