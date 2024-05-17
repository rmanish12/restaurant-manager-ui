import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { initialState } from './initial-state';
import { login } from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log('payload: ', payload);
    });
    builder.addCase(login.rejected, (state) => {
      state = cloneDeep(initialState);
    });
  },
});

export default authSlice.reducer;
