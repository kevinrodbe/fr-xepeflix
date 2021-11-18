// @ts-nocheck
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { doRegister } from '../state/user.actions';
import { RegisterModel } from '../../infra/models/user.model';

export const useRegister = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store) => store.user, shallowEqual);
  const onSubmit = (data) => {
    dispatch(doRegister(data));
  };
  const { register, handleSubmit, formState } = useForm({ mode: 'all', resolver: yupResolver(RegisterModel) });
  const submit = () => {
    return handleSubmit(onSubmit);
  };

  return { userState, submit, formState, register };
};
