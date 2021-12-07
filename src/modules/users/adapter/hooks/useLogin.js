// @ts-nocheck
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { doLogin } from '../state/user.actions';
import { LoginModel } from '../../infra/models/user.model';

export const useLogin = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store) => store.user, shallowEqual);
  const onSubmit = (data) => {
    dispatch(doLogin(data));
  };
  const { register, handleSubmit, formState } = useForm({ mode: 'all', resolver: yupResolver(LoginModel) });
  const submit = () => {
    return handleSubmit(onSubmit);
  };

  return { userState, submit, formState, register };
};
