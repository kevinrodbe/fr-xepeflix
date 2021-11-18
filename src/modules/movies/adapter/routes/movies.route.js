import { ProtectedRoute } from '../../../../adapter/routes/Protected.route';

import { Browse } from '../../ui/pages/Browse';

export const MoviesRoutes = () => {
  return [<ProtectedRoute path="/browse" component={Browse} exact key="browse" />];
};
