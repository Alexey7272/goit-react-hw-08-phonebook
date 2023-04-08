import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import PAGE_NAMES from './paths';

export const PrivateRoute = ({
  component: Component,
  redirectTo = PAGE_NAMES.homepage,
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};
