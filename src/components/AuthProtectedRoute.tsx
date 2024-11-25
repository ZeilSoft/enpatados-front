import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/auth/context/auth-context';

export const AuthProtectedRoute = ({ children }: any) => {
  const { authUser } = useAuthContext();

  return authUser ? <Navigate to="/" /> : children;
};