import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import sleep from 'shared/utils/sleep';
import AuthService from './api';
import { ILoginFormValueState } from '../models/pages';

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
