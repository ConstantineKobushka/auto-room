import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  userData: null,
  isLoading: false,
  isLoadingPhoto: false,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  // extraReducers: (builder) => builder.addCase(),
});

export const authReducer = authSlise.reducer;
