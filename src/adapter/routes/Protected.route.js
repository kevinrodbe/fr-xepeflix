import { Route, Redirect } from 'react-router-dom';

import { useLogin } from '../../modules/users/adapter/hooks/useLogin';

export const ProtectedRoute = (props) => {
  const { redirectPath = '/login', component: Component, ...restProps } = props;
  const { userState } = useLogin();
  const isLogged = userState?.isLogged;

  return (
    <Route
      {...restProps}
      render={(props) => {
        return isLogged ? <Component {...props} /> : <Redirect to={redirectPath} />;
      }}
    />
  );
};
