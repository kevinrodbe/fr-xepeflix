import { webStorage } from '../../../../infra/storage';
import { LoginMap, RegisterMap } from '../../mappers/user.map';

const webLocalStorage = webStorage('local');

export const register = (body) => {
  const req = RegisterMap.toPersistence(body);
  const bd = webLocalStorage.get('user_bd') || [];

  return new Promise((resolve) => {
    setTimeout(() => {
      webLocalStorage.set('user_bd', [...bd, req]);
      resolve('User Created');
    }, 1000);
  });
};

export const login = (user) => {
  const req = LoginMap.toPersistence(user);
  const bd = webLocalStorage.get('user_bd') || [];
  const userFound = bd.find((u) => u.email === req.email);
  const isSamePWD = userFound?.password === req.password;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userFound || !isSamePWD) {
        return reject('Invalid email or password ');
      }

      resolve(RegisterMap.toDomain(userFound));
    }, 1000);
  });
};
