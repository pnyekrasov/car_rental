// import { createSelector } from '@reduxjs/toolkit';

export const selectCatalog = state => state.catalog.items;

export const selectIsLoading = state => state.catalog.isLoading;

export const selectError = state => state.catalog.error;

// export const selectFilter = state => state.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

// export const selectNumberContacts = createSelector(
//   [selectContacts],
//   contacts => {
//     return contacts.length;
//   }
// );
