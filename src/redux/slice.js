import { createSlice } from '@reduxjs/toolkit';
import { apiGetCarById, apiGetCars } from './operations';

const INITIAL_STATE = {
  carsData: [],
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
    incrementPage: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
        console.log(state.page);
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

        if (state.page === 1) {
          state.carsData = action.payload.cars;
        } else {
          state.carsData = [...state.carsData, ...action.payload.cars];
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
