import { createSlice } from '@reduxjs/toolkit';

import { apiGetCarBrends } from './operations';

const INITIAL_STATE = {
  carBrands: null,
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetCarBrends.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetCarBrends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carBrands = action.payload;
      })
      .addCase(apiGetCarBrends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const filtersReducer = filtersSlice.reducer;
