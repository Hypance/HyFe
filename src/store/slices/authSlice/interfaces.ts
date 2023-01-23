import { IUser } from "../../../models/IUser";

export interface AuthState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: any;
  viaSocial: boolean;
  withGoogle: boolean;
  withTwitter: boolean;
}
