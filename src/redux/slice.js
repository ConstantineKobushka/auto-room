import { createSlice } from '@reduxjs/toolkit';
import { apiGetCars } from './operations';

const INITIAL_STATE = {
  carsData: null,
  isLoading: false,
  error: null,
  page: 1,
  totalCars: null,
  totalPages: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    incrementPage: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
    resetCars: (state) => {
      state.carsData = [];
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

        if (state.carsData === null) {
          state.carsData = action.payload.cars;
        } else {
          const newCars = action.payload.cars.filter(
            (newCar) =>
              !state.carsData.some(
                (existingCar) => existingCar.id === newCar.id
              )
          );
          state.carsData = [...state.carsData, ...newCars];
        }
        state.totalCars = action.payload.totalCars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })

      .addCase(apiGetCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { incrementPage, resetCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
