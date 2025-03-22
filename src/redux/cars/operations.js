import { createAsyncThunk } from '@reduxjs/toolkit';

import { carsInstans } from '../../utils/axiosInstans';

// export const apiGetCars = createAsyncThunk(
//   'cars/getCars',
//   async ({ page, limit }, thunkApi) => {
//     try {
//       const { data } = await carsInstans.get(
//         `/cars?limit=${limit}&page=${page}`
//       );
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const apiGetCars = createAsyncThunk(
  'cars/getCars',
  async (params, thunkApi) => {
    try {
      const { data } = await carsInstans.get('/cars', { params });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetCarById = createAsyncThunk(
  'car/getCarsById',
  async (id, thunkApi) => {
    try {
      const { data } = await carsInstans.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
