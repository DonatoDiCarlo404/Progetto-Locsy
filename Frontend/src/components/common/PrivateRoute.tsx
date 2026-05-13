// PrivateRoute - Protegge le route che richiedono autenticazione
// Se l'utente non è loggato, viene reindirizzato al login

import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);

  // Se non c'è utente loggato, reindirizzo al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Altrimenti mostro il contenuto protetto
  return <>{children}</>;
};

export default PrivateRoute;
