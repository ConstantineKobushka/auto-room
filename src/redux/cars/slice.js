import { createSlice } from '@reduxjs/toolkit';
import { apiGetCarById, apiGetCars } from './operations';

const INITIAL_STATE = {
  cars: null,
  car: null,
  isLoading: false,
  error: null,
  page: 1,
  totalPages: null,
  totalCars: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    resetCars: (state) => {
      state.cars = null;
      state.page = 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(apiGetCars.fulfilled, (state, action) => {
        state.isLoading = false;

        if (state.page === 1) {
          state.cars = action.payload.cars;
        } else {
          state.cars = [...state.cars, ...action.payload.cars];
        }

        state.page = Number(action.payload.page) + 1;
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
      })

      .addCase(apiGetCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiGetCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(apiGetCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { incrementPage, resetCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
