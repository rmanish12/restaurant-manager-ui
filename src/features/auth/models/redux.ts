export interface IUserDetails {
  name: string;
}

export interface IRedux {
  isAuthenticated: boolean;
  userDetails: IUserDetails;
}
