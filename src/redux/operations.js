import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const carsInstans = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});

export const apiGetCars = createAsyncThunk(
  'cars/getCars',
  async ({ page = 1, limit = 8 }, thunkApi) => {
    try {
      const { data } = await carsInstans.get(
        `/cars?page=${page}&limit=${limit}`
      );
      return { ...data, page };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetCarById = createAsyncThunk(
  'cars/getCars',
  async (id, thunkApi) => {
    try {
      const { data } = await carsInstans.get(`/cars/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
