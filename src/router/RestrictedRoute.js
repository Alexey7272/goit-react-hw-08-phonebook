import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PAGE_NAMES from './paths';


export const RestrictedRoute = ({
  component: Component,
  redirectTo = PAGE_NAMES.homepage,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};
