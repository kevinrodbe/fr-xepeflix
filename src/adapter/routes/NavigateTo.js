import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import { useLogin } from '../../modules/users/adapter/hooks/useLogin';

export const NavigateTo = () => {
  const { userState } = useLogin();
  const isLogged = userState?.isLogged;
  const history = useHistory();

  useEffect(() => {
    isLogged && history.push('/browse');
    !isLogged && history.push('/login');
  }, [history, isLogged]);

  return null;
};
