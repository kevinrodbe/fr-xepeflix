// @ts-nocheck
import { action, createRequestTypes, to } from '../../../../utils';
import * as UserRepository from '../../infra/repository/user.repo';

export const REGISTER = createRequestTypes('REGISTER');
export const doRegister = (payload) => {
  return async (dispatch) => {
    await dispatch(request());
    const [err] = await to(UserRepository.register(payload));
    if (err) {
      return dispatch(failure(err));
    }

    return dispatch(success(payload));
  };

  function request() {
    return action(REGISTER.REQUEST);
  }
  function success(response) {
    return action(REGISTER.SUCCESS, response);
  }
  function failure(err) {
    return action(REGISTER.FAILURE, err, null);
  }
};

export const LOGIN = createRequestTypes('LOGIN');
export const doLogin = (payload) => {
  return async (dispatch) => {
    await dispatch(request());
    const [err, res] = await to(UserRepository.login(payload));
    if (err) {
      return dispatch(failure(err));
    }

    return dispatch(success(res));
  };

  function request() {
    return action(LOGIN.REQUEST);
  }
  function success(response) {
    return action(LOGIN.SUCCESS, response);
  }
  function failure(err) {
    return action(LOGIN.FAILURE, err, null);
  }
};
