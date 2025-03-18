import { createAsyncThunk } from '@reduxjs/toolkit';

import { carsInstans } from '../../utils/axiosInstans';

export const apiGetCarBrends = createAsyncThunk(
  'car/getCarBrends',
  async (_, thunkApi) => {
    try {
      const { data } = await carsInstans.get('/brands');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
