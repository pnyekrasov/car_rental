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


// reducers: {
//   addOrRemoveToFavorites: (state, action) => {
//     const carToAdd = action.payload;

//     if (!state.list.some((car) => car.id === carToAdd.id)) {
//       state.list.push(carToAdd);
//     } else {
//       const carToDelete = action.payload;
//       state.list = state.list.filter((car) => car.id !== carToDelete.id);
//     }
//   },
// }
// }