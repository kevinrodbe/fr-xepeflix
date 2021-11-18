// @ts-nocheck
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { doLogin } from '../state/user.actions';
import { LoginModel } from '../../infra/models/user.model';

export const useLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((store) => store.user, shallowEqual);
  const onSubmit = (data) => {
    dispatch(doLogin(data, history));
  };
  const { register, handleSubmit, formState } = useForm({ mode: 'all', resolver: yupResolver(LoginModel) });
  const submit = () => {
    return handleSubmit(onSubmit);
  };

  return { userState, submit, formState, register };
};
