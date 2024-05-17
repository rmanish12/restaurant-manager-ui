import { IRedux } from '../models/redux';

export const initialState: IRedux = {
  isAuthenticated: false,
  userDetails: {
    name: '',
  },
};
