import axios from 'axios';

export const carsInstans = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});
