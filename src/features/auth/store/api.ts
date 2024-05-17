import { ILoginFormValueState } from '../models/pages';

class AuthService {
  login(payload: ILoginFormValueState) {
    return {
      data: {
        isAuthenticated: true,
        userDetails: {
          name: 'Random',
        },
      },
    };
  }
}

export default new AuthService();
