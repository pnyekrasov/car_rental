import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './carsSlice';

// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    // filter: filterReducer,
  },
});
