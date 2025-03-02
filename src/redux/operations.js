import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const carsInstans = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});

export const apiGetCars = createAsyncThunk(
  'cars/getCars',
  async ({ page, limit = 2 }, thunkApi) => {
    console.log(page);
    try {
      const { data } = await carsInstans.get(
        `/cars?limit=${limit}&page=${page}`
      );
      console.log(data);
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
