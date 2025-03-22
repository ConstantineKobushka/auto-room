import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: JSON.parse(localStorage.getItem('favorites')) || {},
};

const favoritesSlice = createSlice({
  name: 'favorites', // збігається с ключом key в store
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      state.favorite[id] = !state.favorite[id]; // змінюємо стан на протилежне значення
      localStorage.setItem('favorites', JSON.stringify(state.favorite));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
