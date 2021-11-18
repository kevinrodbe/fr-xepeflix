import { Route } from 'react-router-dom';

import { Login } from '../../ui/pages/Login';
import { Register } from '../../ui/pages/Register';

export const UserRoutes = () => {
  return [
    <Route path="/login" component={Login} exact key="login" />,
    <Route path="/register" component={Register} exact key="register" />,
  ];
};
