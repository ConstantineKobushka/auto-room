import { createSlice } from '@reduxjs/toolkit';

import { apiGetCarsBrends } from './operations';

const INITIAL_STATE = {
  carsBrands: null,
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetCarsBrends.pending, (state) => {})
      .addCase(apiGetCarsBrends.fulfilled, (state, action) => {})
      .addCase(apiGetCarsBrends.rejected, (state, action) => {}),
});

export const filtersReducer = filtersSlice.reducer;
