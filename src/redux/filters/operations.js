import { createAsyncThunk } from '@reduxjs/toolkit';

import { carsInstans } from '../../utils/axiosInstans';

export const apiGetCarBrends = createAsyncThunk(
  'car/getCarsById',
  async (_, thunkApi) => {
    try {
      const { data } = await carsInstans.get('/brands');
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
