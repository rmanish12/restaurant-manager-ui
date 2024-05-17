import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ILoginFormValueState } from '../models/pages';
import AuthService from './api';

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const login = createAsyncThunk<
  any,
  ILoginFormValueState,
  { rejectValue: AxiosError }
>('post/loign', async (payload, { rejectWithValue }) => {
  try {
    await sleep(1000);
    const { data } = AuthService.login(payload);

    return data;
  } catch (err) {
    return rejectWithValue(err as AxiosError);
  }
});
