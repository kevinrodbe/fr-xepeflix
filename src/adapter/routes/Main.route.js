import React from 'react';
import { Switch } from 'react-router-dom';

import { UserRoutes } from '../../modules/users/adapter/routes';
import { MoviesRoutes } from '../../modules/movies/adapter/routes';
import { NavigateTo } from './NavigateTo';

export const MainRoute = () => {
  return (
    <>
      <NavigateTo />
      <Switch>
        {UserRoutes()}
        {MoviesRoutes()}
      </Switch>
    </>
  );
};
