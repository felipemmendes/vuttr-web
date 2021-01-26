import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
  CLEAR_USER_ERRORS,
  SignInType,
  SignUpType,
  SignOutType,
  ClearUserErrorsType,
  SignInCredentials,
  SignUpCredentials,
  Error,
  User,
} from './types';
import { RootState } from '../rootReducer';

export const signInRequest = (): SignInType => {
  return {
    type: SIGN_IN_REQUEST,
  };
};

export const signInSuccess = (user: User): SignInType => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error: Error): SignInType => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signIn = ({
  username,
  password,
}: SignInCredentials): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch(signInRequest());

    api
      .post('sessions', {
        username,
        password,
      })
      .then((response) => {
        const { user, token } = response.data;
        dispatch(
          signInSuccess({
            user,
            token,
          }),
        );
      })
      .catch((error) => {
        dispatch(signInFailure(error.response));
      });
  };
};

export const signUpRequest = (): SignUpType => {
  return {
    type: SIGN_UP_REQUEST,
  };
};

export const signUpSuccess = (): SignUpType => {
  return {
    type: SIGN_UP_SUCCESS,
  };
};

export const signUpFailure = (error: Error): SignUpType => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUp = ({
  username,
  password,
  password_confirmation,
}: SignUpCredentials): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch(signUpRequest());

    api
      .post('users', {
        username,
        password,
        password_confirmation,
      })
      .then(() => {
        dispatch(signUpSuccess());
      })
      .catch((error) => {
        dispatch(signUpFailure(error.response));
      });
  };
};

export const signOut = (): SignOutType => {
  return {
    type: SIGN_OUT,
  };
};

export const clearUserErrors = (): ClearUserErrorsType => {
  return {
    type: CLEAR_USER_ERRORS,
  };
};
