export interface User {
  user: { id: string; username: string };
  token: string;
}

export interface SignInCredentials {
  username: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  password: string;
  password_confirmation: string;
}

export interface Error {
  data: {
    message: string;
  };
  status: number;
}

export interface UserState {
  loading: boolean;
  user: {
    id: string;
    username: string;
  };
  token: string;
  error: Error | '';
}

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_OUT = 'SIGN_OUT';

export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

interface SignInRequest {
  type: typeof SIGN_IN_REQUEST;
}

interface SignInSuccess {
  type: typeof SIGN_IN_SUCCESS;
  payload: User;
}

interface SignInFailure {
  type: typeof SIGN_IN_FAILURE;
  payload: Error;
}

interface SignUpRequest {
  type: typeof SIGN_UP_REQUEST;
}

interface SignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
}

interface SignUpFailure {
  type: typeof SIGN_UP_FAILURE;
  payload: Error;
}

interface SignOut {
  type: typeof SIGN_OUT;
}

interface ClearUserErrors {
  type: typeof CLEAR_USER_ERRORS;
}

export type SignInType = SignInRequest | SignInSuccess | SignInFailure;

export type SignUpType = SignUpRequest | SignUpSuccess | SignUpFailure;

export type SignOutType = SignOut;

export type ClearUserErrorsType = ClearUserErrors;

export type UserType =
  | SignInType
  | SignUpType
  | SignOutType
  | ClearUserErrorsType;
