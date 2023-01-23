import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AuthState } from "./interfaces";
import { IUser } from "../../../models/IUser";

const initialState: AuthState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  isError: "",
  viaSocial: false,
  withGoogle: false,
  withTwitter: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    enteredViaSocial: (state, action: PayloadAction<boolean>) => {
      state.viaSocial = action.payload;
    },
    enteredWithGoogle: (state, action: PayloadAction<boolean>) => {
      state.withGoogle = action.payload;
    },
    enteredWithTwitter: (state, action: PayloadAction<boolean>) => {
      state.withTwitter = action.payload;
    },
  }
});

export const {
  enteredViaSocial,
  enteredWithTwitter,
  enteredWithGoogle,
} = authSlice.actions;

export default authSlice.reducer;
