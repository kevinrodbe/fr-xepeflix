// @ts-nocheck
import { LOGIN, REGISTER } from './user.actions';

const initalState = {
  error: false,
  loading: false,
  isLogged: false,
  user: null,
};

const error = (state = initalState.error, action) => {
  switch (action.type) {
    case REGISTER.REQUEST:
    case REGISTER.SUCCESS:
    case LOGIN.REQUEST:
    case LOGIN.SUCCESS:
      return false;
    case REGISTER.FAILURE:
    case LOGIN.FAILURE:
      return true;
    default:
      return state;
  }
};

const loading = (state = initalState.loading, action) => {
  switch (action.type) {
    case REGISTER.REQUEST:
    case LOGIN.REQUEST:
      return true;
    case REGISTER.SUCCESS:
    case REGISTER.FAILURE:
    case LOGIN.SUCCESS:
    case LOGIN.FAILURE:
      return false;
    default:
      return state;
  }
};

const isLogged = (state = initalState.isLogged, action) => {
  switch (action.type) {
    case REGISTER.SUCCESS:
    case LOGIN.SUCCESS:
      return true;
    case REGISTER.REQUEST:
    case REGISTER.FAILURE:
    case LOGIN.REQUEST:
    case LOGIN.FAILURE:
      return false;
    default:
      return state;
  }
};

const user = (state = initalState.user, action) => {
  switch (action.type) {
    case REGISTER.SUCCESS:
    case LOGIN.SUCCESS:
      return action.payload;
    case REGISTER.REQUEST:
    case LOGIN.REQUEST:
      return null;
    case REGISTER.FAILURE:
    case LOGIN.FAILURE:
      return false;
    default:
      return state;
  }
};

export const userReducer = {
  name: 'user',
  reducers: {
    error,
    loading,
    isLogged,
    user,
  },
};
