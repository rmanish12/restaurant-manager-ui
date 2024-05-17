import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'shared/components/toast-container/toast-container';
import { TOASTER_TYPE } from 'shared/utils/constants';
import { ToasterTypeSuccess } from 'shared/models/toaster';
import AuthService from './api';
import { ILoginFormValueState } from '../models/pages';

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

    toast('Success', TOASTER_TYPE.SUCCESS as ToasterTypeSuccess);
    return data;
  } catch (err) {
    return rejectWithValue(err as AxiosError);
  }
});
