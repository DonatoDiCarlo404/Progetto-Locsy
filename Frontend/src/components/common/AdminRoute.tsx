// AdminRoute - Protegge le route riservate agli amministratori
// Se l'utente non è loggato o non è admin, viene reindirizzato

import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);

  // Se non c'è utente loggato, reindirizzo al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se l'utente non è admin, reindirizzo alla home
  if (user.ruolo !== 'admin') {
    return <Navigate to="/" replace />;
  }

  // Altrimenti mostro il contenuto riservato agli admin
  return <>{children}</>;
};

export default AdminRoute;
