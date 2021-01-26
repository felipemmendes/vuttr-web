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
  UserType,
  UserState,
} from './types';

const localUser = localStorage.getItem('@VUTTR:user');
const localUserToken = localStorage.getItem('@VUTTR:token');

if (localUser && localUserToken) {
  api.defaults.headers.authorization = `Bearer ${localUserToken}`;
}

const initialUserState: UserState = {
  loading: false,
  user: localUser
    ? JSON.parse(localUser)
    : {
        id: '',
        username: '',
      },
  token: localUserToken || '',
  error: '',
};

const userReducer = (state = initialUserState, action: UserType): UserState => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS: {
      const { user, token } = action.payload;

      localStorage.setItem('@VUTTR:user', JSON.stringify(user));
      localStorage.setItem('@VUTTR:token', token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        ...state,
        loading: false,
        user,
        token,
        error: '',
      };
    }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        user: {
          id: '',
          username: '',
        },
        error: action.payload,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: '',
      };
    }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGN_OUT:
      localStorage.removeItem('@VUTTR:user');
      localStorage.removeItem('@VUTTR:token');

      return {
        ...state,
        loading: false,
        user: {
          id: '',
          username: '',
        },
        token: '',
        error: '',
      };
    case CLEAR_USER_ERRORS:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default userReducer;
