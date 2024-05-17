import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { TOASTER_TYPE } from 'shared/utils/constants';
import { ToasterTypeError, ToasterTypeSuccess } from 'shared/models/toaster';
import { IAllotTablePayload } from '../models/redux';
import { toast } from '../../../shared/components/toast-container/toast-container';
import sleep from '../../../shared/utils/sleep';
import AllotTableService from './api';

export const allotTable = createAsyncThunk<
  any,
  IAllotTablePayload,
  { rejectValue: AxiosError }
>('post/allotTable', async (payload, { rejectWithValue }) => {
  try {
    await sleep(1000);
    const data = AllotTableService.allotTable(payload);

    toast(
      'Table allotted successfully',
      TOASTER_TYPE.SUCCESS as ToasterTypeSuccess,
    );

    return data;
  } catch (err) {
    toast('Error while alloting table', TOASTER_TYPE.ERROR as ToasterTypeError);
    rejectWithValue(err as AxiosError);
    return err;
  }
});
