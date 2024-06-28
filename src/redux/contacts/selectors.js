// src/redux/contacts/selectors.js
import { createSelector } from 'reselect';

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter;
export const selectContactsLoading = (state) => state.contacts.isLoading;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const lowercasedFilter = filter?.toLowerCase() || '';
    return contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(lowercasedFilter) ||
      contact.number?.toLowerCase().includes(lowercasedFilter)
    );
  }
);
