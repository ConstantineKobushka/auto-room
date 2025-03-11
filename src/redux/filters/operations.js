import { createAsyncThunk } from '@reduxjs/toolkit';

import { carsInstans } from '../cars/operations';

export const apiGetCarsBrends = createAsyncThunk(
  'car/getCarsById',
  async (_, thunkApi) => {
    try {
      const { data } = await carsInstans.get('/brends/');
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
