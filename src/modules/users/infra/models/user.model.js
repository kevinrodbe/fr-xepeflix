import * as yup from 'yup';

export const RegisterModel = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required().email(),
  pwd: yup.string().required(),
});

export const LoginModel = yup.object().shape({
  email: yup.string().required().email(),
  pwd: yup.string().required(),
});
