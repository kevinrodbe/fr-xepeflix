import { User } from '../domain/user';

export const RegisterMap = {
  toDomain: (raw) => User.create(raw),
  toPersistence: (user) => ({
    email: user.email,
    password: user.pwd,
    username: user.username,
  }),
};

export const LoginMap = {
  toDomain: (raw) => User.create(raw),
  toPersistence: (user) => ({
    email: user.email,
    password: user.pwd,
  }),
};
