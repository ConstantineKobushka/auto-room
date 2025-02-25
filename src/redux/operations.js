// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authInstans = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});

// export const apiSignUpUser = createAsyncThunk(
//   'auth/signupUser',
//   async (formData, thunkApi) => {
//     try {
//       const { data } = await authInstans.post('auth/register', formData);
//       setToken(data.token);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
